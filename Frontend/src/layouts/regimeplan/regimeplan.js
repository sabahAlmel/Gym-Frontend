import React from "react";
import styles from "./regimeplan.module.css";
import image1 from "../../assets/images/ServicesImages/Rectangle 1.png";
import image2 from "../../assets/images/ServicesImages/Rectangle 1-1.png";
import image3 from "../../assets/images/ServicesImages/Rectangle 1-2.png";
import Regimeplancomponent from "../../components/regimeplan/regimeplansection";



export default function Regimeplansection(props) {
    const isOnDashboard = props.isOnDashboard
    const fakeData = [
        {
            name: "Expert Guidance",
            description:"You'll receive one-on-one guidance from certified trainers who will create and adjust your plan to maximize your results",
            image: image1,
        },
        {
            name: "Ongoing Support",
            description: " Your journey is ongoing, and so is our support. We're here to help you overcome plateaus and achieve your goals.",
            image: image2,
        },
        {
            name: "Real Results",
            description: " Our clients have achieved remarkable results, and you can see their transformations in our success stories.",
            image: image3,
        },
    ];
    return (
        <section className={styles.RegimePlanContainer}>
            <section className={styles.RegimePlanHeader}>
                <h2> {isOnDashboard ? 'Regime Plans' : "Every Meals Counts: A Complete Body-Type Nutrition Guide!" }</h2>
            </section>
            <section className={styles.RegimeplanFlex}>
                {fakeData.map((item, key) => (
                    <Regimeplancomponent
                        key={key}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </section>
        </section>
    );
}

