import React from "react";
import cloud from "../assets/cloud.svg";

function Clouds() {
  return (
    <div>
      <div>
        <img
          className="cloud"
          style={{ width: "80px", top: "70%", left: "60%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "80px", top: "80%", left: "80%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "40px", top: "70%", left: "50%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "200px", top: "70%", left: "40%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "4%", top: "80%", left: "80%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "150px", top: "75%", left: "20%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "4%", top: "70%", left: "5%" }}
          src={cloud}
          alt=""
        />
        <img
          className="cloud"
          style={{ width: "90px", top: "70%", left: "60%" }}
          src={cloud}
          alt=""
        />
      </div>
    </div>
  );
}

export default Clouds;
