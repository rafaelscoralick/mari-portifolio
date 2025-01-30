import { IProjectsListItem, Side } from '../../types/types';
import Project from './ProjectsListItem';
import './style.scss';
export default function ProjectsList() {
  const data: IProjectsListItem[] = [
    {
      name: 'younail',
      logoProject: '/younail-icon.png',
      description:
        'Encontre a manicure perfeita para fazer sua unha igual aquela imagem que você salvou em sua galeria.',
      imageMockup: '/mockup1.png',
      backgroundImage: '/bg-younail.png',
      icons: [
        {
          icon: '/icon-mobile.png',
          legend: 'Mobile',
        },
        {
          icon: '/icon-agendamento.png',
          legend: 'Agendamento',
        },
        {
          icon: '/icon-manicure.png',
          legend: 'Manicure',
        },
      ],
      side: Side.Left,
    },
    {
      name: 'hbparceiros',
      logoProject: '/honey-icon.png',
      description:
        'Painel para programa de afiliados, acompanhamento de vendas, pagamento de comissão e capacitação em marketing digital.',
      imageMockup: '/mockup2.png',
      backgroundImage: '/bg-hb-parceiros.png',
      icons: [
        {
          icon: '/svg/web.svg',
          legend: 'web',
        },
        {
          icon: '/svg/moda.svg',
          legend: 'ecommerce moda',
        },
        {
          icon: '/svg/vendas.svg',
          legend: 'painel vendas',
        },
      ],
      side: Side.Right,
    },
    {
      name: 'shopee',
      logoProject: '/shopee-icon.png',
      description:
        'Redesign do fluxo de Carrinho e Checkout do aplicativo de varejo eletrônico Shopee.',
      imageMockup: '/mockup3.png',
      backgroundImage: '/bg-shopee.png',
      icons: [
        {
          icon: '/icon-mobile.png',
          legend: 'mobile',
        },
        {
          icon: '/svg/ecommerce.svg',
          legend: 'ecmomerce',
        },
        {
          icon: '/svg/pagamentos.svg',
          legend: 'pagamento',
        },
      ],
      side: Side.Left,
    },
  ];

  return (
    <div className="projectslist">
      <h2>Projetos</h2>
      <div className="projectslist-items">
        {data.map((item, index) => (
          <div key={index} id={item.name}>
            <Project {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
