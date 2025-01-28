import { Routes, Route } from 'react-router-dom';

// import { useAllPrismicDocumentsByType } from '@prismicio/react';
import './App.scss';
import Header from './components/Header';

// @ts-expect-error: Should expect error
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Projetos from './Pages/Projetos';
import ProjectYouNail from './Pages/ProjectYouNail';
import Footer from './components/Footer';

function App() {
  // const [data] = useAllPrismicDocumentsByType('project');

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const projects = [
    {
      name: 'you-nail',
      link: '/#younail',
    },
    {
      name: 'honey parceiros',
      link: '/#honey',
    },
    {
      name: 'shopee',
      link: '/#shopee',
    },
  ];

  return (
    <>
      <main className="main">
        <Header projects={projects} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/you-nail" element={<ProjectYouNail />} />
        </Routes>
        <NavBar />
        <Footer />
      </main>
    </>
  );
}

export default App;
