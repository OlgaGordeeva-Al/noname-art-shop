import Artist from '../../Components/Artist/Artist';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PictureItem from '../../Components/Pictures/PictureItem';
import { useEffect } from 'react';
import './index.scss';

const OneArtistList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const artists = useSelector((state) => state.artists);
  const oneArtist = artists.filter((el) => el._id === id);

  return (
    <div className="artist-page">
      <Artist Artist={oneArtist[0]} />
      <ul className="oneArtistItems">
        {products
          .filter((el) => el.authorName === oneArtist[0].name)
          .map((el) => (
            <PictureItem
              id={el._id}
              img={el.picture}
              author={el.authorName}
              name={el.name}
              price={el.price}
              key={el._id}
            />
          ))}
      </ul>
    </div>
  );
};

export default OneArtistList;
