import './index.scss';


function UpdateArt() {
  const updateArt = {};

  return (
    <div>
      <form className="addForm">
        <label for="artpicture" className="labelForm">
          Выберите файлы для загрузки
        </label>
        <input type="file" id="artpicture" name="picture" multiple required />

        <label for="artname" className="labelForm">
          Название произведения
        </label>
        <input type="text" value={updateArt.name} id="artname" name="artname" />

        <label for="artistname" className="labelForm">
          Имя художника
        </label>
        {/* сделать подсказки при наборе */}
        <input type="text" value={updateArt.authorName} name="name" required />

        <label for="material" className="labelForm">
          Использованы материалы:{' '}
        </label>
        <input type="text" value={updateArt.materials} id="material" name="materisl" />

        <label for="color" className="labelForm">
          Укажите преобладающий цвет
        </label>
        <select id="color">
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

        <label for="price" className="labelForm">
          Укажите цену
        </label>
        <textarea type="text" value={updateArt.materials} name="price" />

        <button type="submit" className="submitButton" name="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default UpdateArt;
