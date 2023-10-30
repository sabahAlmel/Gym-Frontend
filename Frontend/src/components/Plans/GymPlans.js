import React from 'react'
import style from './GymPlans.module.css'
import CheckIcon from '../../assets/images/HomepageImages/checkIcon.png'

const GymPlans = () => {

  const plans = ['Check me!', 'Check me!', 'Check me!', 'Check me!']

  return (
    <>
        <div className={style.gymPlans}>
            <div className={style.gymPlansDescription}>
              <h2 className={style.gymPlanDescriptionTitle}>Unlock Your Fitness Journey with Our Membership Tiers</h2>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>FitStart</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}>$<span className={style.price}>30</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plan}</p>
                </div>
                ))}
              </div>
                <button className={style.gymPlanButton}>Subscribe</button>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>FitPro</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}>$<span className={style.price}>50</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plan}</p>
                </div>
                ))}
              </div>
                <button className={style.gymPlanButton}>Subscribe</button>
            </div>

            <div className={style.gymPlan}>
              <h3 className={style.gymPlanType}>FitElite</h3>
              <p className={style.membership}>Membership</p>
              <h3 className={style.gymPlanPrice}>$<span className={style.price}>80</span> Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img className={style.checkIcon} src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plan}</p>
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