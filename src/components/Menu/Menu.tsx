import './style.scss';
export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/projetos">projetos</a>
        </li>
        <li>
          <a href="/sobre">sobre</a>
        </li>
        <li>
          <a href="/contato">contato</a>
        </li>
      </ul>
    </div>
  );
}
