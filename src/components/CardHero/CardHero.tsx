import './style.scss';
interface CardHeroProps {
  image: string;
}

export default function CardHero({ image }: CardHeroProps) {
  return (
    <div className="cardhero">
      <img src={image} alt="cardhero" />
    </div>
  );
}
