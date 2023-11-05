import style from '../../components/Plans/GymPlan.module.css'
import GymPlan from '../../components/Plans/GymPlan'
import React, { useState, useEffect } from 'react';
import { fetchGymPlans } from '../../db/gymPlansData'; 


const GymPlans = () => {
  const [loading, setLoading] = useState(true);
  const [plans, setplans] = useState([]);
  console.log('Fetched Plans:', plans);


 
  async function fetchData(){
      try {
        const response = await fetchGymPlans();
        if (response) {
          console.log(response);
          setplans(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);  
      }}
    
      useEffect(() => {
      fetchData();
    }, []);


  return (
    <div className={style.gymPlans}>
      <div className={style.gymPlan}>
        <div className={style.gymPlansDescription}>
          <h3 className={style.gymPlanDescriptionTitle}>Unlock Your Fitness Journey with Our Membership Tiers</h3>
        </div>
        {!loading ? 
        plans.map((plan, key) => (
          <GymPlan key={key} title={plan.title} price={plan.price} plans={plan.feature} />
        )):'loading...'
        }
      </div>
    </div>
  );
};

export default GymPlans;