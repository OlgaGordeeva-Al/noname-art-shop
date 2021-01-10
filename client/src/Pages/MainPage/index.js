import './index.scss';
import MainContent from './MainContent';
import { useEffect, useState } from 'react';

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 100;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <main className={`${scroll ? 'main' : 'main-reverse'}`}>
      <MainContent />
    </main>
  );
};

export default MainPage;
