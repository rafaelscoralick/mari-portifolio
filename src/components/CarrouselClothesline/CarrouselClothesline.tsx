import { Swiper, SwiperSlide } from 'swiper/react';
import CardHero from '../CardHero';
import './style.scss';
import { Autoplay } from 'swiper/modules';

interface CarouselProps {
  items: string[];
}

export default function CarrouselClothesline({ items }: CarouselProps) {
  return (
    <div className="carrouselclothesline">
      <Swiper
        spaceBetween={0} // Configuração correta para a versão 9+
        slidesPerView={1} // Exibe 3 slides visíveis
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CardHero image={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
