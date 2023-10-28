import Service from "../../components/ServicesSection/Service";
import style from "./servicesSection.module.css";

function ServicesSection() {
    const fakeServicesData = {}
    
    
  return (
    <section className={style.servicesSection}>
      <h3>Services</h3>
      <section className={style.imagesContainer}>
        <section className={style.heroImageContainer}>
          <section className={style.heroImage}></section>
          <span className={style.heroSectionText}>
            <span className={style.heroTitle}>GYM</span>
            <p>
              Expect a heart-pumping workout that will leave you feeling
              energized and accomplished. Our supportive community of
              like-minded individuals.
            </p>
          </span>
        </section>
          <section className={style.basisFlexContainer}>
            <Service />
        </section>
      </section>
    </section>
  );
}

export default ServicesSection;
