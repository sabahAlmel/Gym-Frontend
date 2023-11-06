import React, {useEffect, useState} from "react";
import styles from "./regimeplan.module.css";
// import image1 from "../../assets/images/ServicesImages/Rectangle 1.png";
// import image2 from "../../assets/images/ServicesImages/Rectangle 1-1.png";
// import image3 from "../../assets/images/ServicesImages/Rectangle 1-2.png";
import { fetchRegime } from "../../db/regimeData";
import Regimeplancomponent from "../../components/regimeplan/regimeplansection";

const RegimePlans = ()=> { 
    const [regimePlans , setRegimePlans] = useState([]);
    async function fetchData(){
        try{
            const data = await fetchRegime()
        if (data){
            setRegimePlans(data.data);
        }else{
        }
        }catch(error){
            console.log(error)
        }
    }
    useEffect( ()=>{
        fetchData()
    },[]);
    return (
        <section className={styles.RegimePlanContainer}>
            <section className={styles.RegimePlanHeader}>
                <h2> Every Meals Counts: A Complete Body-Type Nutrition Guide!</h2>
            </section>
            <section className={styles.RegimeplanFlex}>
                {
                regimePlans.map((item, key) => (
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
export default RegimePlans;
