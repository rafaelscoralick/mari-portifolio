import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';
import { Autoplay } from 'swiper/modules';
import { Children } from 'react';

interface CarouselProps {
  items?: number;
  autoplay?: boolean;
  children: React.ReactNode;
}

export default function Carousel({
  children,
  items = 1,
  autoplay = true,
}: CarouselProps) {
  return (
    <div className="carousel">
      <Swiper
        spaceBetween={0}
        slidesPerView={items}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        modules={autoplay ? [Autoplay] : []}
        autoplay={
          autoplay
            ? {
                delay: 2500,
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
