import React from "react";
import solana from "../assets/solanaLogo.png";
import bottom from "../assets/heroBottomLeft.png";
import line from "../assets/half-line.png";

const Banner = () => {
  return (
    <section className="mx-2 mx-lg-0">
      <div className="container sec_bg p-0 mb-5">
        <div className="hero">
          <div className="heroInner mx-auto text-center">
            <img
              className="d-block mx-auto mb-3"
              src={solana}
              alt="Solana Logo"
            />
            <h1>HYPERDRIVE</h1>
            <span className="heroSpan mb_40">GLOBAL ONLINE HACKATHON</span>
            <p className="heroPara mb_40">
              Join the Hyperdrive Hackathon and compete online to launch the
              <br className="d-none d-lg-block" /> next big Web3 startup on the
              Solana blockchain.
            </p>

            <div className="timeClock  mb_40 d-flex justify-content-center align-items-center gap-3">
              <div className="d-flex align-items-center gap-1 gap-lg-2 text-center">
                <p>09</p>
                <div className="greenDots"></div>
                <p>01</p>
                <div className="greenDots"></div>
                <p>2023</p>
              </div>
              <div className="d-flex align-items-center gap-1 gap-lg-2 text-center">
                <div className="greenLine"></div>
                <div className="greenDots"></div>
                <div className="greenDots"></div>
              </div>
              <div className="d-flex align-items-center gap-1 gap-lg-2 text-center">
                <p>09</p>
                <div className="greenDots"></div>
                <p>01</p>
                <div className="greenDots"></div>
                <p>2023</p>
              </div>
            </div>
            <span className="d-inline-block">
              <div className="joinHeroBtn conerHeroBtn">
                <span className="d-inline-block heroDarkLine"></span>
                <a href="#">JOIN NOW</a>
              </div>
            </span>
          </div>
        </div>
        <div className="bottomHeroSolana d-flex align-items-center justify-content-center gap-2">
          <img className="d-none d-lg-block" src={bottom} alt="Left" />
          <img className="d-block d-lg-none" src={line} alt="Left" />
          <span className="installer_292"> // 921-21964-423 // SOLANA_320</span>
          <img className="d-none d-lg-block" src={bottom} alt="Left" />
          <img className="d-block d-lg-none" src={line} alt="Left" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
