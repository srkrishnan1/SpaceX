import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";

interface NavBtnProps {


  onLeftClick: (index: number) => void;
  onRightClick: (index: number) => void;
}

const NavButtons: React.FC<NavBtnProps> = ({

  
  onLeftClick,
  onRightClick,
}) => {
  return (
    <div className="navBtnsGroup">
      <button className="navBtnsGroup__navBtn" onClick={() => onLeftClick(2)}>
        {<MdChevronLeft />}
      </button>
      <button className="navBtnsGroup__navBtn" onClick={() => onRightClick(1)}>
        {<MdChevronRight />}
      </button>
    </div>
  );
};

export default NavButtons;
