import React from 'react';
import styles from './ReasonsToJoin.module.css';
import icon1 from '../../assets/icons/icon1.svg';
import icon2 from '../../assets/icons/icon2.svg';
import icon3 from '../../assets/icons/icon3.svg';
import icon4 from '../../assets/icons/icon4.svg';

const ReasonsToJoin = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Reasons to Join</h2>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <div className={styles.reason}>
                        <img src={icon3} alt="Ruler Icon" className={styles.icon} />
                        <div className={styles.text}>
                            <h3>15000 sq.m</h3>
                            <p>A spacious gym for sports – a safe distance between exercise machines</p>
                        </div>
                    </div>
                    <div className={styles.reason}>
                        <img src={icon1} alt="Ruler Icon" className={styles.icon} />
                        <div className={styles.text}>
                            <h3>More than 200 equipment</h3>
                            <p>No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.reason}>
                        <img src={icon4} alt="Ruler Icon" className={styles.icon} />
                        <div className={styles.text}>
                            <h3>4 fitness zones</h3>
                            <p>From cardio to functional and cycle. Separate area for boxing and mixed martial arts</p>
                        </div>
                    </div>
                    <div className={styles.reason}>
                        <img src={icon2} alt="Ruler Icon" className={styles.icon} />
                        <div className={styles.text}>
                            <h3>Round-the-clock operation</h3>
                            <p>The gym is open 24 hours a day, also works on all holidays and weekends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonsToJoin;