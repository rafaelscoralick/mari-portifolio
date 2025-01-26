import { useLocation } from 'react-router-dom';
import './style.scss';
export default function NavBar() {
  const location = useLocation();

  function selectedImage(basePath: string, target: string) {
    let isSelected = false;

    if (location.pathname === target) {
      isSelected = true;
    } else {
      isSelected = false;
    }

    const selectedSuffix = '-selected';
    const iconPath = isSelected
      ? `/svg/${basePath}${selectedSuffix}.svg`
      : `/svg/${basePath}.svg`;

    return iconPath;
  }

  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <li>
            <a href="/">
              <img src={selectedImage('inicio', '/')} alt="logo" />
              <span>inicio</span>
            </a>
          </li>
          <li>
            <a href="/projetos">
              <img src={selectedImage('projetos', '/projetos')} alt="logo" />
              <span>projetos</span>
            </a>
          </li>
          <li>
            <a href="/sobre">
              <img src={selectedImage('sobre', '/sobre')} alt="logo" />
              <span>sobre</span>
            </a>
          </li>
          <li>
            <a href="/contato">
              <img src={selectedImage('contato', '/contato')} alt="logo" />
              <span>contato</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
