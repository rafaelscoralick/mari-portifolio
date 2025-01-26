import MeuCurriculoButton from '../MeuCurriculoButton';
import './style.scss';
export default function MeuCurriculo() {
  const competences = [
    'Design centrado no usuário',
    'UX research',
    'Métricas',
    'Pesquisa quantitativa',
    'Pesquisa qualitativa',
    'Benchmarking',
    'Análise de dados',
    'Mapeamento jornada do usuário',
    'Ideação',
    'Wireframing',
    'Prototipagem',
    'Responsividade',
    'Testes de usabilidade',
    'Handoff',
    'Design system',
    'Acessibilidade',
    'IA',
    'Metodologia ágil',
    'Trabalho em equipe',
    'Hands on',
  ];

  return (
    <div className="meucurriculo">
      <div className="inner">
        <MeuCurriculoButton />
        <h3>competências</h3>
        <ul>
          {competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
