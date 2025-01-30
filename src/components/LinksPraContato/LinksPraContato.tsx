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
            <a href="whatsapp://send?phone=5521965883489" target="_blank">
              <img src="/svg/whatsapp.svg" alt="whatsapp" />
              <span>whatsapp</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mariana-lima-5664a17b/"
              target="_blank"
            >
              <img src="/svg/linkedin.svg" alt="linkedin" />
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a href="mailto:ola.limamari@gmail.com" target="_blank">
              <img src="/svg/mail.svg" alt="e-mail" />
              <span>e-mail</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
