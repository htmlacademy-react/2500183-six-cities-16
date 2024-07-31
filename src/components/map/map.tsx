import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import { Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardT } from '../../types/offer/offer';


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

type MapProps = {
  placesMock: PlaceCardT[];
  className:string;
  activeOfferId?: string | null;
}

const locationExample = {
  location: {
    latitude: 52.379189,
    longitude: 4.899431,
    zoom: 12,
  },
};

function Map ({className = 'offer__map', placesMock, activeOfferId} : MapProps) : JSX.Element {

  const mapContainerRef = useRef<HTMLElement>(null);
  const map = useMap({location:locationExample.location, containerRef: mapContainerRef});

  useEffect(() : void => {
    if (map) {
      placesMock.forEach((place) : void => {
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: place.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activeOfferId, map, placesMock]);


  return (
    <section className={`${className} map`} style={{height: '500px'}} ref={mapContainerRef}></section>
  );
}

export default Map;
