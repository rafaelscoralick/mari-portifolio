import CustomButton from '../../components/CustomButton';
import DeliveryCarrousel from '../../components/DeliveryCarrousel';
import Page from '../../Containers/Page';
import { items } from '../../Data/MockDeliveryCarrousel';
import useDeviceType from '../../hooks/useDeviceType';
import './style.scss';

function ProjectYouNailMobile() {
  return (
    <div className="projectyounail mobile">
      <div className="abovethefold">
        <img src="/banners/younailvogue.png" alt="younailvogue" />
        <p>
          Créditos da imagem: Capa matéria Hailey Bieber. Crédito: Vogue
          Scandinavia. Imagem: Rhode (@rhode)
        </p>
      </div>
      <h1>You.Nail</h1>
      <h2>Tendência para suas unhas</h2>
      <p>
        Milhões de técnicas e tendências de manicure aparecem todos os dias.
        Guardamos as imagens de referência e torcemos para encontrar uma
        manicure que realize o design que desejamos.
      </p>
      <p>
        You.Nail surge para atender a dor do público que quer sempre usar as
        últimas tendências e não ter dor de cabeça para encontrar quem faça.
      </p>
      <p>
        Imagina achar a manicure perfeita que faz as unhas iguais as daquela “it
        girl” que todos sabemos quem é 😏✨
      </p>
      <div className="disclaimer">
        <img src="/svg/disclaimer.svg" alt="disclaimer" />
        <span>
          O produto foi pensado e desenvolvido durante o curso de
          <strong>
            {' '}
            Product Design na TheStarter - Cursos Avançados de Ux.{' '}
          </strong>
          Neste estudo de caso foi desenvolvido o fluxo de busca por imagem e
          tags.
        </span>
      </div>
      {ProjectYouNailBase()}
    </div>
  );
}

function ProjectYouNailDesktop() {
  return (
    <div className="projectyounail desktop">
      <div className="abovethefold">
        <img src="/banners/younailvogue.png" alt="younailvogue" />
        <p>
          Créditos da imagem: Capa matéria Hailey Bieber. Crédito: Vogue
          Scandinavia. Imagem: Rhode (@rhode)
        </p>
      </div>
      <div className="punch-line"></div>
      {ProjectYouNailBase()}
    </div>
  );
}

function ProjectYouNailBase() {
  return (
    <>
      <h2>Meu papel</h2>
      <p>
        Neste projeto atuei como Product Designer. Desenvolvi as estratégias
        para lançamento do produto e toda parte de pesquisa e resolução do
        problema de design.
      </p>
      <h2>Desafio</h2>
      <p>
        A ampla gama de termos utilizados para descrever serviços de manicure,
        como extensão, alongamento, gel, acrílico, tips, nail design, designer
        de unhas, pode causar confusão e mal-entendidos entre clientes e
        profissionais. O desafio enfrentado é criar um fluxo de busca eficiente
        que gere menos confusão na hora do agendamento e maior assertividade
        para encontrar o serviço desejado.
      </p>
      <div className="banner">
        <img src="/banners/exemplo.png" alt="younailbanner" />
      </div>
      <h2>Hipótese</h2>
      <p>
        Acredito que ao padronizar os termos de serviços de manicure e oferecer
        uma opção de busca visual (upload de imagens de referência), poderemos
        reduzir a tempo de busca e aumentar a clareza para os usuários, pois é
        comum que terminologias variadas e subjetivas dificultem a busca por
        serviços específicos. Além da diminuição média de 25% nas desmarcações
        de horários com uso de agenda online¹.
      </p>
      <sub>
        ¹ fonte: Com aporte de US$ 70 mi, americana Booksy planeja dobrar
        operação no Brasil
      </sub>
      <div className="disclaimer">
        <img src="/svg/disclaimer.svg" alt="disclaimer" />
        <span>
          O atual estudo não incluiu pesquisas quantitativas e qualitativas,
          apenas pesquisa exploratória. O processo para um produto real deve se
          basear em dados que sustentem as hipóteses e tomadas de decisão.
        </span>
      </div>
      <h2>Solução Proposta</h2>
      <div className="star-solution">
        <img src="/svg/star.svg" alt="star" />
        <span>
          Upload de imagens de referência para facilitar a busca por serviços
          específicos.
        </span>
      </div>
      <div className="star-solution">
        <img src="/svg/star.svg" alt="star" />
        <span>
          Tags (chips) de serviço, técnicas e tendências para identificar a
          manicure que realiza o design desejado.
        </span>
      </div>
      <div className="star-solution">
        <img src="/svg/star.svg" alt="star" />
        <span>
          Construir um fluxo de busca/pesquisa com upload de imagens e
          resultados visuais que facilitem a busca por um serviço.
        </span>
      </div>
      <h2>UVP</h2>
      <h3>Unique value proposition</h3>
      <p>
        “ A You.Nail sempre te ajuda a achar as melhores profissionais para
        deixarem suas unhas iguais às imagens de referência que você guarda no
        celular.”
      </p>
      <div className="banner">
        <img src="/banners/exemplo2.png" alt="younailbanner" />
      </div>
      <h2>O processo</h2>
      <h3>Discovery & Delivery</h3>
      <p>
        O projeto está dividido em duas grandes fases: Discovery e Delivery. Na
        primeira iremos mergulhar no problema, já na segunda desenvolveremos os
        entregáveis.
      </p>
      <div className="discovery">
        <h2>Discovery</h2>
        <p>
          O projeto está dividido em duas grandes fases: Discovery e Delivery.
          Na primeira iremos mergulhar no problema, já na segunda
          desenvolveremos os entregáveis.
        </p>
        <DeliveryCarrousel items={items} />
      </div>
      <div className="discovery">
        <h2>Delivery</h2>
        <p>
          Esta é a parte que iremos desenvolver os entregáveis do projeto. Neste
          projeto não desenvolvi testes de usabilidade, mas são indicados para
          uma primeira validação das hipóteses de design.
        </p>
        <DeliveryCarrousel items={items} />
      </div>
      <h2>Protótipo Navegável</h2>

      <iframe
        src="https://embed.figma.com/proto/P9xC9V78gHmGGd3aabQzS3/Product-Design_The-Starter?page-id=724%3A1801&node-id=731-4179&p=f&viewport=1124%2C207%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=731%3A4179&embed-host=share"
        height={520}
        width={236}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
      ></iframe>
      <h2>Conclusão</h2>
      <p>
        O projeto You.Nail foi desenvolvido com objetivo de solucionar uma dor
        recorrente no segmento de nail design, a dificuldade dos clientes em
        encontrar serviços específicos devido à diversidade de termos de
        pesquisa e à subjetividade nas descrições.{' '}
        <strong>
          Como Product Designer, meu papel foi criar um fluxo de busca para
          trazer clareza às pesquisas
        </strong>
        , utilizando estratégias baseadas em pesquisa exploratória para propor
        soluções centradas no usuário.
      </p>
      <p>
        <strong>
          O resultado foi um fluxo de busca simples, eficiente e com um padrão
          visual já conhecido dos usuários que utilizam buscadores online, que
          inclui a opção de upload de imagens de referência e filtros visuais
          que conectam clientes a profissionais de forma assertiva.
        </strong>{' '}
        Essa abordagem visa não apenas reduzir o tempo de busca, mas também
        aumentar a satisfação dos usuários, permitindo que encontrem exatamente
        o que desejam.
      </p>
      <p>
        Embora o estudo tenha sido exploratório, os insights obtidos abrem
        portas para futuras validações com dados mais robustos, garantindo a
        evolução do produto. A experiência de desenvolver este projeto reforçou
        a importância de criar soluções intuitivas e focadas em necessidades
        reais, o que me inspira a continuar aprimorando minhas habilidades como
        Product Designer.
      </p>
      <h2>oportunidades para evolução</h2>
      <p>
        Em uma evolução deste projeto, desenvolveria o fluxo de agendamento e
        conversa com o prestador de serviço. O fluxo de pesquisa mais
        agendamento elevam as possibilidades de conversão da plataforma.
      </p>
      <CustomButton href="https://www.figma.com/file/0x9a3a4d0c0d9d4e0f9e/YouNail?node-id=0%3A1">
        <h4>Leia mais </h4>
        <div className="row-mobile">
          <img src="/banners/MockupsFlatlay.png" alt="MockupsFlatlay" />
          <span>
            You.Nail, fluxo de pesquisa para aplicação de agendamento de
            manicure.
          </span>
        </div>
      </CustomButton>
      <CustomButton href="https://www.figma.com/file/0x9a3a4d0c0d9d4e0f9e/YouNail?node-id=0%3A1">
        <h4>Leia mais </h4>
        <div className="row-mobile">
          <img src="/banners/MockupsFlatlay2.png" alt="MockupsFlatlay" />
          <span>
            Shopee, redesign do fluxo de Carrinho e Checkout do aplicativo de
            varejo eletrônico.
          </span>
        </div>
      </CustomButton>
    </>
  );
}

export default function ProjectYouNail() {
  const isMobile = useDeviceType();

  // return isMobile ? <ProjectYouNailMobile /> : <ProjectYouNailDesktop />;

  return (
    <Page>
      {isMobile ? <ProjectYouNailMobile /> : <ProjectYouNailDesktop />}
    </Page>
  );
}
