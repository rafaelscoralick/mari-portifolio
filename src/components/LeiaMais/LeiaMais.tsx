import Modal from '../../Containers/Modal';
import './style.scss';
type LeiaMaisProps = {
  button: React.ReactNode;
  children: React.ReactNode;
};

export default function LeiaMais({ button, children }: LeiaMaisProps) {
  return (
    <div className="leiamais">
      <Modal trigger={button}>{children}</Modal>
    </div>
  );
}
