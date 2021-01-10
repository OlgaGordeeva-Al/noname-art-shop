import { useSelector } from 'react-redux';
import './index.scss';

const Footer = () => {
  const english = useSelector(state => state.english)
  return (
    <footer className="footer">
      <span className="footer__copyright">Alibabart 2020. {english ? "All rights reserved" : "Все права защищены."}</span>
    </footer>
  );
};

export default Footer;
