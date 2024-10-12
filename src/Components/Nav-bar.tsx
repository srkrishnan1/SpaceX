import { Link } from "react-router-dom";
import Logo from "../Utilities/Logo";
import Pills from "../Utilities/Pills";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollTop = 0;
    scrollY;
    const handleScroll = (): void => {
      const currentScroll: number =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (currentScroll > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`${isHidden ? "hidden" : ""} ${
          isScrolled ? "scrolled" : ""
        } navBar`}
        id="navbar"
      >
        <ul className="navBar__ul">
          <li>
            <Link to="/" aria-label="Go to home page">
              <Logo size={"lg"} color="white" />
            </Link>
          </li>
          <li>
            <span className="navBar__rightContent">
              <div className="hidden md:flex">
                <Pills
                  size={"md"}
                  content={"LAUNCH"}
                  underline={false}
                  link={"/launch"}
                />
                <Pills
                  size={"md"}
                  content={"ROCKETS"}
                  underline={false}
                  link={"rockets"}
                />
              </div>

              <GiHamburgerMenu
                className="menu-icon lg:hidden"
                onClick={toggleModal}
              />
            </span>
          </li>
        </ul>
      </nav>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <AiOutlineClose className="modal__close" onClick={toggleModal} />
            <div className="modal__links">
              <Pills
                size={"md"}
                content={"LAUNCH"}
                underline={false}
                link={"/launch"}
              />
              <Pills
                size={"md"}
                content={"ROCKETS"}
                underline={false}
                link={"rockets"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
