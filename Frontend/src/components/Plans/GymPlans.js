import React from 'react'
import style from './GymPlans.module.css'
import CheckIcon from '../../assets/images/HomepageImages/checkIcon.png'

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
    <>
        <div className={style.gymPlans}>
            <div className={style.gymPlansDescription}>
              <h2 className={style.gymPlanDescriptionTitle}>Unlock Your Fitness Journey with Our Membership Tiers</h2>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>{plans[0].title}</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}>$<span className={style.price}>{plans[0].price}</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plans[0].feature[i]}</p>
                </div>
                ))}
              </div>
                <button className={style.gymPlanButton}>Subscribe</button>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>{plans[1].title}</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}>$<span className={style.price}>{plans[1].price}</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plans[1].feature[i]}</p>
                </div>
                ))}
              </div>
                <button className={style.gymPlanButton}>Subscribe</button>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>{plans[2].title}</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}><span className={style.price}>${plans[2].price}</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plans[2].feature[i]}</p>
                </div>
                ))}
              </div>
                <button className={style.gymPlanButton}>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default GymPlans