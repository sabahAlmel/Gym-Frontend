import React from 'react'
import style from '../../components/Plans/GymPlan.module.css'
import GymPlan from '../../components/Plans/GymPlan'

const GymPlans = () => {

  const plans = [
    {
      title: 'FitStart',
      price: 30,
      feature: [
        'Full access to our gym facilities during regular hours',
        'Use of all cardio and strength training equipment',
        'Month-to-month flexibility - no long-term commitment'
      ]
    },
    {
      title: 'FitPro',
      price: 50,
      feature: [
        'FitStart  Membership',
        'Use of the gym during extended hours',
        'Priority booking for personal training sessions'
      ]
    },
    {
      title: 'FitElite',
      price: 80,
      feature: [
        'FitPro  Membership',
        'Priority access to all gym facilities and equipment',
        'Unlimited access to all specialty classes, workshops, and events',
        'Free monthly one-on-one session with a certified personal trainer'
      ]
    }
  ]

  return (

    <div className={style.gymPlans}>
      <div className={style.gymPlan}>
        <div className={style.gymPlansDescription}>
          <h3 className={style.gymPlanDescriptionTitle}>Unlock Your Fitness Journey with Our Membership Tiers</h3>
        </div>
          {
            plans.map((plan, key) => (
              <GymPlan key={key} title={plan.title} price={plan.price} plans={plans} />
            ))
          }
      </div>
    </div>
  )
}

export default GymPlans