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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius quis, laoreet windows, posuere nec, leo. Duis
            ut mi. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu,
          </p>
        </LeiaMais>
      </div>
    </div>
  );
}
