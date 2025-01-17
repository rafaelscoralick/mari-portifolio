import { useEffect } from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import './App.scss';
import Header from './components/Header';
import CarrouselClothesline from './components/CarrouselClothesline';

// @ts-expect-error: Should expect error
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectsList from './components/ProjectsList';

function App() {
  const [data] = useAllPrismicDocumentsByType('project');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <main className="container">
        <Header />
        <CarrouselClothesline
          items={[
            '/card1.png',
            '/card2.png',
            '/card3.png',
            '/card4.png',
            '/card5.png',
          ]}
        />
        <div className="above-the-fold-text">
          <h1>
            UX/UI designer apaixonada por construir experiências que façam a
            diferença na vida das pessoas e impulsionem negócios.
          </h1>
        </div>
        <ProjectsList />
      </main>
    </>
  );
}

export default App;
