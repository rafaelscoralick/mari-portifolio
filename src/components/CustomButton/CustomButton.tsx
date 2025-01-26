import './style.scss';

type CustomButtonProps = {
  href: string;
  children: React.ReactNode;
};
export default function CustomButton({ href, children }: CustomButtonProps) {
  return (
    <a className="custombutton" href={href}>
      {children}
    </a>
  );
}
