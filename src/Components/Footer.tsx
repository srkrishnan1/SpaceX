//Footer for the whole website

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer__item">©️ SPACEX</li>

        <li className="footer__item">
          <a href="https://shop.spacex.com/" target="__blank">
            STORE{" "}
          </a>
        </li>

        <li className="footer__item">
          <a
            href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
            target="__blank"
          >
            PRIVACY POLICY
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
