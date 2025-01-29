import './style.scss';
export default function MeuCurriculoButton() {
  return (
    <div className="meucurriculobutton">
      <h3>meu currículo</h3>
      <a
        href="https://drive.google.com/file/d/1pT53t1WMyXG99PpXT8qaG3SRQSl0UVQd/view"
        target="_blank"
      >
        <img src="/svg/file.svg" /> baixe aqui o PDF
      </a>
    </div>
  );
}
