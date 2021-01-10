import HeaderMain from './HeaderMain';
import HeaderTypes from './HeaderTypes';
import './index.scss';
import { Switch } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav">
      <HeaderMain />
      <Switch>
        <HeaderTypes />
      </Switch>
    </nav>
  );
};

export default Header;
