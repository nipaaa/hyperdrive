import React, { useState } from "react";
import Tabdetails from "../utils/Tabdetails";
import up from "../../assets/chevron-up.png";
import down from "../../assets/chevron-down.png";

const Tracks = () => {
  const [step, setStep] = useState(0);
  const tabs = [
    {
      name: "DEPIN",
      description:
        "DESIGN CRYPTO INCENTIVIZES TO BUILD PHYSICAL INFRASTRUCTURE NETWORKS TO DISRUPT TRADITIONAL INCUMBANTS.",
    },
    {
      name: "Artificial Intelligence",
      description: "COMBINE AI WITH CRYPTO TO ACCELERATE YOUR CRYPTO PRODUCT.",
    },
    {
      name: "DeFi & Payments",
      description:
        "LEAVE TRADITIONAL FINANCE BEHIND. DESIGN NEW DECENTRALIZED APPLICATIONS FOR A MORE OPEN FINANCIAL SYSTEM.",
    },
    {
      name: "GAMING",
      description:
        "CREATE THE FUTURE OF GAMING. SHAPE BLOCKCHAIN-BASED GAMES, NFTS, AND MORE TO ALLOW PLAYERS TO DIRECTLY INTERACT WITH P2P MARKETS.",
    },
    {
      name: "Mobile Consumer dApps",
      description:
        "BUILD THE NEXT GENERATION OF MOBILE WEB PRODUCTS ON CRYPTO TO ONBOARD A BILLION USERS.",
    },
    {
      name: "Infrastructure Businesses",
      description:
        "BUILD THE ROBUST TOOLS AND INFRASTRUCTURE TO POWER DAPPS ACROSS THE SOLANA ECOSYSTEM.",
    },
    {
      name: "DAOS & NETWORK STATES",
      description: "CREATE TOOLS AND FORM PURPOSE-DRIVEN COMMUNITIES.",
    },
  ];
  return (
    <div className="mb-3 track_parent mx-2 mx-lg-0 plus_bg">
      <div className="container sec_bg">
        <div>
          <div className="tracks">
            {tabs.map((tab, index) => (
              <>
                <div
                  key={index}
                  className="track d-flex align-items-center gap-1"
                >
                  <div
                    className={
                      step === index ? "active_border btn_border" : "btn_border"
                    }
                  >
                    <p></p>
                    <p></p>
                  </div>

                  <button
                    className={step === index && "active_btn"}
                    onClick={() => setStep(step === index ? null : index)}
                  >
                    {tab.name}{" "}
                    <img
                      className="d-block d-md-none"
                      src={step === index ? up : down}
                      alt=""
                    />
                  </button>
                  <div
                    className={
                      step === index ? "active_border btn_border" : "btn_border"
                    }
                  >
                    <p></p>
                    <p></p>
                  </div>
                </div>
                <div className="d-block d-md-none">
                  {index === step && (
                    <Tabdetails
                      children1={tab.name}
                      children2={tab.description}
                    />
                  )}
                </div>
              </>
            ))}
          </div>
          {tabs.map((tab, index) => (
            <div className="d-none d-md-block" key={index}>
              {step === index && (
                <Tabdetails children1={tab.name} children2={tab.description} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
