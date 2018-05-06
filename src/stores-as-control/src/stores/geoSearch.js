/**
 * @author Nathanael BRAUN
 *
 * Date: 29/05/2017
 * Time: 10:50
 */
import { Store }             from "rescope";
import { createHashHistory } from "history";
import jsonp                 from "jsonp";

var debounce = require('debounce');

export default class geoSearch extends Store {
    static use          = [ "appParams", "appState", "countries" ];
    static require      = [ "appParams", "appState", "countries" ];
    static initialState = {
        search : '',
        results: []
    };
    
    constructor() {
        super(...arguments);
    }
    
    clean() {
        this.setState({
                          search : '',
                          results: []
                      })
    }
    
    
    apply( datas, { countries, appParams: { mapZenApiKey, geonamesUserId, lang }, bboxInfos: { bbox } = {}, appState: { cPlace, cPlaceId, cCountry } }, { search } ) {
        if ( cCountry && countries.iso2[ cCountry ] && countries.iso2[ cCountry ].geonameId != cPlaceId ) {
            cPlaceId = countries.iso2[ cCountry ].geonameId;
            
            if ( cPlace && cPlace.geonameId != cPlaceId )
                cPlace = null;
        }
        if ( !cPlace && cPlaceId ) {
            jsonp(`http://api.geonames.org/getJSON?geonameId=${
                      cPlaceId
                      }&lang=${
                      lang.toLowerCase()
                      }&username=${
                      geonamesUserId
                      }&type=json&inclBbox=true`,
                  ( e, r ) => {
                      if ( !e )
                          this.stores.appState.setState({ cPlace: r,
                                                            cBbox: null,
                                                            cCountry: null
                                                        });
                      else
                          this.stores.appState.setState({ cPlaceId: null,
                                                            cCountry: null
                                                        });
                  }
            )
            
            
            return {
                loading: true,
                search : '',
                results: []
            };
        }
        
        this.__refine(...arguments)
        
        if ( !search )
            return {
                search : '',
                results: []
            };
        return {
            loading: true,
            ...datas
        };
    }
    
    _refine( datas, { appParams: { mapZenApiKey, geonamesUserId, lang }, bboxInfos: { bbox } = {}, appState: { cPlace, cPlaceId } }, { search } ) {
        //http://179-www-cartobusiness-accor-com-93121616.os.nextdeploy.publicis-nurun.com/#lang=FR&debug=true&cityPad=1
        let box       = bbox && bbox.toBBoxString().split(',').map(parseFloat),
            argz      = arguments,
            query,
            featTypes = [
                "PPLA"
                , "PPLC"
                , "PPLA1"
                , "PPLA2"
                ,
                "PPL"
                // , "ADM2"
                , "ADM1"
                // , "PPLA3"
                , "PCLI"
            ];// = box
              // &&`&focus.rect.min_lon=${box[1]}&focus.rect.min_lat=${box[0]}&focus.rect.max_lon=${box[3]}&focus.rect.max_lat=${box[2]}`;
        
        
        if ( search && search.length > 1 ) {
            
            query = `http://api.geonames.org/searchJSON?name_startsWith=${
                encodeURI(search)
                }&searchlang=${
                lang.toLowerCase()
                }&username=${
                geonamesUserId
                }&type=json&orderby=population${featTypes.map(
                t => `&featureCode=${t}`)}&inclBbox=true&isNameRequired=true`;
            jsonp(query,
                  ( e, r ) => {
                
                      if ( e || !r.geonames ) {
                          console.warn("Geonames server fail :/ !", e, query);
                          return setTimeout(tm => this.refine(...argz), 1000);
                      }
                
                      let remap     = {},
                          countries = r.geonames.filter(place => ( place.fcode == 'PCLI' )),
                          cities    = r.geonames.filter(place => ( place.fcode != 'PCLI' ))
                                       .reduce(
                                           ( r, place ) => {
                                               // debugger
                                               let key = place.name + '#' + place.countryCode + '#' + place.adminCode1;
                                               if ( remap[ key ] &&
                                                    featTypes.indexOf(place.fcode) <
                                                    featTypes.indexOf(remap[ key ].fcode) ) {
                            
                                                   r.splice(r.indexOf(remap[ key ]), 1);
                                                   // if ( place.bbox.accuracyLevel <
                                                   // remap[key].bbox.accuracyLevel )
                                                   // place.bbox = remap[key].bbox;
                                                   remap[ key ] = place;
                                                   r.push(place);
                                               }
                                               else if ( !remap[ key ] ) {
                                                   remap[ key ] = place;
                                                   r.push(place);
                                               }
                                               return r;
                        
                                           },
                                           []
                                       ),
                          // .sort(
                          //     ( a, b ) => (b.population - a.population)),
                          suggests  = [
                              ...countries.slice(0, 5 - Math.min(3, cities.length)),
                              ...cities.slice(0, 5)
                          ].slice(0, 5)
                           .sort(function ( a, b ) {
                               if ( a.name < b.name ) return -1;
                               if ( a.name > b.name ) return 1;
                               return 0;
                           })
                      ;
                
                      if ( this.state.search === search )
                          this.push(
                              {
                                  loading: false,
                                  search : search,
                                  results: suggests
                              }
                          )
                
                  }
            )
            return {
                searching: search,
                search   : '',
                results  : []
            };
        }
        return datas;
    }
}