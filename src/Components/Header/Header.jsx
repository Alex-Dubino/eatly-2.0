import "./Header.scss";
import star from "../assets/star.svg";
import trustpilot from "../assets/trustpilot.svg";
import arrow1 from "../assets/Arrow 1.svg";
import Graph from "../assets/Graph.svg";
import Illustration1 from "../assets/Illustration 1.svg";
import Illustration2 from "../assets/Illustration 2.svg";
import plate from "../assets/plate.png";
import plateComment from "../assets/plate comment.svg";
import logo from "../assets/logo.svg"
const Header = () => {
  return (
    <>
      <div className="header_body">
        <nav className="navigation">
          <div className="container">
            <div className="nav__logo">
              <img src={logo} alt="logo" />
              <a href="#">eatly</a>
            </div>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="nav__menu">
              <ul className="menu__list">
                <li>
                  <a href="#" className="menu__list-link">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="menu__list-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="menu__list-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="menu__list-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav__btn">
              <a href="#" className="login">
                Login
              </a>
              <a href="#" className="sign-up">
                Sign up
              </a>
            </div>
          </div>
        </nav>
        <header className="hero">
          <div className="hero__leftitem">
            <div className="hero-title">
              <h2>OVER 1000 USERS</h2>
            </div>
            <div className="hero-text">
              <p>
                Enjoy Foods All Over The <span>World</span>
              </p>
            </div>
            <div className="hero-subtext">
              <p>
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a <span>$20 bonus</span>.
              </p>
            </div>
            <div className="hero-btn">
              <div className="hero-btn-start">Get Started</div>
              <div className="hero-btn-pro">Go Pro</div>
            </div>
            <div className="hero-results">
              <div className="hero-results-icon">
                <img src={trustpilot} alt="#" />
              </div>
              <div className="hero-results-star">
                <img src={star} alt="#" />
                <img src={star} alt="#" />
                <img src={star} alt="#" />
                <img src={star} alt="#" />
                <img src={star} alt="#" />
                <span>4900+</span>
              </div>
            </div>
          </div>
          <div className="hero__rightitem">
            <div className="hero__rightitem-comment">
              <div className="hero-comment">
                <div className="comment-icon">
                  <img src={plateComment} alt="#" />
                </div>
                <div className="comment-text">
                  <div className="comment-title">
                    <span>Chicken Hell</span>
                  </div>
                  <div className="comment-subtitle">
                    <span>On The Way</span>
                  </div>
                </div>
              </div>
              <div className="comment-time">
                <span>3:09 PM</span>
              </div>
            </div>
            <div className="hero__rightitem-images">
              <img className="arrow1" src={arrow1} alt="#" />

              <img className="Illustration1" src={Illustration1} alt="#" />

              <img className="plate" src={plate} alt="#" />
              <img className="Graph" src={Graph} alt="#" />
              <img className="Illustration2" src={Illustration2} alt="#" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
