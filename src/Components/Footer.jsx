import React from "react";
import "../Assests/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";

const Footer = () => {
  return (
    <footer>
      <div className="footer_left">
        <div className="footer_navigation">
          <ul>
            <li>About Disney+ Hotstar</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Feedback</li>
            <li>Careers</li>
          </ul>
        </div>
        <p>
          © 2022 STAR. All Rights Reserved. Hotstar Clone, and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Hotstar Clone,
          Inc. All rights reserved.
        </p>
      </div>
      <div className="footer_right">
        <div className="social_media">
          <p>Connect With Us</p>
          <div className="social_icons">
            <div className="icon">
              <FacebookIcon
                style={{
                  fontSize: "40px",
                }}
              />
            </div>
            <div className="icon">
              <InstagramIcon
                style={{
                  fontSize: "40px",
                }}
              />
            </div>
            <div className="icon">
              <TwitterIcon
                style={{
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="hotstar_app">
          <p>Disney+ Hotstar App</p>
          <div className="available_on">
            <div className="store">
              <div className="icon">
                <AppleIcon style={{ fontSize: "40px" }} />
              </div>
              <div className="info">
                <p>Get it on</p>
                <p>Google Play</p>
              </div>
            </div>
            <div className="store">
              <div className="icon">
                <AppleIcon style={{ fontSize: "40px" }} />
              </div>
              <div className="info">
                <p>Download on the</p>
                <p>App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
