import style from "./servicesSection.module.css";

function ServicesSection() {
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

        <section className={style.serviceImageContainer}>
          <section className={`${style.serviceImage} ${style.gymProducts}`}>
            <section className={`${style.serviceItem} ${style.explore}`}>
              <span>Gym Products</span>
              <button> Explore </button>
            </section>
          </section>
        </section>

        <section className={style.serviceImageContainer}>
          <section
            className={`${style.serviceImage} ${style.personalTraining}`}
          >
            <section className={`${style.serviceItem} ${style.learnMore}`}>
              <span>Personal Training</span>
              <button>Learn More</button>
            </section>
          </section>
        </section>

        <section className={style.serviceImageContainer}>
          <section className={`${style.serviceImage} ${style.regimePlans}`}>
            <section className={`${style.serviceItem} ${style.learnMore}`}>
              <span>Regime Plans</span>
              <button>Learn More</button>
            </section>
          </section>
        </section>
        </section>
      </section>
    </section>
  );
}

export default ServicesSection;
