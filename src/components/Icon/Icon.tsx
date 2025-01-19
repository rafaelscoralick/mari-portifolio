import { useState } from 'react';
import './style.scss';

type IconProps = {
  icon: string;
  legend?: string;
  hover?: () => string;
};

export default function Icon({ icon, hover, legend }: IconProps) {
  const [texto, setTexto] = useState('');

  const handleMouseOver = () => {
    if (hover) {
      const text = hover();
      setTexto(text);
    }
  };

  const handleMouseLeave = () => {
    setTexto(''); // Limpa o texto ao sair do componente
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`icon ${texto ? 'show' : ''}`}
    >
      <div>{texto ? <p>{texto}</p> : <img src={icon} alt="Icon" />}</div>
      {legend && <span>{legend}</span>}
    </div>
  );
}
