'use strict';
import * as settings from './settings.json';
import * as Mapsapi from 'google-maps-api';

const mapsapi = Mapsapi('AIzaSyDWXqPA7d3akOwXcywwVVtgqSg53mULHVs');
export function initMap() {
    mapsapi().then((maps) => {
        const pos = {lat: 51.02617866842818, lng: 15.264741440991605};
        const styledMapType = new maps.StyledMapType(settings);
        const map = new maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 11,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map']
                }
            });
            const marker = new maps.Marker({
                position: pos,
                map: map
            });

            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');

    });
}

