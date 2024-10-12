
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Utilities/Button";

interface ImageWrapperProps {
  title: string;
  subtitle: string;
  link: string;
  showButton: boolean;
  externalLink: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  title,
  subtitle,
  link,
  showButton,
  externalLink,
}) => {
  return (
    <div className="imageWrapper ">
      <img src={link} alt={title} className="imageWrapper__image overlay" />
      <div className="imageWrapper__overlay">
        <div className="imageWrapper__content">
          <h2 className="imageWrapper__title">{title}</h2>
          <p className="imageWrapper__subtitle">{subtitle}</p>

          {showButton && (
            <Button
              style={"outline"}
              size={"md"}
              externalLink={externalLink}
              content={"Know More"}
            >
              <AiOutlineArrowRight className="button__icon" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWrapper;
