import Menu from '../Menu';
import './style.scss';
import logo from '/Logo.svg';
export default function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} className="logo" alt="mari logo" />
      </a>
      <Menu />
    </div>
  );
}
