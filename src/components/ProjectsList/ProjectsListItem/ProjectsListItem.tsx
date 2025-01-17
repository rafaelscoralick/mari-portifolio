import { IProjectsListItem } from '../../../types/types';
import './style.scss';

export default function ProjectsListItem({
  imageMockup,
  logoProject,
  description,
  onClick,
  side,
}: IProjectsListItem) {
  return (
    <div className={`projectslistitem side-${side}`}>
      <div className="image-mockup">
        <img src={imageMockup} alt="image-mockup" />
      </div>
      <div className="core">
        <h3>
          <img src={logoProject} alt="logo-project" />
        </h3>
        <p>{description}</p>

        <div className="buttons">
          <button className="button-primary" onClick={onClick}>
            <span>Visitar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
