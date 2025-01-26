import AboutMe from '../../components/AboutMe';
import MeuCurriculo from '../../components/MeuCurriculo';
import './style.scss';
export default function Sobre() {
  return (
    <div className="sobre">
      <AboutMe />
      <MeuCurriculo />
    </div>
  );
}
