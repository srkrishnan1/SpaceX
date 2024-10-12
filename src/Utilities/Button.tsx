//Custom button component which have two differnt style border and outline
import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  style: string;
  size: string;
  externalLink: string;
  content: string;
  children?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  style,
  size,
  content,
  children,
  externalLink,
}) => {
  return (
    <Link to={externalLink} aria-label={content}>
      <button className={`button button--${style} button--${size} group`}>
        <span className="button__text">{content}</span>
        <span className="button__fill__wrapper"></span>
        {children && <span className="button__icon">{children}</span>}
      </button>
    </Link>
  );
};

export default Button;
