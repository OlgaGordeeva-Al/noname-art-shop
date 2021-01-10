import { Link } from 'react-router-dom';
import * as TYPES from '../../../../redux/actions/artists'
import { useDispatch} from 'react-redux';

function ArtistsButtons({id}){
  const dispatch = useDispatch()
  
  function handlerDelete(){
    dispatch(TYPES.delete_artist_thunk(id))
  }

return (
  <div>
<Link to={`/updateArtist/${id}`}><button>Изменить</button></Link>
<button onClick={handlerDelete}>Удалить</button>
</div>
)
}
export default ArtistsButtons
