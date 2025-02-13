import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage('');
      navigate('/travels');
    } else if (!email && password) {
      setMessage('Inserisci email');
    } else if (email && !password) {
      setMessage('Inserisci password');
    } else {
      setMessage('Inserisci email e password');
    }
  };

  return (
    <>
      <section className='d-flex justify-content-center align-items-center text-center vh-100 max-vh-100'>
        <div>
          <h4 className="mb-4">Effettua il login</h4>
          <p className="bg-danger text-white">{message}</p>
          <form action="#" onSubmit={handleLogin}>
            <div className="form-group mb-2">
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="inserisci email"
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="inserisci password"
                  className="form-control"
                />
              </label>
            </div>
            <button className='btn btn-primary mt-4'>Vai alla lista viaggi</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;