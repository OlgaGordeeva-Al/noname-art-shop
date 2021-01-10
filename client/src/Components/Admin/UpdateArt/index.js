
import * as TYPES from '../../../redux/actions/products';
import { useDispatch } from 'react-redux';

function UpdateArt() {
  const dispatch = useDispatch()

  function handlerSubmit(event){
    event.preventDefault()
    const value = event.target.value
    dispatch(TYPES.update_art_thunk(value))
    
  }
  const art = {}
  return(
    <div>
      <form className="addForm" onSubmit={handlerSubmit}>
        <label for="uname" className="labelForm">
          Название работы
        </label>
        <input type="text" value={art.name} id="uname" name="uname" />

        <label for="ucategory" className="labelForm">
          Категория товара
        </label>
        <select id="artcategory" required>
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

        <label for="artistname" className="labelForm" required>
          Имя художника
        </label>
        {/* сделать подсказки при наборе */}
        <input type="text" value={art.authorName} name="artistname" />

        <label for="umaterial" className="labelForm">
          Использованы материалы:{' '}
        </label>
        <input
          type="text"
          value={art.materials}
          id="umaterial"
          name="umaterial"
          required
        />

        <label for="ucolor" className="labelForm">
          Укажите преобладающий цвет
        </label>
        <select id="ucolor" required>
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

        <label for="usizeart" className="labelForm">
          Укажите размер
        </label>
        <input type="text" value={art.size} id="usizeart" name="usizeart" required />

        <label for="usizecat" className="labelForm">
          Выберите категорию размеров
        </label>
        <select id="usizecat" required>
          <option disabled>Выберите категорию размеров</option>
          <option value="1">Маленький (до 40 см)</option>
          <option value="2">Средний (40 - 100 см)</option>
          <option value="3">Большой (больше 100 см)</option>
        </select>

        <label for="uyaerart" className="labelForm">
          Год создания
        </label>
        <input type="text" value={art.year} id="uyaerart" name="uyaerart" required />

        <label for="uamountArts" className="labelForm">
          Укажите количество работ
        </label>
        <input type="number" id="uamountArts" name="uamount" value={art.amount} />

        <label for="uprice" className="labelForm">
          Укажите цену
        </label>
        <input type="unumber" value={art.price} name="price" />

        <label for="artpicture" className="labelForm" required>
          Выберите файлы для загрузки
        </label>
        <input type="file" id="artpicture" name="picture" multiple required />

        <button type="submit" className="submitButton" name="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default UpdateArt;
