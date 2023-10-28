import style from "./service.module.css";

function Service(props) {
  return (
    <>
      <section className={style.serviceImageContainer}>
        <section className={`${style.serviceImage} ${style.regimePlans}`}>
          <section className={`${style.serviceItem} ${style.learnMore}`}>
            <span>Regime Plans</span>
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
      <section className={style.serviceImageContainer}>
        <section className={`${style.serviceImage} ${style.regimePlans}`}>
          <section className={`${style.serviceItem} ${style.learnMore}`}>
            <span>Regime Plans</span>
            <button>Learn More</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Service;
