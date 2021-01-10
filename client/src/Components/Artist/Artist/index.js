import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import ArtistsButtons from '../../Admin/ManageSite/ArtistsButtons'
function Artist({ Artist }) {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user?.id);
  const admin = useSelector((state) => state.user?.admin);

  return (
    <div className="artist-area">
      <div className="artist-area__item">{Artist.name}</div>
      {/* { admin? 
      <ArtistsButtons id={Artist._id}/> : null
      } */}
    </div>
  );
}
export default Artist;
