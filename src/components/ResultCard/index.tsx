import './styles.css';

type Props = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string
};

const ResultCard = ({ avatar_url, html_url, followers, location, name }: Props) => {
  return (
    <div className="result-card">
      <div className="row">
        <div className="col-lg-4 col-xl-3">
          <div className="image-container">
            <img src={avatar_url} alt={name} />
          </div>
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="info-container">
            <h3>Informações</h3>
            <p><span className="name">Perfil: </span>{html_url}</p>
            <p><span className="name">Seguidores: </span>{followers}</p>
            <p><span className="name">Localidade: </span>{location}</p>
            <p><span className="name">Nome: </span>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
