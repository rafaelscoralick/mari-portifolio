import Carousel from '../../Containers/Carrousel';
import './style.scss';
type DeliveryCarrouselProps = {
  qtd?: number;
  items: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};
export default function DeliveryCarrousel({
  qtd = 1,
  items,
}: DeliveryCarrouselProps) {
  return (
    <div className="deliverycarrousel">
      <Carousel items={qtd} autoplay={false} dots={true} spaceBetween={16}>
        {items.map((item, index) => (
          <div className="carrousel-item" key={index}>
            <div className="image-mockup">
              <img src={item.image} alt="imagem-mockup" />
              <div className="title">{item.title}</div>
            </div>
            <div className="description">{item.description}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
