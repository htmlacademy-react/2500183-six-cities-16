import {useEffect, useState, useRef} from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import {Location} from '../types/offer/offer.ts';
import { TitleLauerUrl } from '../const.ts';

type UseMapProps = {
  location: Location;
  containerRef: React.RefObject<HTMLElement | null>;
}

function useMap({location, containerRef}: UseMapProps) : leaflet.Map | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom
      });

      leaflet
        .tileLayer(TitleLauerUrl.Pattern, {
          attribution: TitleLauerUrl.Attribution,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location]);

  return map;
}

export default useMap;
