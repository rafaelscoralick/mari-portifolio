import './style.scss';
type MenuProps = {
  projects: Array<{
    name: string;
    link: string;
  }>;
};
export default function Menu({ projects }: MenuProps) {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#projetos">projetos</a>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a href={project.link}>{project.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#sobre">sobre</a>
        </li>
        <li>
          <a href="#contato">contato</a>
        </li>
      </ul>
    </div>
  );
}
