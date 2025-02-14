import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ClientCard from '../components/ClientCard';
import { useGlobalContext } from "../context/GlobalContext";
import SearchBar from '../components/SearchBar';

const DetailstravelPage = () => {
  const { id } = useParams();
  const { viaggi } = useGlobalContext();

  const viaggio = viaggi.find(viaggio => viaggio.id === parseInt(id));
  const [selectedTuristaId, setSelectedTuristaId] = useState(null);

  const handleClick = (turistaId) => {
    setSelectedTuristaId(selectedTuristaId === turistaId ? null : turistaId);
  };

  return (
    <div className='my-5'>
      <div className='d-flex justify-content-center'>
        <SearchBar />
      </div>
      <div className='my-4'>
        <Link to='/travels' className='btn btn-primary'>Torna alla lista dei viaggi</Link>
      </div>
      <h1>{viaggio.nome}</h1>
      <h4>Lista dei partecipanti</h4>
      <h6>{viaggio.dataInizio} - {viaggio.dataFine}</h6>
      <div className="container row row-cols-md-3 row-cols-sx-1">
        {viaggio.listaTuristi.map((turista) => (
          <ClientCard
            key={turista.id}
            turista={turista}
            isVisible={selectedTuristaId === turista.id}
            onClick={() => handleClick(turista.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailstravelPage;
