import './style.scss';
export default function MeuCurriculoButton() {
  return (
    <div className="meucurriculobutton">
      <h3>meu currículo</h3>
      <button>
        <img src="/svg/file.svg" /> baixe aqui o PDF
      </button>
    </div>
  );
}
