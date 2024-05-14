import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor:'grey'}}>
        <div className="link">
          <div className="links">
            <h1>Follow Me</h1>
            <p>Linkdin</p>
            <p>Github</p>
          </div>
          <div className="links">
            <h1>Contact Me</h1>
            <p><strong>Address: </strong>Siwan, Bihar</p>
            <p><strong>Mobile num:</strong>+983884</p>
          </div>
          <div className="links">
            <h1>Your Querry</h1>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Name" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
