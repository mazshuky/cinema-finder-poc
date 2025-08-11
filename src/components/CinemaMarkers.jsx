import { useMemo } from "react";
import { useParams } from "react-router-dom";
import allCinemas from "../data/cinemas";
import { totalBounds } from "../data/bounds";
import { useMapContext } from './Map/context';

const CinemaMarkers = () => {
  const { Marker } = useMapContext();
  const params = useParams();

  const cinemas = useMemo(() => {
      let filteredCinemas = allCinemas;

      if (params.franchiseId || params.countryCode) {
      const { franchiseId, countryCode } = params;
      return allCinemas.filter(cinema => {
        return (
          franchiseId === 'all-cinemas' ||
          cinema.franchise === franchiseId
        ) && cinema.countryCode === countryCode;
      });
    }

      const [west, south, east, north] = totalBounds;
      return filteredCinemas.filter(cinema => {
          const lat = parseFloat(cinema.lat);
          const lng = parseFloat(cinema.lng);
          return lng >= west && lng <= east && lat >= south && lat <= north;
      });
  }, [params]);

  return cinemas.map((cinema, idx) => {
    return (
      <Marker
        lat={parseFloat(cinema.lat)}
        lon={parseFloat(cinema.lng)}
        key={`${cinema.lat}-${cinema.lng}-${idx}`}/>
    );
  });
};

export default CinemaMarkers;