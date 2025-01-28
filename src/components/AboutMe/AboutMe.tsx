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
            <div className="desktop-only">
              <img src="/banners/carioca.png" alt="carioca" />
            </div>
            <div className="content">
              <h3>crônicas urbanas de uma carioca inspirada</h3>
              <p>
                Carioca do Aterro do Flamengo. Desde cedo compartilhava a
                curiosidade de meu pai sobre a cidade - isto se refletia no
                costume de gravar quem eram meus amigos pelo bairro em que
                residiam. Quem me conhecer provavelmente vai me ver repetir essa
                mesma pergunta, mas saiba que é uma forma de lidar com a memória
                urbana.
              </p>
              <h4>“filha do biscoito Globo com baião de dois”</h4>
              <p>
                Em minhas raízes há a mistura do Rio e Ceará (mãe e pai), e
                também no meu cotidiano. Foi um espanto descobrir que muitos
                conterrâneos não sabiam que existia cuscuz salgado. Sou filha do
                biscoito Globo com o baião de dois, do Mate Leão com as
                garrafadas e as ervas do sertão.
              </p>
            </div>
          </div>
        </LeiaMais>
      </div>
    </div>
  );
}
