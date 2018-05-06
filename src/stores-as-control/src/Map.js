'use strict';

import React, { Component }                                          from "react";
import { LayerGroup, Map, Popup, Rectangle, TileLayer, ZoomControl } from "react-leaflet";
import Leaflet                                                       from 'leaflet';

import {
    Store, Scope, reScope, scopeRef, scopeToProps, scopeToState, propsToScope
} from "react-rescope";
import 'leaflet/dist/leaflet.css';

var debounce = require('debounce');

var CollisionLayer = require('leaflet.layergroup.collision');
require('leaflet.markercluster/dist/leaflet.markercluster-src');
require('leaflet.markercluster/dist/MarkerCluster.css');
require('leaflet.markercluster/dist/MarkerCluster.Default.css');


// remap record for fun (not usefull here)
@rescope(
    {
        MapControlLocal : require('./stores/MapControl'),
        MapControlRemote: require('./stores/MapControl')
    }
)
@scopeToProps([ "MapControlLocal", "MapControlRemote" ])
export default class MapBox extends Component {
    
    static defaultProps = {
        options: {
            zoomControl: false
        }
    }
    
    constructor( props ) {
        super(...arguments);
        this.state = {
            mode: 'local'
        }
    }
    
    render() {
        var {
                mode,
                MapControlLocal,
                MapControlRemote
            }      = this.state,
            mapCfg = mode == 'local' ? MapControlLocal : MapControlRemote;
        
        return (
            <Map
                { ...mapCfg.cfg }
                ref="map"
                key="map"
                attributionControl={ false }
                style={ { height: '100%', width: '100%', ...this.props.style } }>
                <TileLayer
                    { ...mapCfg.tileCfg }
                />
                
                <LayerGroup ref="PopupsLayer">
                    {
                        mapCfg.selectedPOI
                        && <Popup
                            position={ mapCfg.selectedPOI }
                            key={ mapCfg.selectedPOI._id }
                            style={ { marginBottom: '50px' } }
                            offset={ Leaflet.point(0, -25) }
                        >
                            <Popin
                                datas={ mapCfg.selectedPOI }
                                onClose={ () => {
                                    this.state.selectedMarkerIcon &&
                                    this.state.selectedMarkerIcon.classList.remove("active");
                                    this.setState({
                                                      selectedPOI       : null,
                                                      selectedMarkerIcon: null
                                                  });
                                    
                                } }
                            />
                        </Popup>
                        || ''
                    }
                </LayerGroup>
            </Map> || <div>(can't init the map...)</div>
        );
    }
    
}
;