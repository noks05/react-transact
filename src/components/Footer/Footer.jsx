/* eslint-disable react/prop-types */
import Lang from "../Lang/Lang";
import Logo from "../Logo/Logo";
import "./footer.css";

function Footer() {
  return (
      <div className="footer">
          <div className="footer__top">
              <div className="footer__logo">
                <Logo />
                <span>Pay smarter</span>
              </div>

              <div className="footer__contacts">
                <ul className="list-reset">
                  <li>
                    <span>Telegram bot</span>
                    <a className="link" href="#">@cosmomoll</a>
                  </li>
                  <li>
                    <span>Support email</span>
                    <a className="link" href="mailto:cosmomoll@gmail.com">cosmomoll@gmail.com</a>
                  </li>
                </ul>
              </div>

              <div className="footer__docs">
                <a className="link" href="#">About Cosmomoll</a>
                <a className="link" href="#">Documentation</a>
                <a className="link" href="#">Privacy Policy</a>
                <a className="link" href="#">Terms of Use</a>
              </div>
          </div>

          <div className="footer__bottom">
            <span className="footer__descr">2024 Cosmomoll ™</span>

            <Lang />
          </div>
        </div>
  );
}

export default Footer;
