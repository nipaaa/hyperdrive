import React from "react";
import portalgreen from "../assets/portal-green.png";
import portal from "../assets/portal.png";
import tensor from "../assets/tensor.png";
import mango from "../assets/mango.png";
import dialect from "../assets/dialect.png";
import tiplink from "../assets/tiplink.png";
import jitolab from "../assets/tiplink.png";
import marinade from "../assets/marinade.png";
import hubble from "../assets/hubble.png";

const Support = () => {
  const supporters = [
    {
      pic: portalgreen,
    },
    {
      pic: tensor,
    },
    {
      pic: mango,
    },
    {
      pic: dialect,
    },
    {
      pic: portal,
    },
    {
      pic: tensor,
    },
    {
      pic: mango,
    },
    {
      pic: dialect,
    },
    {
      pic: jitolab,
    },
    {
      pic: marinade,
    },
    {
      pic: hubble,
    },
    {
      pic: tiplink,
    },
    {
      pic: jitolab,
    },
    {
      pic: marinade,
    },
    {
      pic: hubble,
    },
    {
      pic: tiplink,
    },
  ];
  return (
    <div className="support plus_bg">
      <div className="container">
        <h1>WITH SUPPORT FROM</h1>
        <div className="row">
          {supporters.map((supporter, index) => (
            <div className="support_card col-4 col-lg-3" key={index}>
              <img className="img-fluid" src={supporter.pic} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
