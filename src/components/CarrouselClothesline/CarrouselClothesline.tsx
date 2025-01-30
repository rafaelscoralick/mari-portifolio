import CardHero from '../CardHero';
import './style.scss';
import Carousel from '../../Containers/Carrousel';

interface CarouselProps {
  items: string[];
}

export default function CarrouselClothesline({ items }: CarouselProps) {
  return (
    <div className="carrouselclothesline">
      <Carousel items={1} delay={4000}>
        {items.map((item, index) => (
          <CardHero key={index} image={item} />
        ))}
      </Carousel>
    </div>
  );
}
