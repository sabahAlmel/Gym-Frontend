import React, { useEffect, useState } from "react";
import GymPlanCard from "../../../components/GymPlan/GymPlanCard";
import { fetchGymPlans } from "../../../db/gymPlansData";
import style from "./DashGymPlanLayout.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { GymPlansModal } from "../../../components/GymPlan/GymPlansModal/GymPlansModal";

function DashGymPlanLayout() {
  const [gymPlans, setGymPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  async function fetchData() {
    try {
      const data = await fetchGymPlans();
      if (data) {
        setGymPlans(data.data);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function openModal() {
    setIsModalOpen(true);
    console.log("openModal");
  }

  return (
    <div className={style.productsSection}>
      {isModalOpen ? (
        <GymPlansModal setIsModalOpen={setIsModalOpen} fetchData={fetchData} />
      ) : (
        ""
      )}
      <h2 className={style.productsTitle}>Plan</h2>
      <div className={style.product}>
        <div className={style.addProductCard} onClick={() => openModal()}>
          <section className={style.addButton}>
            <AiOutlinePlus className={style.plusIcon} />
          </section>
          <span className={style.addButtonText}>Add a Gym Plan</span>
        </div>
        {isLoading ? (
          <p>Loading.....</p>
        ) : (
          gymPlans.map((plan, i) => (
            <GymPlanCard
              title={plan.title}
              price={plan.price}
              key={i}
              feature={plan.feature}
              id={plan._id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default DashGymPlanLayout;
