//import './index.scss';
import { useDispatch } from 'react-redux';
import * as TYPES from '../../../redux/actions/products';

function AddArt(){


  const dispatch = useDispatch()

  function handlerSubmit(event){
    event.preventDefault()
    const value = event.target.value
    dispatch(TYPES.new_art_thunk(value))
    
  }
  
  

  return(
    <div>
    <form className="addForm" name="addArtForm" onSubmit={handlerSubmit}>
      
      <label for="artname" className="labelForm">Название работы</label>
      <input type="text" placeholder="введите название" id="artname" name="artname"/>

      <label for="artcategory" className="labelForm">Категория товара</label>
      <select id ="artcategory" required>
        <option disabled>Выберите категорию</option>
        <option value="Графика">Графика</option>
        <option value="Живопись">Живопись</option>
        <option value="Инсталляция">Инсталляция</option>
        <option value="Коллаж">Коллаж</option>
        <option value="Скульптура">Скульптура</option>
        <option value="Текстиль">Текстиль</option>
        <option value="Тиражные работы">Тиражные работы</option>
        <option value="Фотография">Фотография</option>
      </select>

      
      <label for="artistname" className="labelForm" required>Имя художника</label>
      {/* сделать подсказки при наборе */}
      <input type="text" placeholder="начните вводить имя" name="artistname"/>
      
      <label for="material" className="labelForm" >Использованы материалы: </label>
      <input type="text" placeholder="Например, холст, масло" id="material" name="materials" required/>
      
      <label for="color" className="labelForm" >Укажите преобладающий цвет</label>
      <select id ="color" required>
        <option disabled>Выберите цвет</option>
        <option value="Красный">Красный</option>
        <option value="Оранжевый">Оранжевый</option>
        <option value="Желтый">Желтый</option>
        <option value="Зеленый">Зеленый</option>
        <option value="Голубой">Голубой</option>
        <option value="Синий">Синий</option>
        <option value="Фиолетовый">Фиолетовый</option>
        <option value="Черно-белый">Черно-белый</option>
      </select>

      <label for="sizeart" className="labelForm" >Укажите размер</label>
      <input type="text" placeholder="например, 100 × 100 cm" id="sizeart" name="sizeart" required/>

      <label for="sizecat" className="labelForm" >Выберите категорию размеров</label>
      <select id ="sizecat" required>
        <option disabled>Выберите категорию размеров</option>
        <option value="1">Маленький (до 40 см)</option>
        <option value="2">Средний (40 - 100 см)</option>
        <option value="3">Большой (больше 100 см)</option>
      </select>

      <label for="yaerart" className="labelForm" >Год создания</label>
      <input type="text" placeholder="ХХХХ" id="yaerart" name="yaerart" required/>
      
      <label for="amountArts" className="labelForm">Укажите количество работ</label>
      <input type="number" id ="amountArts" name="amount" value="1"/>

      <label for="price" className="labelForm">Укажите цену</label>
      <input type="number" placeholder="цена" name="price" />

      <label for="artpicture" className="labelForm" required>Выберите файлы для загрузки</label>
      <input type="file" id="artpicture" name="picture" multiple required/>

      <button type="submit" className="submitButton" name="submit">Сохранить</button>
    </form>
    </div>
  )
}

export default AddArt;
