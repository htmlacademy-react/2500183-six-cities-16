import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import leaflet, {Icon, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PlaceCardT, City } from '../../types/offer/offer';
import { IconOptions } from '../../const';

const defaultCustomIcon = new Icon({
  iconUrl: IconOptions.DefaultIconUrl,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: IconOptions.ActiveIconUrl,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

type MapProps = {
  placesMock: PlaceCardT[];
  className:string;
  activePlaceId?: string | null;
  city: City;
}

function Map ({className = 'offer__map', placesMock, activePlaceId, city} : MapProps) : JSX.Element {

  const mapContainerRef = useRef<HTMLElement>(null);
  const map = useMap({location:city.location, containerRef: mapContainerRef});
  const layer = useRef(layerGroup());

  useEffect(() : void => {
    if (map) {

      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      layer.current.addTo(map);
      layer.current.clearLayers();

      placesMock.forEach((place) : void => {
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: place.id === activePlaceId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activePlaceId, map, placesMock, city]);


  return (
    <section className={`${className} map`} ref={mapContainerRef}></section>
  );
}

export default Map;
