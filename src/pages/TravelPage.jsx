import { useGlobalContext } from "../context/GlobalContext";
import TravelCard from "../components/TravelCard";

// Funzione per convertire una data nel formato dd/MM/yyyy
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(`${year}-${month}-${day}`);
};

const TravelPage = () => {
  const { viaggi } = useGlobalContext();
  const currentDate = new Date();

  // funzione viaggio in corso
  const isOngoing = (startDate, endDate) => {
    const start = parseDate(startDate);
    const end = parseDate(endDate);
    return currentDate >= start && currentDate <= end;
  };

  // funzione viaggio passato
  const isUpcoming = (startDate) => {
    const start = parseDate(startDate);
    return currentDate <= start;
  };

  const ongoingTrip = viaggi.find(viaggio => isOngoing(viaggio.dataInizio, viaggio.dataFine));

  const scheduledTrips = viaggi.filter(viaggio => isUpcoming(viaggio.dataInizio) && !isOngoing(viaggio.dataInizio, viaggio.dataFine));

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista viaggi</h1>
      {ongoingTrip && (
        <div className="my-3">
          <h3>Viaggio in corso</h3>
          <TravelCard key={ongoingTrip.id} viaggio={ongoingTrip} />
        </div>
      )}
      <div className="my-3">
        <h3>Viaggi programmati</h3>
        {scheduledTrips.map(viaggio => (
          <TravelCard key={viaggio.id} viaggio={viaggio} />
        ))}
      </div>
    </div>
  );
};

export default TravelPage;