import './style.scss';
export default function SetaCarrousel({ className }: { className: string }) {
  return (
    <div className={`setacarrousel ${className}`}>
      <img src="/svg/seta.svg" alt="sete" />
    </div>
  );
}
