import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { Children } from 'react';

interface CarouselProps {
  items?: number;
  autoplay?: boolean;
  delay?: number;
  dots?: boolean;
  spaceBetween?: number;
  reverse?: boolean;
  speed?: number;
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
}: CarouselProps) {
  function handlerConfig({
    autoplay,
    dots,
  }: {
    autoplay: boolean;
    dots: boolean;
  }) {
    const config = [autoplay ? Autoplay : null, dots ? Pagination : null];
    return config.filter((item) => item !== null);
  }

  return (
    <div className="carousel">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={items}
        navigation={false}
        pagination={{
          enabled: dots,
          clickable: true,
        }}
        freeMode={true}
        loop={true}
        speed={speed}
        modules={handlerConfig({ autoplay, dots })}
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
