import React from 'react'
import style from './Dashboard.module.css'
import dash from '../../assets/icons/dashLogo.svg'
import contentLogo from '../../assets/icons/ContentLogo.svg'
function Dashboard(props) {
    const {setIsOnDashboard} = props
    setIsOnDashboard(true)
  return (
    <div className={style.dashboardWrapper}>
        <section className={style.dashboardSideNav}>
      <span className={style.dashLogoContainer}><img src={dash} alt="Dashboard Logo" />Dashboard</span>
            <a href="#"><img src={contentLogo} alt="Content management icon" /> Content Management</a>
        </section>
    </div>
  )
}

export default Dashboard