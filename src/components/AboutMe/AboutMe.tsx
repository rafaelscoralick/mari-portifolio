import LeiaMais from '../LeiaMais';
import MeuCurriculoButton from '../MeuCurriculoButton';
import './style.scss';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <MeuCurriculoButton />
      <div className="inner">
        <h3>+ sobre mim</h3>
        <p>
          A curiosidade e paixão por experiências intuitivas e memoráveis são o
          que me motivam a desenvolver minhas habilidades.
        </p>
        <p>
          Com <strong>ênfase no usuário</strong>, busco combinar estética e
          funcionalidade para desenvolver produtos que vão além das interfaces,
          proporcionando soluções inclusivas que realmente{' '}
          <strong>impactem de forma positiva.</strong>
        </p>
        <p>
          Estou animada para fazer parte de equipes colaborativas e inovadoras,
          prontas para atender as necessidades do usuário e do negócio. 🥳 🖥️
        </p>

        <LeiaMais
          button={
            <div className="button-leiamais">
              <div className="left">
                <img src="/svg/cardbigode.svg" alt="leiamais" />
              </div>
              <div className="right">
                <span className="title">leia mais</span>
                <span className="text">
                  Crônicas urbanas de uma carioca inspirada.
                </span>
              </div>
            </div>
          }
        >
          <div className="row">
            <div className="desktop-only image-container ">
              <img src="/banners/carioca.png" alt="carioca" />
            </div>
            <div className="content scroll-box">
              <h3>crônicas urbanas de uma carioca inspirada</h3>
              <p>
                Carioca do Aterro do Flamengo – desde cedo compartilhava a
                curiosidade de meu pai sobre a cidade. Isso se refletia no
                costume de memorizar quem eram meus amigos pelo bairro em que
                residiam. Quem me conhecer provavelmente vai me ver repetir essa
                mesma pergunta, mas saiba que é uma forma de lidar com a memória
                urbana.
              </p>
              <p>
                Em minhas raízes há a mistura do Rio e Ceará (mãe e pai) – e
                também no meu cotidiano. Nos anos 90, foi um espanto descobrir
                que muitos conterrâneos não sabiam que existia cuscuz salgado.
                Sou filha do biscoito Globo com o baião de dois, do Mate Leão
                com as garrafadas e as ervas do sertão.
              </p>
              <h4>“filha do biscoito Globo com baião de dois”</h4>
              <p>
                Minha cidade tem muita identidade e símbolos inesquecíveis. Das
                calçadas de Burle Marx aos azulejos da Escadaria Selarón, dos
                parangolés de Oiticica às fantasias das escolas de samba, tudo
                cheira a Rio. E isso vai entranhando na gente, construindo todo
                um jeitinho de ser e estar no mundo.
              </p>
              <p>
                E assim sigo, conhecendo gente e perguntando de onde elas são.
                Talvez seja só curiosidade, talvez seja minha forma de
                cartografar os espaços da memória afetiva. Ou talvez seja essa
                curiosidade de entender como as pessoas vivem, o que as move, o
                que é especial e afetivo em suas vidas. No fim das contas, não
                sou cronista, só sou boa observadora — e adoro bater um papo.
              </p>
            </div>
          </div>
        </LeiaMais>

        <LeiaMais
          button={
            <div className="button-leiamais">
              <div className="left">
                <img src="/svg/cardbox.svg" alt="leiamais" />
              </div>
              <div className="right">
                <span className="title">leia mais</span>
                <span className="text">
                  Como vim parar aqui - um relato da minha trajetória
                  profissional.
                </span>
              </div>
            </div>
          }
        >
          <div className="row">
            <div className="desktop-only image-container">
              <img src="/banners/marifoto.png" alt="carioca" />
            </div>
            <div className="content scroll-box">
              <h3>
                Como vim parar aqui - um relato da minha trajetória profissional
              </h3>
              <p>
                Comecei minha vida profissional vivendo um sonho: estudar para
                ser curadora de arte. História da Arte foi o caminho escolhido,
                mas, querendo ampliar minhas possibilidades de atuação no
                mercado, busquei outras formas de trabalhar com o que me
                interessava. O design gráfico apareceu para ampliar meu
                repertório.
              </p>
              <p>
                A mudança de foco aconteceu naturalmente. Busquei entender
                melhor como criar materiais que, além de esteticamente
                agradáveis, fossem funcionais e eficazes para quem realmente os
                utilizaria. Foi nesse momento que me deparei com UX/UI Design. A
                ideia de embasar escolhas em pesquisas, testes e comportamento
                do usuário me conquistou imediatamente.
              </p>
              <h4>
                “No fim das contas, tudo foi se encaixando – da curadoria ao UX,
                o que sempre importou foi construir experiências memoráveis.”
              </h4>
              <p>
                Resolvi mergulhar nisso de cabeça. Fiz cursos, redesenhei
                projetos, entrei em uma equipe de trabalho voluntário e fui
                construindo minha nova trajetória. Hoje, estou no ConectaBem,
                onde, além de lidar com design de interfaces, participo de
                pesquisas, analiso jornadas e construo experiências pensando
                tanto no usuário quanto nos objetivos do negócio.
              </p>
              <p>
                E foi assim que vim parar aqui - das exposições de arte para
                interfaces. No fim das contas, tudo foi se encaixando – da
                curadoria ao UX, o que sempre importou foi construir
                experiências memoráveis.
              </p>
            </div>
          </div>
        </LeiaMais>
      </div>
    </div>
  );
}
