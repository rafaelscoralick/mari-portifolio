import Carousel from '../../components/Carrousel';
import CarrouselClothesline from '../../components/CarrouselClothesline';
import Headline from '../../components/Headline';
import Icon from '../../components/Icon';
import ProjectsList from '../../components/ProjectsList';
import './style.scss';
export default function Home() {
  const icons = [
    {
      icon: '/icon-mobile.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-agendamento.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-manicure.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-mobile.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-agendamento.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-manicure.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-mobile.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-agendamento.png',
      hover: () => {
        return 'ver mais';
      },
    },
    {
      icon: '/icon-manicure.png',
      hover: () => {
        return 'ver mais';
      },
    },
  ];

  function getSize() {
    const width = window.innerWidth;
    if (width > 1200) {
      return 10;
    } else if (width > 768) {
      return 4;
    } else {
      return 3;
    }
  }

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
        <Carousel items={getSize()} autoplay={false}>
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} />
          ))}
        </Carousel>
      </div>

      <ProjectsList />
    </div>
  );
}
