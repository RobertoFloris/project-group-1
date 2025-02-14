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
    <div className='mt-5'>
      <div>
        <SearchBar setSearchText={setSearchText} />
      </div>
      <h1 className='my-3'>{viaggio.nome}</h1>
      <h4 className='my-3'>Lista dei partecipanti</h4>
      <h6 className='my-3'>{viaggio.dataInizio} - {viaggio.dataFine}</h6>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
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

      <div className='return-btn'>
        <Link to="/travels"><i className="bi bi-chevron-left "></i></Link>
      </div>
    </div>
  );
};

export default DetailstravelPage;