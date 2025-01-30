import { useNavigate } from 'react-router-dom';
import './style.scss';
type MenuProps = {
  projects: Array<{
    name: string;
    link: string;
  }>;
};
export default function Menu({ projects }: MenuProps) {
  const navigate = useNavigate();

  const handleScrollToSection = (section: string) => {
    if (window.location.pathname !== '/') {
      navigate('/'); // Vai para a home
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="menu">
      <ul>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            home
          </a>
        </li>
        <li>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('projetos');
            }}
          >
            projetos
          </a>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(project.link.split('#')[1]); // Rola até a seção 'projetos' na home
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a
            href="#sobre"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('sobre');
            }}
          >
            sobre
          </a>
        </li>
        <li>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contato');
            }}
          >
            contato
          </a>
        </li>
      </ul>
    </div>
  );
}
