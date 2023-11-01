import "./Main.scss";
import phone from "../assets/phone.svg";
import arrow2 from "../assets/Arrow 2.svg";
import arrow3 from "../assets/Arrow 3.svg";
import arrow4 from "../assets/Arrow 4.svg";
import chicken from "../assets/chicken.svg";
import burger from "../assets/burger.svg";
const Main = () => {
  return (
    <div className="main_body">
      <div className="install">
        <div className="install__item">
          <h3 className="install__item-title">10K+</h3>
          <p className="install__item-text">
            Satisfied Costumers All Great Over The World
          </p>
        </div>
        <div className="install__item">
          <h3 className="install__item-title">4M</h3>
          <p className="install__item-text">
            Healthy Dishes Sold Including Milk Shakes Smooth
          </p>
        </div>
        <div className="install__item">
          <h3 className="install__item-title">99.99%</h3>
          <p className="install__item-text">
            Reliable Customer Support We Provide Great Experiences
          </p>
        </div>
      </div>
      <div className="premium">
        <div className="premium-images">
          <img src={phone} alt="#" />
        </div>
        <div className="premium-item">
          <div className="premium-item-title">
            Premium <span>Quality</span> For Your Health
          </div>
          <ul className="premium-item-list">
            <li className="premium-item-list__item">
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li className="premium-item-list__item">
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <div className="premium-item-btn">
            <a href="#">Download</a>
            <img src={arrow3} alt="#" />
          </div>
          <img className="arrow2" src={arrow2} alt="#" />
        </div>
      </div>
      <div className="restaurants">
        <h2 className="restaurants-title">
          Our Top <span>Restaurants</span>
        </h2>
        <div className="restaurants-container">
          <div className="restaurants__item">
            <div className="restaurants__item-head">
              <img src={chicken} alt="#" />
            </div>
            <div className="restaurants__item-body">
              <div className="highlight">
                <span>Healthy</span>
              </div>
              <div className="restaurants__item-body-title">
                <h6>The Chicken King</h6>
              </div>
            </div>
            <div className="restaurants__item-bottom">
              <div className="restaurants__item-bottom-left">
                <span className="time">24min •</span>
                <div className="results">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
                      fill="#6C5FBC"
                    />
                  </svg>
                  <span>4.8</span>
                </div>
              </div>
              <div className="restaurants__item-bottom-right">
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6171 0.884421C9.71556 0.397983 6.73762 0.397983 3.83606 0.884421C2.77602 1.06213 1.93183 1.87593 1.71928 2.93112C0.745572 7.76512 0.692444 12.7394 1.56268 17.5931L1.91699 19.5692C2.02624 20.1785 2.76908 20.4221 3.21789 19.9957L7.49455 15.9329C7.90477 15.5432 8.54841 15.5432 8.95864 15.9329L13.2353 19.9957C13.6841 20.4221 14.4269 20.1785 14.5362 19.5692L14.8905 17.5931C15.7607 12.7394 15.7076 7.76511 14.7339 2.93112C14.5214 1.87593 13.6772 1.06213 12.6171 0.884421Z"
                    fill="#6C5FBC"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="restaurants__item">
            <div className="restaurants__item-head">
              <img src={burger} alt="#" />
            </div>
            <div className="restaurants__item-body">
              <div className="highlight2">
                <span>Trending</span>
              </div>
              <div className="restaurants__item-body-title">
                <h6>The Burger King</h6>
              </div>
            </div>
            <div className="restaurants__item-bottom">
              <div className="restaurants__item-bottom-left">
                <span className="time">24min •</span>
                <div className="results">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
                      fill="#6C5FBC"
                    />
                  </svg>
                  <span>4.9</span>
                </div>
              </div>
              <div className="restaurants__item-bottom-right">
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6171 0.884421C9.71556 0.397983 6.73762 0.397983 3.83606 0.884421C2.77602 1.06213 1.93183 1.87593 1.71928 2.93112C0.745572 7.76512 0.692444 12.7394 1.56268 17.5931L1.91699 19.5692C2.02624 20.1785 2.76908 20.4221 3.21789 19.9957L7.49455 15.9329C7.90477 15.5432 8.54841 15.5432 8.95864 15.9329L13.2353 19.9957C13.6841 20.4221 14.4269 20.1785 14.5362 19.5692L14.8905 17.5931C15.7607 12.7394 15.7076 7.76511 14.7339 2.93112C14.5214 1.87593 13.6772 1.06213 12.6171 0.884421Z"
                    fill="#6C5FBC"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="restaurants__item">
            <div className="restaurants__item-head">
              <img src={chicken} alt="#" />
            </div>
            <div className="restaurants__item-body">
              <div className="highlight">
                <span>Healthy</span>
              </div>
              <div className="restaurants__item-body-title">
                <h6>The Chicken King</h6>
              </div>
            </div>
            <div className="restaurants__item-bottom">
              <div className="restaurants__item-bottom-left">
                <span className="time">24min •</span>
                <div className="results">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.91519 0.741543C8.23645 -0.247181 9.63523 -0.247181 9.95649 0.741543L11.1043 4.2742C11.248 4.71637 11.66 5.01575 12.125 5.01575H15.8394C16.879 5.01575 17.3113 6.34607 16.4702 6.95713L13.4652 9.14044C13.089 9.41371 12.9316 9.89811 13.0753 10.3403L14.2231 13.8729C14.5444 14.8617 13.4128 15.6838 12.5717 15.0728L9.56663 12.8895C9.1905 12.6162 8.68118 12.6162 8.30504 12.8895L5.29998 15.0728C4.45893 15.6838 3.32729 14.8617 3.64855 13.8729L4.79638 10.3403C4.94005 9.89811 4.78266 9.41371 4.40652 9.14044L1.40146 6.95713C0.560407 6.34607 0.992654 5.01575 2.03226 5.01575H5.74672C6.21164 5.01575 6.62369 4.71637 6.76736 4.2742L7.91519 0.741543Z"
                      fill="#6C5FBC"
                    />
                  </svg>
                  <span>4.8</span>
                </div>
              </div>
              <div className="restaurants__item-bottom-right">
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6171 0.884421C9.71556 0.397983 6.73762 0.397983 3.83606 0.884421C2.77602 1.06213 1.93183 1.87593 1.71928 2.93112C0.745572 7.76512 0.692444 12.7394 1.56268 17.5931L1.91699 19.5692C2.02624 20.1785 2.76908 20.4221 3.21789 19.9957L7.49455 15.9329C7.90477 15.5432 8.54841 15.5432 8.95864 15.9329L13.2353 19.9957C13.6841 20.4221 14.4269 20.1785 14.5362 19.5692L14.8905 17.5931C15.7607 12.7394 15.7076 7.76511 14.7339 2.93112C14.5214 1.87593 13.6772 1.06213 12.6171 0.884421Z"
                    fill="#6C5FBC"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="view">
          <a href="#">View All</a>
          <img src={arrow4} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Main;
