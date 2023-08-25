import React from "react";
import pga from "../assets/pga.png";
import prize from "../assets/prizeLogo.png";

const Prizes = () => {
  return (
    <section>
      <div className="container mb-5">
        <div className="bgGlow">
          <div className="row">
            <div className="col-12 col-lg-5 ppppp">
              <div className="bgGreenGlow prizeLeft">
                <h2 className="sec_title">
                  PRIZES <span></span> <span></span>
                </h2>
                <div className="prizeGap d-flex flex-column justify-content-between align-items-start">
                  <img src={prize} alt="Prize" />
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <p className="k50">$50K</p>
                      <span className="k50Span">USDC</span>
                    </div>
                    <div className="champion">
                      <span>GRAND CHAMPION</span>
                      <p>
                        Plus 3 passes to the next upcoming Solana Breakpoint
                        conference, where you may present your project to the
                        Solana community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="sec_bg purpleGlow h-100 my-auto">
                <div className="mb-5">
                  <div className="usdcText d-flex align-items-center gap-2">
                    <p>$20K</p>
                    <span>USDC</span>
                  </div>
                  <p className="allPara">PUBLIC GOODS AWARD</p>
                  <img className="img-fluid" src={pga} alt="Line" />
                </div>
                <div className="mb-5">
                  <div className="usdcText d-flex align-items-center gap-2">
                    <p>$20K</p>
                    <span>USDC</span>
                  </div>
                  <p className="allPara">UNIVERSITY AWARD</p>
                  <img className="img-fluid" src={pga} alt="Line" />
                </div>
                <div className="mb-5">
                  <div className="usdcText d-flex align-items-center gap-2">
                    <p>$5K</p>
                    <span>USDC</span>
                  </div>
                  <p className="allPara">CLIMATE AWARD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
