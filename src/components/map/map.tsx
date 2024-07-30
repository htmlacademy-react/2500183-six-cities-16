import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const cityExample = {
  title: 'Нью-Йорк',
  lat: 40.835292,
  lng: -73.916236,
  zoom: 10
};

const points = [
  {
    title: 'Саундвью',
    lat: 40.816881,
    lng: -73.872768
  },
  {
    title: 'Ферри Поинт',
    lat: 40.814909,
    lng: -73.830682
  },
  {
    title: 'Бронкс',
    lat: 40.862413,
    lng: -73.879357
  },
  {
    title: 'Инвуд-Хилл',
    lat: 40.870817,
    lng: -73.927112
  },
  {
    title: 'Пелхэм-Бей-Парк',
    lat: 40.877312,
    lng: -73.807182
  }
];

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map ({className = 'offer__map' } : {className : string}) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef,cityExample);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className={`${className} map`} style={{height: '500px'}} ref={mapRef}></section>
  );
}

export default Map;
