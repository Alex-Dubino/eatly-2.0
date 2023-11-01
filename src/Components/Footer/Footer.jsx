import "./Footer.scss"
import logo from "../assets/logo.svg";
import insta from "../assets/insta.svg";
import inn from "../assets/inn.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer_body">
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="#" />
            <a href="#">eatly</a>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#" className="footer-menu-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-leftitem">
            <span>© 2023 EATLY All Rights Reserved.</span>
          </div>
          <div className="footer-bottom-rightitem">
            <img src={insta} alt="#" />
            <img src={inn} alt="#" />
            <img src={facebook} alt="#" />
            <img src={twitter} alt="#" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
