import './index.scss';
import ItemsContent from './ItemsContent';
import { useEffect } from 'react';

const MainArea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-items">
      <ItemsContent />
    </main>
  );
};

export default MainArea;
