import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer__item">©️ SPACEX</li>
        <a href="https://shop.spacex.com/" target="__blank">
          <li className="footer__item">STORE</li>
        </a>
        <a
          href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
          target="__blank"
        >
          <li className="footer__item">PRIVACY POLICY</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
