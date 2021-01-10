import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function OrderOperation(){
  return(
    <div>
      <div>Новые заказы</div>
      <div>Заказы в процессе</div>
      <div>Выполненные заказы</div>
    </div>
  )
}

export default OrderOperation;
