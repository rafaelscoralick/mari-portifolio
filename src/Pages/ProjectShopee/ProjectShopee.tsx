import CustomButton from '../../components/CustomButton';
// import DeliveryCarrousel from '../../components/DeliveryCarrousel';
import Page from '../../Containers/Page';
// import { items } from '../../Data/MockDeliveryCarrousel';
import useDeviceType from '../../hooks/useDeviceType';
import './style.scss';

export default function ProjectShopee() {
  const isMobile = useDeviceType();

  return (
    <Page>
      <div className="projectshopee">
        <div className="masonry row desktop-only">
          <div className="masonry-item">
            <div className="project-main">
              <h1>shopee</h1>
              <h2>redesign carrinho e checkout</h2>
              <p>
                A decisão de realizar o redesign da Shopee foi impulsionada pela
                necessidade de adaptar a visualidade da plataforma para algo
                mais alinhado às preferências e expectativas do público
                brasileiro. Este ajuste visava criar uma experiência mais
                intuitiva e culturalmente relevante, ampliando a conexão entre a
                marca e seus usuários.
              </p>
              <p>
                Por meio de pesquisas quantitativas, qualitativas e desk
                research, identifiquei pontos críticos no fluxo de carrinho e
                checkout, áreas que impactam diretamente a taxa de abandono e a
                fidelização dos usuários. Com base nas evidências coletadas, foi
                possível remodelar essas etapas essenciais, tornando o processo
                de compra mais fluido e eficiente, contribuindo para a
                possibilidade de um aumento na conversão dentro da plataforma.
              </p>
            </div>
            <div className="row">
              <div className="imgsmall">
                <img src="/banners/Rectangle480a.png" alt="shopeebanner" />
              </div>
              <div className="imgsmall">
                <img src="/banners/Rectangle480b.png" alt="shopeebanner" />
              </div>
            </div>
          </div>
          <div className="masonry-item">
            <img src="/banners/Rectangle480.png" alt="shopeebanner" />
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="abovethefold mobile-only">
          <img src="/banners/Rectangle480c.png" alt="shopeebanner" />

          <div className="project-title">
            <h1>shopee</h1>
          </div>
        </div>
        <div className="mobile-only column">
          <h3>Redesign fluxo de carrinho e checkout</h3>
          <p>
            A decisão de realizar o redesign da Shopee foi impulsionada pela
            necessidade de adaptar a visualidade da plataforma para algo mais
            alinhado às preferências e expectativas do público brasileiro. Este
            ajuste visava criar uma experiência mais intuitiva e culturalmente
            relevante, ampliando a conexão entre a marca e seus usuários.
          </p>
          <p>
            Por meio de pesquisas quantitativas, qualitativas e desk research,
            identifiquei pontos críticos no fluxo de carrinho e checkout, áreas
            que impactam diretamente a taxa de abandono e a fidelização dos
            usuários. Com base nas evidências coletadas, foi possível remodelar
            essas etapas essenciais, tornando o processo de compra mais fluido e
            eficiente, contribuindo para a possibilidade de um aumento na
            conversão dentro da plataforma.
          </p>
        </div>
        {/* /////////////////////////////// */}
        <div className="section-project">
          <div className="desktop-only">
            <h2>Sobre o projeto</h2>
          </div>
          <div>
            <div className="sub-section">
              <h2 className="mobile-only">sobre o projeto</h2>
              <h3>ano do projeto</h3>
              <p>2024</p>
              <h3>papel no projeto</h3>
              <p>Ux/Ui designer</p>
              <h3>duração do projeto</h3>
              <p>3 meses</p>
            </div>
          </div>
        </div>
        <div className="disclaimer">
          <img src="/svg/disclaimer.svg" alt="disclaimer" />
          <span>
            Este projeto foi desenvolvido ao longo do curso de UX Avançado da
            CoderHouse.
          </span>
        </div>
        <div className="banner mobile-only">
          <img src="/banners/image50.png" alt="banner" />
        </div>

        <div className="button-container mobile-only">
          <button>leia a documentação</button>
        </div>

        <div className="prototipo">
          <div className="desktop-only">
            <img src="/banners/Rectangle480d.png" alt="shopeebanner" />
          </div>
          <div className="iframe-container">
            <h3 className="mobile-only">Protótipo Navegável</h3>
            <iframe
              src="https://embed.figma.com/proto/P9xC9V78gHmGGd3aabQzS3/Product-Design_The-Starter?page-id=724%3A1801&node-id=731-4179&p=f&viewport=1124%2C207%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=731%3A4179&embed-host=share"
              height={isMobile ? 520 : 700}
              width={isMobile ? 236 : 440}
              allowFullScreen
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            ></iframe>
          </div>
        </div>

        <br />
        <div className="row jc">
          <CustomButton href="/projetos/younail">
            <h4>leia mais </h4>
            <div className="row-mobile">
              <img src="/banners/MockupsFlatlay.png" alt="MockupsFlatlay" />
              <span>
                you.nail, fluxo de pesquisa para aplicação de agendamento de
                manicure.
              </span>
            </div>
          </CustomButton>
          <CustomButton href="/projetos/hbparceiros">
            <h4>leia mais </h4>
            <div className="row-mobile">
              <img src="/mockup2.png" alt="MockupsFlatlay" />
              <span>Honeybee parceiros, painel para afiliados e-commerce</span>
            </div>
          </CustomButton>
        </div>
      </div>
    </Page>
  );
}
