//import './index.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function updateArtist(){
  const artist= {}
  return(
    <div>
    <form className="addForm">
      <label for="artistname" id="artistname" className="labelForm" required>Имя художника</label>
      <input type="text" value={artist.name} name="name"/>
      <label for="artistdescr" className="labelForm">О художнике</label>
      <textarea type="text" value={artist.description} id="artistdescr" name="description"/>
      <button type="submit" className="submitButton" name="submit">Сохранить</button>
    </form>
    </div>
  )
}

export default updateArtist;
