import React from 'react'
import style from './GymPlans.module.css'
import CheckIcon from '../../assets/images/HomepageImages/checkIcon.png'

const GymPlans = () => {

  const plans = ['Check me!', 'Check me!', 'Check me!', 'Check me!']

  return (
    <>
        <div className={style.gymPlans}>
            <div className={style.gymPlansDescription}>
              <h2 className='gym-plan-description-topic'>Unlock Your Fitness Journey with Our Membership Tiers</h2>
            </div>
            <div className={style.gymPlan}>
              <h3 className='gym-plan-type'>FIT..</h3>
              <h3 className='gym-plan-price'>$.. Per Month</h3>
              <div className={style.check}>
              {plans.map((plan, i) => (
                <div className={style.descriptionArray} key={i}>
                  <img src={CheckIcon} alt='check' />
                  <p className={style.descriptionText}>{plan}</p>
                </div>
                ))}
              </div>
                <button>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default GymPlans