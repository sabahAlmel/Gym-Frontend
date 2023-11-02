import React from "react";
import FooterCss from "./Footer.module.css";

function Footer() {
  return (
    <footer className={FooterCss.footer}>
      <div className={FooterCss.footerContainer}>
        <div className={FooterCss.logo}>
          <a href="#logo" className={FooterCss.logoo}>
           
          </a>
          <p className={FooterCss.firstPara}>
            FIT<span className={FooterCss.firstSpan}>HUB</span>
          </p>
        </div>
        <div className={FooterCss.description}>
          <p className={FooterCss.secondPara}>
            Build strength and confidence at our gym with state-of-the-art
            equipment, personalized training, and a motivating community
          </p>
        </div>
        <div className={FooterCss.address}>
          <h4 className={FooterCss.adressh4}>Address</h4>
          <p className={FooterCss.p3}>Republic of Belarus</p>
          <p className={FooterCss.p3}>Minsk city</p>
          <p className={FooterCss.p3}>Dzerzhinsky Avenue 15</p>
        </div>
        <div className={FooterCss.contact}>
          <h4 className={FooterCss.adressh4}>Contact</h4>
          <div>
            <div className={FooterCss.phone}>
              <a
                href="link to phone"
                target="-blank"
                className={FooterCss.email}
              ></a>
              <span className={FooterCss.span}>+375(44)-777-24-12</span>
            </div>
            <div className={FooterCss.phone}>
              <a
                href="link to message"
                target="-blank"
                className={FooterCss.email}
              ></a>
              <span className={FooterCss.span}>gym24@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={FooterCss.follow}>
          <h4 className={FooterCss.followUs}>Follow Us</h4>
          <div className={FooterCss.socialIcon}>
            <a
              href="link to instagram"
              target="-blank"
              className={FooterCss.icon}
            ></a>
            <a
              href="link to facebook"
              target="-blank"
              className={FooterCss.icon}
            ></a>
            <a
              href="link to twitter"
              target="-blank"
              className={FooterCss.icon}
            ></a>
            <a
              href="link to youtybe"
              target="-blank"
              className={FooterCss.icon}
            ></a>
          </div>
        </div>
      </div>
      <div className={FooterCss.copyRight}>
        <p>&copy;FITHUB 2023.All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
