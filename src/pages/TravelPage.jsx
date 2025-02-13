import { useGlobalContext } from "../context/GlobalContext";
import TravelCard from "../components/TravelCard";

const TravelPage = () => {
  const { viaggi } = useGlobalContext();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista viaggi</h1>
      {viaggi.map((viaggio) => (
        <TravelCard key={viaggio.id} viaggio={viaggio} />
      ))}
    </div>
  );
};

export default TravelPage;
