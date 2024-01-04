import Service from "../../components/Services/Service";
import style from "./servicesSection.module.css";
import gymProducts from "../../assets/images/HomepageImages/GymProducts.png";
import personalTraining from "../../assets/images/HomepageImages/PersonalTraining.png";
import regimePlans from "../../assets/images/HomepageImages/RegimePlans.png";

function ServicesSection() {
  const ServicesData = [
    {
      name: "Gym Products",
      image: gymProducts,
      path: "products",
    },
    {
      name: "Personal Training",
      image: personalTraining,
      path: "training",
    },
    {
      name: "Regime Plans",
      image: regimePlans,
      path: "regimePlans",
    },
  ];

  return (
    <section className={style.servicesSection}>
      <h2>Services</h2>
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
          {ServicesData.map((item, key) => (
            <Service
              key={key}
              name={item.name}
              image={item.image}
              path={item.path}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default ServicesSection;
