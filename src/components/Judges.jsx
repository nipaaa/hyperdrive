import React from "react";
import Title from "./utils/Title";
import man from "../assets/man.png";
import bottom from "../assets/heroBottomLeft.png";
import line from "../assets/half-line.png";

const Judges = () => {
  const judgeslist = [
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
    {
      pic: man,
      name: "ANATOLY YAKOVENKO",
      designation: "Co-founder Solana Labs",
    },
  ];
  return (
    <div className="judges mb-5 mx-2 mx-lg-0">
      <div className="container sec_bg">
        <Title>JUDGES</Title>
        <div className="row">
          {judgeslist.map((judge, index) => (
            <div className="judge_card col-6 col-lg-2" key={index}>
              <img className="img-fluid w-100" src={judge.pic} alt="" />
              <h6>{judge.name}</h6>
              <p>{judge.designation}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ marginTop: "-16px" }}
        className="bottomHeroSolana d-flex align-items-center justify-content-center gap-2"
      >
        <img className="d-none d-lg-block mb-0" src={bottom} alt="Left" />
        <img className="d-block d-lg-none mb-0" src={line} alt="Left" />
        <span className="installer_292"> // 921-21964-423 // SOLANA_320</span>
        <img className="d-none d-lg-block mb-0" src={bottom} alt="Left" />
        <img className="d-block d-lg-none mb-0" src={line} alt="Left" />
      </div>
    </div>
  );
};

export default Judges;
