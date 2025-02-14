const ClientCard = ({ turista, isVisible, onClick }) => {
  const { nome, cognome, email, codiceFiscale, numeroCellulare } = turista;

  return (
    <div>
      <div className="card custom-card my-3">
        <div className="card-body">
          <h2 className="card-title text-center" onClick={onClick}>
            {nome} {cognome}
          </h2>

          <p className={isVisible ? "visible" : ""}>Email: {email}</p>
          <p className={isVisible ? "visible" : ""}>
            Codice Fiscale: {codiceFiscale}
          </p>
          <p className={isVisible ? "visible" : ""}>
            Numero Cellulare: {numeroCellulare}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;