import React from "react";
import HeroContactUs from "../../components/HeroContact/HeroContactUs";
import FormContactUs from "../../components/FormContactUs/FormContactUs";
function ContactUs() {
  return (
    <>
      <HeroContactUs />
      <div className="contactUsWrapper">
        <FormContactUs />
      </div>
    </>
  );
}

export default ContactUs;
