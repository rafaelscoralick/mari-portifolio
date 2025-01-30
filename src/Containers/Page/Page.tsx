import LinksPraContato from '../../components/LinksPraContato';
import './style.scss';
type PageProps = {
  children: React.ReactNode;
};
export default function Page({ children }: PageProps) {
  return (
    <div className="page">
      {children}

      <div className="desktop-only">
        <LinksPraContato />
      </div>
    </div>
  );
}
