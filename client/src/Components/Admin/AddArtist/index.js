//import './index.scss';
import  {useState} from 'react'
import { useDispatch } from 'react-redux';
import * as TYPES from '../../../redux/actions/artists'


function AddArtist(){

  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [description, setDescription]= useState('');
  function nameHandler(event) {
    setName(event.target.value)
  };
  function descriptionHandler(event) {
    setDescription(event.target.value)
  };
  function handlerSubmit(event){
    event.preventDefault()
    dispatch(TYPES.new_artist_thunk({name, description}))
    clearInput()
  }
  function clearInput() {
    setName('')
    setDescription('')
  }

  return(
    <div>
    <form className="addForm">
      <label for="artistname" id="artistname" className="labelForm" required>Имя художника</label>
      <input type="text" onChange={nameHandler} placeholder="введите имя" value={name} name="name"/>
      <label for="artistdescr" className="labelForm">О художнике</label>
      <textarea type="text" placeholder="Напишите сюда короткую информацию" id="artistdescr" value={description} onChange={descriptionHandler} name="description"/>
      <button type="submit" className="submitButton" onSubmit={handlerSubmit} name="submit">Сохранить</button>
    </form>
    </div>
  )
}

export default AddArtist;
