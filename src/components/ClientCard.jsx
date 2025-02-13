const ClientCard = ({ turista, isVisible, onClick }) => {
  const { nome, cognome, email, codiceFiscale, numeroCellulare } = turista;

  return (
    <div>
      <div className="card custom-card my-3">
        <div className="card-body">
          <h2 className="card-title" onClick={onClick} style={{ cursor: 'pointer' }}>
            {nome} {cognome}
          </h2>

          {isVisible && (
            <>
              <p>Email: {email}</p>
              <p>Codice Fiscale: {codiceFiscale}</p>
              <p>Numero Cellulare: {numeroCellulare}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;


