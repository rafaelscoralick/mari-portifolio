import { IProjectsListItem } from '../../../types/types';
import Icon from '../../Icon';
import './style.scss';

export default function ProjectsListItem({
  imageMockup,
  logoProject,
  description,
  backgroundImage,
  icons,
  onClick,
  side,
}: IProjectsListItem) {
  return (
    <div className={`projectslistitem side-${side}`}>
      <div
        className="image-mockup"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img src={imageMockup} alt="image-mockup" />
      </div>
      <div className="core">
        <div className="inner">
          <h3>
            <img src={logoProject} alt="logo-project" />
          </h3>
          <p>{description}</p>

          <div className="ver-mais">
            <button onClick={onClick}>VER MAIS</button>
          </div>

          <div className="icons">
            {icons.map((icon, index) => (
              <Icon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
