import { IProjectsListItem, Side } from '../../types/types';
import Project from './ProjectsListItem';
import './style.scss';
export default function ProjectsList() {
  const data: IProjectsListItem[] = [
    {
      logoProject: '/younail-icon.png',
      description:
        'Encontre a manicure perfeita para fazer sua unha igual aquela imagem que você salvou em sua galeria.',
      imageMockup: '/mockup1.png',
      onClick: () => {},
      side: Side.Left,
    },
    {
      logoProject: '/younail-icon.png',
      description:
        'Encontre a manicure perfeita para fazer sua unha igual aquela imagem que você salvou em sua galeria.',
      imageMockup: '/mockup1.png',
      onClick: () => {},
      side: Side.Right,
    },
    {
      logoProject: '/younail-icon.png',
      description:
        'Encontre a manicure perfeita para fazer sua unha igual aquela imagem que você salvou em sua galeria.',
      imageMockup: '/mockup1.png',
      onClick: () => {},
      side: Side.Left,
    },
  ];

  return (
    <div className="projectslist">
      <h2>Projetos</h2>
      <div className="projectslist-items">
        {data.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
