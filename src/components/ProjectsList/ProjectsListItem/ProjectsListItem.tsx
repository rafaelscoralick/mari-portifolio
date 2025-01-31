import { IProjectsListItem } from '../../../types/types';
import Icon from '../../Icon';
import './style.scss';

export default function ProjectsListItem({
  name,
  title,
  imageMockup,
  description,
  backgroundImage,
  icons,
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
          <h3>{title}</h3>
          <span>{description}</span>

          <div className="image-mockup-mob">
            <img src={imageMockup} alt="image-mockup" />
          </div>

          <div className="ver-mais">
            <a href={`/projetos/${name}`}>ver mais</a>
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
