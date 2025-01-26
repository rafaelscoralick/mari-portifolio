import './style.scss';
export default function LinksPraContato() {
  return (
    <div className="linkspracontato">
      <h3>gostou dos projetos ?</h3>
      <div className="row">
        <span className="text">
          Entre em contato,vamos bater um papo sobre como posso somar no seu
          produto !
        </span>
        <ul>
          <li>
            <a href="/">
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
              <span>whatsapp</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
              <span>whatsapp</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
              <span>whatsapp</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
