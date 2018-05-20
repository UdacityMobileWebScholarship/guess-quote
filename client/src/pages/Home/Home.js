import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import quote from "./quotes.svg";
import "./Home.css";

class Home extends PureComponent {
  static displayName = "Home";

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="column">
            <div className="title">
              Think you can guess?<br />
              Then try to
            </div>

            <div className="logo">
              <img src={quote} className="quote-1" alt="quote" />
              <div className="capsule">Guess</div>
              <br />
              <div className="capsule back">the</div>
              <br />
              <div className="capsule front">Quote!</div>
              <img src={quote} className="quote-2" alt="quote" />
            </div>
          </div>

          <div className="column controls">
            <Link to="/quiz" className="button primary">
              Let&apos;s play
            </Link>
            <br />
            <Link to="/how-to-play" className="button" style={{ width: "70%" }}>
              How to Play
            </Link>
            <br />
            <a className="button" style={{ width: "55%" }}>
              Account
            </a>
            <br />
            <a
              href="https://github.com/UdacityMobileWebScholarship/guess-quote"
              className="button github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon ion-logo-github" />
            </a>
          </div>
        </div>

        <div className="footer">
          <a
            href="https://github.com/UdacityMobileWebScholarship/guess-quote/issues/new"
            rel="noopener noreferrer"
            target="_blank"
          >
            Report a bug
          </a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
    );
  }
}

export default Home;
