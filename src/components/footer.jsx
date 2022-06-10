import React from "react";
import jerry from "../assets/meme.jpg";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "400px",
        backgroundColor: "#1B242F",
        marginTop: "100px",
      }}
    >
      <img src={jerry} style={{ width: "300px", marginTop: "50px" }} alt="" />
      <p style={{ color: "white", marginTop: "20px" }}>
        Zuhayer Adnan Siddique ©
      </p>
    </div>
  );
}

export default Footer;
