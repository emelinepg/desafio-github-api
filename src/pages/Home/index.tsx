import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <h4>DevSuperior - Escola de programação</h4>
      <Link to="/githubsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
