import React from "react";
import HeroContactUs from "../../components/HeroContact/HeroContactUs";
import FormContactUs from "../../components/FormContactUs/FormContactUs";
import { Helmet } from "react-helmet-async";
import icon from "../../assets/icons/icon1.svg"

function ContactUs() {
  return (
    <>
     <Helmet>
    <title> Contact Us</title>

    {/* <link rel="stylesheet" href={icon}></link> */}
    <link rel="shortcut icon" href={icon} type="image/x-icon" />

    </Helmet>
      <HeroContactUs />
      <div className="contactUsWrapper">
        <FormContactUs />
      </div>
    </>
  );
}

export default ContactUs;
