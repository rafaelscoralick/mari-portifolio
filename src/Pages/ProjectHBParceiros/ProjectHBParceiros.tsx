import CustomButton from '../../components/CustomButton';
import Carousel from '../../Containers/Carrousel';
import Page from '../../Containers/Page';
import useDeviceType from '../../hooks/useDeviceType';
import './style.scss';
export default function ProjectHBParceiros() {
  const isMobile = useDeviceType();
  return (
    <Page>
      <div className="projecthbparceiros">
        <div className="masonry row desktop-only">
          <div className="masonry-item">
            <img src="/banners/Rectangle484.png" alt="younailbanner" />
          </div>
          <div className="masonry-item">
            <div className="project-main">
              <h1>hb parceiros</h1>
              <h2>painel para afiliados e-commerce</h2>
              <p>
                O Honey Be Parceiros é uma iniciativa do maior e-commerce de
                moda fitness do Brasil, que lançou a primeira parceria online
                exclusiva de moda fitness no mercado brasileiro.
                <strong>
                  O projeto permitiu que que os parceiros utilizem a
                  infraestrutura da loja virtual da Honey Be para vender
                  produtos da marca, com acesso a suporte completo, treinamento
                  especializado em marketing digital e uma operação
                  simplificada.
                </strong>
                A iniciativa tem como objetivo oferecer uma nova fonte de renda,
                especialmente durante a pandemia, democratizando o acesso ao
                mercado online e integrando ferramentas de acompanhamento de
                vendas e capacitação em um painel intuitivo.
              </p>
            </div>
            <div className="row">
              <div className="imglong">
                <img src="/banners/Rectangle484b.png" alt="younailbanner" />
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="abovethefold mobile-only">
          <img src="/banners/hbbanner.png" alt="banner" />
          <p>
            Créditos da imagem: Capa matéria Hailey Bieber. Crédito: Vogue
            America. Imagem: @haileybieber
          </p>
          <div className="project-title">
            <h1>hb parceiros</h1>
          </div>
        </div>
        <div className="mobile-only column">
          <h3>painel para afiliados e-commerce moda fitness</h3>
          <p>
            O Honey Be Parceiros é uma iniciativa do maior e-commerce de moda
            fitness do Brasil, que lançou a primeira parceria online exclusiva
            de moda fitness no mercado brasileiro.
            <strong>
              O projeto permitiu que que os parceiros utilizem a infraestrutura
              da loja virtual da Honey Be para vender produtos da marca, com
              acesso a suporte completo, treinamento especializado em marketing
              digital e uma operação simplificada.
            </strong>
            A iniciativa tem como objetivo oferecer uma nova fonte de renda,
            especialmente durante a pandemia, democratizando o acesso ao mercado
            online e integrando ferramentas de acompanhamento de vendas e
            capacitação em um painel intuitivo.
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
              <p>2020</p>
              <h3>papel no projeto</h3>
              <p>Ui design</p>
              <h3>duração do projeto</h3>
              <p>2 meses</p>
            </div>
          </div>
        </div>
        <div className="disclaimer halfsize desktop-only">
          <img src="/svg/disclaimer.svg" alt="disclaimer" />
          <span>
            A parte visual do projeto foi <strong>atualizada em 2024</strong>{' '}
            para este portfólio e para melhorar alguns aspectos de usabilidade.
            A época era designer gráfico e atuava pontualmente como ui designer.
            E atualmente como sou Ux/Ui, aproveitei a oportunidade para melhorar
            alguns aspectos do trabalho.
          </span>
        </div>

        <div className="disclaimer mobile-only">
          <img src="/svg/disclaimer.svg" alt="disclaimer" />
          <span>
            A parte visual do projeto foi <strong>atualizada em 2024</strong>{' '}
            para este portfólio e para melhorar alguns aspectos de usabilidade.
            A época era designer gráfico e atuava pontualmente como ui designer.
            E atualmente como sou Ux/Ui, aproveitei a oportunidade para melhorar
            alguns aspectos do trabalho.
          </span>
        </div>
        <div className="banner mobile-only">
          <img src="/banners/Rectangle484c.png" alt="younailbanner" />
        </div>
        <div className="banner desktop-only">
          <img src="/banners/Rectangle484d.png" alt="younailbanner" />
        </div>
        <p>Créditos da imagem: Honey Be (https://www.honeybe.com.br/)</p>
        <div className="section-project">
          <div className="desktop-only">
            <h2>o problema</h2>
          </div>
          <div>
            <h2 className="mobile-only">o problema</h2>
            <h3>o desafio do projeto</h3>
            <p>
              Quando fui procurada pela equipe da Honey Be para participar do
              projeto, eles estavam com a necessidade de criar um painel para
              que os novos parceiros pudessem acompanhar suas vendas e se
              capacitarem para vendas ao mesmo tempo. O cenário era a pandemia,
              então a necessidade era que fosse um projeto bem estruturado e com
              certa celeridade. A equipe era composta por um gerente de
              projetos, PO, UI e desenvolvedor. O gerente de projetos, junto a
              uma das diretoras da marca, desenhou a experiência esperada para o
              produto – algo que fosse familiar para quem já atuava no comércio
              online e com baixa curva de aprendizado para quem nunca havia
              atuado com e-commerce.
            </p>
            <div className="mobile-only">
              <div className="banner">
                <img src="/banners/Rectangle484e.png" alt="" />
              </div>
              <sub>
                Alguns rabisco frames da ideia inicial eram feitos em reuniões
                com toda a equipe.
              </sub>
            </div>
          </div>
        </div>
        <div className="section-project">
          <div>
            <h3>entregáveis</h3>
            <p>
              A solução desenhada para o painel de parceiros foi uma aplicação
              com navegação rápida e visualização dos principais dados de vendas
              e desempenho. O painel também conta com opções integradas para a
              retirada da comissão das vendas.
            </p>
            <div className="carrouselmocks">
              <Carousel items={isMobile ? 1 : 4.2} autoplay={false} dots={true}>
                <img src="/banners/hbmock.png" />
                <img src="/banners/hbmock2.png" />
                <img src="/banners/hbmock3.png" />
                <img src="/banners/hbmock4.png" />
                <img src="/banners/hbmock5.png" />
                <img src="/banners/hbmock6.png" />
              </Carousel>
            </div>
          </div>
        </div>

        <div className="section-project">
          <div className="desktop-only">
            <h2>resultados</h2>
          </div>
          <div>
            <h2 className="mobile-only">resultados</h2>
            <h3>resultados alcançados</h3>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>
                Mais de 10 mil parceiros inscritos no lançamento do produto
              </span>
            </div>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>Ampliação nos canais de venda da marca</span>
            </div>
            <div className="star-solution">
              <img src="/svg/star.svg" alt="star" />
              <span>
                Geração de renda para empreendedores em um período desafiador
                como a pandemia.
              </span>
            </div>
          </div>
        </div>

        <div className="section-project">
          <div className="desktop-only">
            <h3>conclusão</h3>
          </div>
          <div>
            <h2 className="mobile-only">conclusão</h2>
            <p>
              Como UI Designer do projeto Honey Be Parceiros, meu objetivo foi
              criar uma interface que equilibrasse funcionalidade e
              acessibilidade para atender a um público diversificado, desde
              empreendedores experientes até aqueles iniciando no e-commerce.{' '}
              <strong>
                Trabalhei junto ao time de produto para desenvolver telas que
                facilitassem a navegação e tornassem o acompanhamento de vendas,
                desempenho financeiro e treinamentos intuitivos e uma ferramenta
                para todas as horas - os dados do seu negócio em qualquer lugar,
                a qualquer hora.{' '}
              </strong>
              Cada detalhe foi pensado para reduzir a curva de aprendizado,
              garantindo que os parceiros tivessem autonomia para utilizar o
              painel com confiança.
            </p>
          </div>
        </div>
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
          <CustomButton href="/projetos/shopee">
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
