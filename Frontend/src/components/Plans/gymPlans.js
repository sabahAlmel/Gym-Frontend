import React from 'react'
import checkoutDescription from '/home/abed/git/T04-G5-1st-Frontend/Frontend/src/assets/images/HomepageImages/check-description.png'

export const gymPlans = () => {
  return (
    <>
        <div className='gym-plans'>
            <div className='gym-plan-description'>
              <h2 className='gym-plan-description-topic'>Unlock Your Fitness Journey with Our Membership Tiers</h2>
            </div>
            <div className='gym-plan'>
              <h3 className='gym-plan-type'>FIT{type}</h3>
              <h3 className='gym-plan-price'>${price} Per Month</h3>
              <div className='description-array'>
                <img src={checkoutDescription} />
                <p className='description-text'>This is a test</p>
              </div>
            </div>
            <button>Subscribe</button>
        </div>
    </>
  )
}
