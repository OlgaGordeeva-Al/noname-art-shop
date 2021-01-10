//import './index.scss';
import { Link } from 'react-router-dom';



function SiteOperation(){
  return(
    <div>
      <Link to="/addArt"><button>Добавить новый арт</button></Link>
      <Link to="/addArtist"><button>Добавить нового художника</button></Link>
    </div>
  )
}

export default SiteOperation;
