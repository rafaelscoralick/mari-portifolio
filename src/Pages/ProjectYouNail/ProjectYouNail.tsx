import CustomButton from '../../components/CustomButton';
import DeliveryCarrousel from '../../components/DeliveryCarrousel';
import Page from '../../Containers/Page';
import { items } from '../../Data/MockDeliveryCarrousel';
import useDeviceType from '../../hooks/useDeviceType';
import './style.scss';

export default function ProjectYouNail() {
  const isMobile = useDeviceType();

  return (
    <Page>
      <div className="projectyounail">
        <div className="masonry row desktop-only">
          <div className="masonry-item">
            <div className="project-main">
              <h1>You.nail</h1>
              <h2>Tendência para suas unhas</h2>
              <p>
                Milhões de técnicas e tendências de manicure aparecem todos os
                dias. Guardamos as imagens de referência e torcemos para
                encontrar uma manicure que realize o design que desejamos.
              </p>
              <p>
                You.Nail surge para atender a dor do público que quer sempre
                usar as últimas tendências e não ter dor de cabeça para
                encontrar quem faça.
              </p>
              <p>
                Imagina achar a manicure perfeita que faz as unhas iguais as
                daquela “it girl” que todos sabemos quem é 😏✨
              </p>
            </div>
            <div className="row">
              <div className="imgsmall">
                <img src="/banners/Rectangle482.png" alt="younailbanner" />
              </div>
              <div className="imgsmall">
                <img src="/banners/Rectangle483.png" alt="younailbanner" />
              </div>
            </div>
          </div>
          <div className="masonry-item">
            <img src="/banners/Rectangle2.png" alt="younailbanner" />
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="abovethefold mobile-only">
          <img src="/banners/younailvogue.png" alt="younailvogue" />
          <p>
            Créditos da imagem: Capa matéria Hailey Bieber. Crédito: Vogue
            America. Imagem: @haileybieber
          </p>
          <div className="project-title">
            <h1>You.Nail</h1>
          </div>
        </div>
        <div className="mobile-only column">
          <h3>Tendência para suas unhas</h3>
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
            Imagina achar a manicure perfeita que faz as unhas iguais as daquela
            “it girl” que todos sabemos quem é 😏✨
          </p>
          <div className="disclaimer">
            <img src="/svg/disclaimer.svg" alt="disclaimer" />
            <span>
              O produto foi pensado e desenvolvido durante o curso de
              <strong>
                {' '}
                Product Design na TheStarter - Cursos Avançados de Ux.{' '}
              </strong>
              Neste estudo de caso foi desenvolvido o fluxo de busca por imagem
              e tags.
            </span>
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="section-project">
          <div className="desktop-only">
            <h2>Sobre o projeto</h2>
          </div>
          <div>
            <div className="sub-section">
              <h2 className="mobile-only">sobre o projeto</h2>
              <h3>meu papel</h3>
              <p>
                neste projeto atuei como Product Designer. Desenvolvi as
                estratégias para lançamento do produto e toda parte de pesquisa
                e resolução do problema de design.
              </p>
            </div>
            <div className="sub-section">
              <h3>desafio</h3>
              <p>
                a ampla gama de termos utilizados para descrever serviços de
                manicure, como extensão, alongamento, gel, acrílico, tips, nail
                design, designer de unhas, pode causar confusão e mal-entendidos
                entre clientes e profissionais. O desafio enfrentado é criar um
                fluxo de busca eficiente que gere menos confusão na hora do
                agendamento e maior assertividade para encontrar o serviço
                desejado.
              </p>
            </div>
          </div>
        </div>
        <div className="banner mobile-only">
          <img src="/banners/exemplo.png" alt="younailbanner" />
        </div>
        <div className="banner desktop-only">
          <img src="/banners/Rectangle.png" alt="younailbanner" />
        </div>
        <div className="section-project">
          <div className="desktop-only">
            <h2>o problema</h2>
          </div>
          <div>
            <h2 className="mobile-only">o problema</h2>
            <h3>hipótese</h3>
            <p>
              acredito que ao padronizar os termos de serviços de manicure e
              oferecer uma opção de busca visual (upload de imagens de
              referência), poderemos reduzir a tempo de busca e aumentar a
              clareza para os usuários, pois é comum que terminologias variadas
              e subjetivas dificultem a busca por serviços específicos. Além da
              diminuição média de 25% nas desmarcações de horários com uso de
              agenda online¹.
            </p>
            <sub>
              ¹ fonte: Com aporte de US$ 70 mi, americana Booksy planeja dobrar
              operação no Brasil
            </sub>
            <div className="disclaimer">
              <img src="/svg/disclaimer.svg" alt="disclaimer" />
              <span>
                o atual estudo não incluiu pesquisas quantitativas e
                qualitativas, apenas pesquisa exploratória. O processo para um
                produto real deve se basear em dados que sustentem as hipóteses
                e tomadas de decisão.
              </span>
            </div>
          </div>
        </div>
        <div className="section-project">
          <div className="desktop-only">
            <h2>solução proposta</h2>
          </div>
          <div>
            <h3 className="mobile-only">solução proposta</h3>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>
                upload de imagens de referência para facilitar a busca por
                serviços específicos.
              </span>
            </div>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>
                tags (chips) de serviço, técnicas e tendências para identificar
                a manicure que realiza o design desejado.
              </span>
            </div>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>
                construir um fluxo de busca/pesquisa com upload de imagens e
                resultados visuais que facilitem a busca por um serviço.
              </span>
            </div>
          </div>
        </div>
        <div className="uvp">
          <div>
            <span className="">
              <h2>uvp</h2>
              <h4>unique value proposition</h4>
            </span>
            <p>
              “a You.Nail sempre te ajuda a achar as melhores profissionais para
              deixarem suas unhas iguais às imagens de referência que você
              guarda no celular.”
            </p>
          </div>
        </div>
        <div className="banner mobile-only">
          <img src="/banners/exemplo2.png" alt="younailbanner" />
        </div>
        <div className="section-project">
          <div className="desktop-only">
            <h2>O processo</h2>
          </div>
          <div>
            <h2 className="mobile-only">o processo</h2>
            <h3>discovery & delivery</h3>
            <p>
              o projeto está dividido em duas grandes fases: discovery e
              delivery. na primeira iremos mergulhar no problema, já na segunda
              desenvolveremos os entregáveis.
            </p>
            <div className="desktop-only">
              <div className="disclaimer">
                <img src="/svg/disclaimer.svg" alt="disclaimer" />
                <span>
                  a metodologia de desenvolvimento utilizada foi o double
                  diamond, que organiza o processo de design em quatro etapas:
                  descobrir, definir, desenvolver e entregar. ele ajuda a
                  entender em profundidade o problema antes de criar e testar
                  soluções. o modelo promove a exploração de ideias e a entrega
                  de soluções centradas no usuário.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="discovery">
          <div>
            <div>
              <h3>discovery</h3>
              <p>
                o projeto está dividido em duas grandes fases: Discovery e
                Delivery. Na primeira iremos mergulhar no problema, já na
                segunda desenvolveremos os entregáveis.
              </p>
            </div>
            <div>
              <DeliveryCarrousel items={items} qtd={isMobile ? 1 : 3.5} />
            </div>
          </div>
        </div>
        <div className="discovery">
          <h3>delivery</h3>
          <p>
            esta é a parte que iremos desenvolver os entregáveis do projeto.
            neste projeto não desenvolvi testes de usabilidade, mas são
            indicados para uma primeira validação das hipóteses de design.
          </p>
          {/* <DeliveryCarrousel items={items} /> */}
        </div>
        <h2>protótipo navegável</h2>
        <iframe
          src="https://embed.figma.com/proto/P9xC9V78gHmGGd3aabQzS3/Product-Design_The-Starter?page-id=724%3A1801&node-id=731-4179&p=f&viewport=1124%2C207%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=731%3A4179&embed-host=share"
          height={isMobile ? 520 : 640}
          width={isMobile ? 236 : 440}
          allowFullScreen
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        ></iframe>
        <div className="section-project">
          <div className="desktop-only">
            <h2>conclusão</h2>
          </div>
          <div>
            <h2 className="mobile-only">conclusão</h2>
            <p>
              o projeto you.nail foi desenvolvido com objetivo de solucionar uma
              dor recorrente no segmento de nail design, a dificuldade dos
              clientes em encontrar serviços específicos devido à diversidade de
              termos de pesquisa e à subjetividade nas descrições.{' '}
              <strong>
                como product designer, meu papel foi criar um fluxo de busca
                para trazer clareza às pesquisas
              </strong>
              , utilizando estratégias baseadas em pesquisa exploratória para
              propor soluções centradas no usuário.
            </p>
            <p>
              <strong>
                O resultado foi um fluxo de busca simples, eficiente e com um
                padrão visual já conhecido dos usuários que utilizam buscadores
                online, que inclui a opção de upload de imagens de referência e
                filtros visuais que conectam clientes a profissionais de forma
                assertiva.
              </strong>{' '}
              Essa abordagem visa não apenas reduzir o tempo de busca, mas
              também aumentar a satisfação dos usuários, permitindo que
              encontrem exatamente o que desejam.
            </p>
            <p>
              embora o estudo tenha sido exploratório, os insights obtidos abrem
              portas para futuras validações com dados mais robustos, garantindo
              a evolução do produto. A experiência de desenvolver este projeto
              reforçou a importância de criar soluções intuitivas e focadas em
              necessidades reais, o que me inspira a continuar aprimorando
              minhas habilidades como product designer.
            </p>
            <h2>oportunidades para evolução</h2>
            <p>
              em uma evolução deste projeto, desenvolveria o fluxo de
              agendamento e conversa com o prestador de serviço. o fluxo de
              pesquisa mais agendamento elevam as possibilidades de conversão da
              plataforma.
            </p>
          </div>
        </div>
        <div className="row jc">
          <CustomButton href="/">
            <h4>leia mais </h4>
            <div className="row-mobile">
              <img src="/banners/MockupsFlatlay.png" alt="MockupsFlatlay" />
              <span>
                you.nail, fluxo de pesquisa para aplicação de agendamento de
                manicure.
              </span>
            </div>
          </CustomButton>
          <CustomButton href="/">
            <h4>leia mais </h4>
            <div className="row-mobile">
              <img src="/banners/MockupsFlatlay2.png" alt="MockupsFlatlay" />
              <span>
                shopee, redesign do fluxo de Carrinho e Checkout do aplicativo
                de varejo eletrônico.
              </span>
            </div>
          </CustomButton>
        </div>
      </div>
    </Page>
  );
}
