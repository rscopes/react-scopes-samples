import { Scope, Store } from "rescope";
import is               from "is";


export default class TableStore extends Store {
    
    static defaultState = {
        bounds: Config.worldMaxBounds
    };
    
    reset() {
        this.push({
                      bounds: Config.worldMaxBounds
                  });
    }
    
    clean() {
        this.setState({ search: '' })
    }
    
    apply( datas, { appState: { cBBox, cPlace, cRegion, cGPS }, appParams: { cityPad }, accorDatas: { regionById, countryById }, countries } ) {
        let bbox,
            pts, latlng;
        if ( cBBox && !this._firstLoad ) {
            this._firstLoad = true;
            bbox            = cBBox.split(',').map(parseFloat);
            bbox            = Leaflet.latLngBounds(bbox.slice(0, 2).reverse(), bbox.slice(2, 4).reverse());
            return {
                bounds      : cBBox,
                latLngBounds: bbox
            };
        }
        
        if ( cGPS && cGPS.split(',').map(parseFloat).filter(v => !!v).length == 2 ) {
            cBBox = cRegion = null;
            latlng = cGPS.split(',').map(parseFloat);
            bbox   = getBoundingBox([ latlng[ 0 ], latlng[ 1 ] ],
                                    .5);
            
            return {
                bounds      : bbox.join(','),
                latLngBounds: Leaflet.latLngBounds(bbox.slice(0, 2).reverse(), bbox.slice(2, 4).reverse())
            };
        }
        
        if ( cPlace ) {
            
            if ( cPlace.fcode == 'PCLI' && iso2ToIso3[ cPlace.countryCode ] ) {
                bbox = Leaflet.latLngBounds(
                    [ cPlace.bbox.north, cPlace.bbox.east ],
                    [ cPlace.bbox.south, cPlace.bbox.west ]
                );
                if ( countries.iso2[ cPlace.countryCode ] ) {
                    
                    bbox._northEast.lat = parseFloat(countries.iso2[ cPlace.countryCode ].north);
                    bbox._northEast.lng = parseFloat(countries.iso2[ cPlace.countryCode ].east);
                    bbox._southWest.lat = parseFloat(countries.iso2[ cPlace.countryCode ].south);
                    bbox._southWest.lng = parseFloat(countries.iso2[ cPlace.countryCode ].west);
                }
                
                //else bbox = bbox.pad(.05);
                // } else if ( cPlace && cPlace.bbox ) {
                //     bbox = cPlace.bbox;
                //     bbox = Leaflet.latLngBounds(
                //         [bbox.north, bbox.east],
                //         [bbox.south, bbox.west]
                //     ).pad(parseFloat(cityPad));
            }
            else {
                
                bbox = getBoundingBox([ parseFloat(cPlace.lat), parseFloat(cPlace.lng) ],
                    1 + Math.min(5, cPlace.population / 200000));
                bbox = Leaflet.latLngBounds(bbox.slice(0, 2).reverse(), bbox.slice(2, 4).reverse()).pad(
                    parseFloat(cityPad));
                
            }
            
            
            return {
                bounds      : bbox.toBBoxString(),
                latLngBounds: bbox
            };
            
        }
        if ( cRegion ) {
            if ( regionById[ cRegion ].boundingBox ) {
                bbox = regionById[ cRegion ].boundingBox.split(',').map(parseFloat);
                bbox = Leaflet.latLngBounds(bbox.slice(0, 2).reverse(), bbox.slice(2, 4).reverse());
            }
            else {
                bbox = Leaflet.latLngBounds(
                    regionById[ cRegion ].countries
                                         .reduce(
                                             ( ll, cid ) => {
                                                 if ( countries.iso3[ cid ] )
                                                     ll.push(
                                                         [ countries.iso3[ cid ].north, countries.iso3[ cid ].west ],
                                                         [ countries.iso3[ cid ].south, countries.iso3[ cid ].east ]
                                                     );
                                                 else
                                                     console.warn("Not found ", cid);
                                                 return ll;
                                             },
                                             []
                                         )
                );
            }
            return {
                bounds      : bbox.toBBoxString(),
                latLngBounds: bbox
            };
        }
        
        if ( bbox ) {
            bbox = Leaflet.latLngBounds(bbox.slice(0, 2), bbox.slice(2, 2));
            return {
                bounds      : bbox.toBBoxString(),
                latLngBounds: bbox
            };
        }
        return datas;
    }
    
}