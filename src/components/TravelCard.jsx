import { Link } from "react-router-dom";

const TravelCard = ({ viaggio }) => {

  const { dataInizio, dataFine, id, nome, immagine } = viaggio

  // Funzione per calcolare i giorni di viaggio
  const calcolaGiorni = (dataInizio, dataFine) => {
    if (!dataInizio || !dataFine) return 'Data non valida';
    const inizio = new Date(dataInizio.split("/").reverse().join("-"));
    const fine = new Date(dataFine.split("/").reverse().join("-"));
    const differenzaInMs = fine - inizio;
    const giorni = differenzaInMs / (1000 * 60 * 60 * 24);
    return giorni + 1; // Aggiunge 1 per includere sia il giorno di inizio che quello di fine
  };

  // Funzione per estrarre l'anno dalla data
  const estraiAnno = (data) => {
    return data.split("/")[2];
  };

  // Funzione per riformattare la data in formato dd/mm
  const formattaData = (data) => {
    const [giorno, mese] = data.split("/");
    return `${giorno}/${mese}`;
  };

  return (
    <Link to={`/travels/details/${id}`} className="text-decoration-none text-dark">
      <div className="card custom-card my-3 d-flex flex-row">
        <div className="card-body col-8 align-content-center">
          <h2 className="card-title">{nome}</h2>
          <h5 className="card-subtitle mb-2 text-muted">{estraiAnno(dataInizio)}</h5>
          <p className="card-text">
            {formattaData(dataInizio)} - {formattaData(dataFine)} | {calcolaGiorni(dataInizio, dataFine)} giorni
          </p>
        </div>

        <div className="image-section col-4 p-0">
          <img src={immagine} alt={nome} className="img-fluid h-100 w-100" />
        </div>
      </div>
    </Link>
  );
};

export default TravelCard;

