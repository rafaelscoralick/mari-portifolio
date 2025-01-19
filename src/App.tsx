// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams,
// } from 'react-router-dom';

// import { useAllPrismicDocumentsByType } from '@prismicio/react';
import './App.scss';
import Header from './components/Header';

// @ts-expect-error: Should expect error
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from './Pages/Home';

function App() {
  // const [data] = useAllPrismicDocumentsByType('project');

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const projects = [
    {
      name: 'Projeto 1',
      link: '/projeto1',
    },
    {
      name: 'Projeto 2',
      link: '/projeto2',
    },
    {
      name: 'Projeto 3',
      link: '/projeto3',
    },
  ];

  return (
    <>
      <main className="container">
        <Header projects={projects} />
        <Home />
      </main>
    </>
  );
}

export default App;
