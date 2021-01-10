import Pictures from '../../../Components/Pictures';
import Banners from './Banners';
import { useSelector } from 'react-redux';
import './index.scss';

const MainContent = () => {
  const filterText = useSelector((state) => state.filterText);
  return (
    <>
      {filterText ? null : <Banners />}
      <Pictures />
    </>
  );
};

export default MainContent;
