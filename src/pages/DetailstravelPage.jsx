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
  const [searchText, setSearchText] = useState("");

  const handleClick = (turistaId) => {
    setSelectedTuristaId(selectedTuristaId === turistaId ? null : turistaId);
  };

  const filteredTuristi = viaggio.listaTuristi.filter((turista) =>
    `${turista.nome} ${turista.cognome}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='my-5'>
      <div>
        <SearchBar setSearchText={setSearchText} />
      </div>
      <div className='my-4'>
        <Link to='/travels' className='btn btn-primary'>Torna alla lista dei viaggi</Link>
      </div>
      <h1>{viaggio.nome}</h1>
      <h4>Lista dei partecipanti</h4>
      <h6>{viaggio.dataInizio} - {viaggio.dataFine}</h6>
      <div className="container row row-cols-md-3 row-cols-sx-1">
        {filteredTuristi.map((turista) => (
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