import { Link } from "react-router-dom";
import style from "./service.module.css";

function Service(props) {
  const { name, image, path } = props;
  return (
    <>
      <section className={style.serviceImageContainer}>
        <section
          className={style.serviceImage}
          style={{ backgroundImage: `url(${image})` }}
        >
          <section className={`${style.serviceItem} ${style.learnMore}`}>
            <span>{name}</span>
            <Link
              className={style.serviceLink}
              to={`services/#${path}`}
              preventScrollReset={false}
            >
              {name === "Gym Products" ? "Explore" : "Learn More"}
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default Service;
