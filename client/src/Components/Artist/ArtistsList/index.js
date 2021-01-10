import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistsThunk } from '../../../redux/actions/artists';
import './index.scss';

function ArtistList() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArtistsThunk());
  }, [dispatch]);

  const artists = useSelector((state) => state.artists);
  return artists
    .sort((a, b) => a.name - b.name)
    .map((Artist) => {
      return (
        <li key={Artist._id}>
          <Link className="artists-list__item" to={`/artist/${Artist._id}`}>
            <div>{Artist.name}</div>
          </Link>
        </li>
      );
    });
}
export default ArtistList;
