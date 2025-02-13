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
import ProjectHBParceiros from './Pages/ProjectHBParceiros';
import ProjectShopee from './Pages/ProjectShopee';
import Footer from './components/Footer';

function App() {
  // const [data] = useAllPrismicDocumentsByType('project');

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const projects = [
    {
      name: 'you-nail',
      link: '#younail',
      page: 'younail',
    },
    {
      name: 'hb parceiros',
      link: '#hb',
      page: 'hbparceiros',
    },
    {
      name: 'shopee',
      link: '#shopee',
      page: 'shopee',
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
          <Route path="/projetos/younail" element={<ProjectYouNail />} />
          <Route path="/projetos/shopee" element={<ProjectShopee />} />
          <Route
            path="/projetos/hbparceiros"
            element={<ProjectHBParceiros />}
          />
        </Routes>
        <NavBar />
        <Footer />
      </main>
    </>
  );
}

export default App;
