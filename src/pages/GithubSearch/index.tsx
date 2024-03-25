import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';
import axios from 'axios';
import ProfileLoader from './ProfileLoader';

type FormData = {
  username: string;
};

type Profile = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const GithubSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const [profile, setProfile] = useState<Profile>();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setProfile(response.data);
        console.log(profile);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil GitHub</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="username"
              value={formData.username}
              className="search-input"
              placeholder="Usuário GitHub"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? <ProfileLoader /> : profile && (
        <ResultCard
          avatar_url={profile.avatar_url}
          html_url={profile.html_url}
          followers={profile.followers}
          location={profile.location}
          name={profile.name}
        />
      )}
    </div>
  );
};

export default GithubSearch;
