import style from './Portfoliotestimonials.module.css'

function PortfolioTestimonials() {
  return (
    <section className={style.portfolioTestimonials}>
      <h2>What Our Members Are Saying</h2>
      <section className={style.testimonialsContainer}>
        <section className={style.testimonial}>
        <section className={style.testimonialContentWrapper}>
          <p>
            "I've been a member of FitHub for over a year now, and I absolutely
            love it! The staff is friendly and knowledgeable, and the facilities
            are top-notch. I've seen amazing results since joining, and I feel
            healthier and stronger than ever before. I highly recommend FitHub
            to anyone looking for a great place to work out!"
          </p>
          <span>-Anya</span>
        </section>
        </section>
        <section className={style.testimonial}>
            <section className={style.testimonialContentWrapper}>

          <p>
            "I was hesitant to join a gym at first, but I'm so glad I did!
            Fithub has created a welcoming and supportive environment where I
            can feel comfortable working out at my own pace. The personal
            trainers are incredibly helpful and motivating, and they've helped
            me to achieve my fitness goals in a way that is safe and
            sustainable. I'm so grateful for the community that I've found at
            Fithub!"
          </p>
          <span>-Oliver</span>
            </section>
        </section>
        <section className={style.testimonial}>
        <section className={style.testimonialContentWrapper}>
          <p>
            "I've been to several gyms, but Fithub is in a league of its own.
            The equipment is unmatched, the trainers are knowledgeable, and the
            community is supportive. I've met like-minded individuals who have
            become great friends. It's more than just a gym; it's a fitness
            family."
          </p>
          <span>-Tom</span>
        </section>
        </section>
      </section>
    </section>
  );
}

export default PortfolioTestimonials;
