import style from "./service.module.css";

function Service(props) {
  const {name, image} = props
  console.log(image)
  return (
    <>
      <section className={style.serviceImageContainer}>
        <section className={style.serviceImage} style={{backgroundImage : `url(${image})`}}>
          <section className={`${style.serviceItem} ${style.learnMore}`}>
            <span>{name}</span>
            <button>{name === 'Gym Products' ? "Explore" : "Learn More"}</button>
          </section>
        </section>
      </section>
      
    </>
  );
}

export default Service;
