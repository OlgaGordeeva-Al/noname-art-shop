import ArtistsList from '../../Components/Artist/ArtistsList';
import { useEffect } from 'react';

const Artists = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ul className="artists-list">
      <ArtistsList />
    </ul>
  );
};

export default Artists;
