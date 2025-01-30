import AboutMe from '../../components/AboutMe';
import Carousel from '../../Containers/Carrousel';
import CarrouselClothesline from '../../components/CarrouselClothesline';
import Headline from '../../components/Headline';
import Icon from '../../components/Icon';
import MeuCurriculo from '../../components/MeuCurriculo';
import ProjectsList from '../../components/ProjectsList';
import './style.scss';
import LinksPraContato from '../../components/LinksPraContato';
export default function Home() {
  const icons = [
    {
      icon: '/svg/figma.svg',
      hover: () => {
        return 'figma';
      },
    },
    {
      icon: '/svg/maze.svg',
      hover: () => {
        return 'maze';
      },
    },
    {
      icon: '/svg/xd.svg',
      hover: () => {
        return 'xd';
      },
    },
    {
      icon: '/svg/jira.svg',
      hover: () => {
        return 'jira';
      },
    },
    {
      icon: '/svg/miro.svg',
      hover: () => {
        return 'miro';
      },
    },
    {
      icon: '/svg/notion.svg',
      hover: () => {
        return 'notion';
      },
    },
    {
      icon: '/svg/trello.svg',
      hover: () => {
        return 'trello';
      },
    },
    {
      icon: '/svg/gpt.svg',
      hover: () => {
        return 'chat gpt';
      },
    },
    {
      icon: '/svg/photoshop.svg',
      hover: () => {
        return 'photoshop';
      },
    },
    {
      icon: '/svg/illustrator.svg',
      hover: () => {
        return 'illustrator';
      },
    },
  ];

  function getSize() {
    const width = window.innerWidth;
    if (width > 1200) {
      return 9;
    } else if (width > 768) {
      return 6;
    } else {
      return 3;
    }
  }

  console.log(getSize());

  return (
    <div className="home">
      <div className="row">
        <CarrouselClothesline
          items={[
            '/card1.png',
            '/card2.png',
            '/card3.png',
            '/card4.png',
            '/card5.png',
          ]}
        />
        <Headline />
      </div>
      <div className="row">
        <Carousel
          items={getSize()}
          autoplay={true}
          speed={3000}
          delay={0}
          reverse={true}
        >
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} />
          ))}
        </Carousel>
      </div>

      <div id="projetos">
        <ProjectsList />
      </div>
      <div id="sobre" className="row aboutme-row">
        <AboutMe />
        <MeuCurriculo />
      </div>
      <div id="contato" className="desktop-only">
        <LinksPraContato />
      </div>
    </div>
  );
}
