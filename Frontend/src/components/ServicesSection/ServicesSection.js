import servicesHero from "../../assets/images/HomepageImages/ServicesHero.png";
import personalTraining from "../../assets/images/HomepageImages/PersonalTraining.png";
import gymProducts from "../../assets/images/HomepageImages/GymProducts.png";
import RegimePlans from "../../assets/images/HomepageImages/RegimePlans.png";
import style from "./servicesSection.module.css";

function ServicesSection() {
  return (
    <section className={style.servicesSection}>
      <h3>Services</h3>
      <section className={style.imagesContainer}>
        <section className={style.heroImageContainer}>

        <section className={style.heroImage}>
        </section>
          <span className={style.heroSectionText}>
            <span className={style.heroTitle}>GYM</span>
            <p>
              Expect a heart-pumping workout that will leave you feeling
              energized and accomplished. Our supportive community of
              like-minded individuals.
            </p>
          </span>
        </section>
        <section className={style.serviceImage}></section>
        <section className={style.serviceImage}></section>
        <section className={style.serviceImage}></section>
      </section>
    </section>
  );
}

export default ServicesSection;
