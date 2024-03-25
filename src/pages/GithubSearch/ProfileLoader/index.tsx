import ContentLoader from 'react-content-loader';
import './styles.css';

const ProfileLoader = () => (
  <div className="loader-container">
    <ContentLoader
      width={300}
      height={150}
      viewBox="0 0 300 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#acabab"
    >
      <rect x="4" y="3" rx="3" ry="3" width="3" height="124" />
      <rect x="5" y="124" rx="3" ry="3" width="286" height="3" />
      <rect x="290" y="4" rx="3" ry="3" width="3" height="123" />
      <rect x="26" y="15" rx="16" ry="16" width="117" height="93" />
      <rect x="179" y="48" rx="3" ry="3" width="44" height="3" />
      <rect x="176" y="38" rx="3" ry="3" width="76" height="3" />
      <rect x="176" y="59" rx="3" ry="3" width="76" height="3" />
      <rect x="181" y="70" rx="3" ry="3" width="44" height="3" />
      <rect x="176" y="80" rx="3" ry="3" width="76" height="3" />
      <rect x="4" y="3" rx="3" ry="3" width="286" height="3" />
      <rect x="177" y="95" rx="14" ry="14" width="30" height="14" />
      <rect x="219" y="95" rx="14" ry="14" width="30" height="14" />
      <rect x="164" y="17" rx="3" ry="3" width="99" height="12" />
    </ContentLoader>
  </div>
);

ProfileLoader.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Events',
  filename: 'EventsLoader',
};

export default ProfileLoader;
