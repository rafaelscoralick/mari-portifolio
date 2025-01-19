import Menu from '../Menu';
import './style.scss';
import logo from '/Logo.svg';
type HeaderProps = {
  projects: Array<{
    name: string;
    link: string;
  }>;
};
export default function Header({ projects }: HeaderProps) {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} className="logo" alt="mari logo" />
      </a>
      <Menu projects={projects} />
    </div>
  );
}
