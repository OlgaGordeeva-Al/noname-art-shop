
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as TYPES from '../../../../redux/actions/products'

function AdminButtons({id}){
  const dispatch = useDispatch()
  
  function handlerDelete(){
    dispatch(TYPES.delete_art_thunk(id))
  }

return (
  <div>
<Link to={`/updateArt/${id}`}><button>Изменить</button></Link>
<button onClick={handlerDelete}>Удалить</button>
</div>
)
}
export default AdminButtons
