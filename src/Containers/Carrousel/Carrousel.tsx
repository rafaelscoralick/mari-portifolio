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
  children: React.ReactNode;
}

export default function Carousel({
  children,
  items = 1,
  autoplay = true,
  delay = 2500,
  spaceBetween = 0,
  dots = false,
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
        loop={true}
        modules={handlerConfig({ autoplay, dots })}
        autoplay={
          autoplay
            ? {
                delay: delay,
                pauseOnMouseEnter: true,
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
