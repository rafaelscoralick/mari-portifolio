import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Children } from 'react';
import SetaCarrousel from '../../components/SeteCarrousel/SetaCarrousel';

interface CarouselProps {
  items?: number;
  autoplay?: boolean;
  delay?: number;
  dots?: boolean;
  spaceBetween?: number;
  reverse?: boolean;
  speed?: number;
  navegation?: boolean;
  children: React.ReactNode;
}

export default function Carousel({
  children,
  items = 1,
  autoplay = true,
  delay = 2500,
  spaceBetween = 0,
  dots = false,
  speed = 500,
  reverse = false,
  navegation = false,
}: CarouselProps) {
  function handlerConfig({
    autoplay,
    dots,
    navegation,
  }: {
    autoplay: boolean;
    dots: boolean;
    navegation: boolean;
  }) {
    const config = [
      autoplay ? Autoplay : null,
      dots ? Pagination : null,
      navegation ? Navigation : null,
    ];
    return config.filter((item) => item !== null);
  }

  const randId = Math.floor(Math.random() * 100);

  return (
    <div className="carousel">
      {navegation ? (
        <SetaCarrousel className={`setacarrousel-next-${randId}`} />
      ) : null}

      {navegation ? (
        <SetaCarrousel className={`setacarrousel-prev-${randId} reverse`} />
      ) : null}

      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={items}
        // navigation={false}
        pagination={{
          enabled: dots,
          clickable: true,
        }}
        freeMode={true}
        loop={true}
        speed={speed}
        navigation={{
          nextEl: `.setacarrousel-next-${randId}`,
          prevEl: `.setacarrousel-prev-${randId}`,
        }}
        modules={handlerConfig({ autoplay, dots, navegation })}
        autoplay={
          autoplay
            ? {
                delay: delay,
                pauseOnMouseEnter: true,
                reverseDirection: reverse,
              }
            : false
        }
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
