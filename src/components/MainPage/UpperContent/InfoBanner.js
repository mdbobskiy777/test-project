import {NavLink} from "react-router-dom"
import React from "react"
import s from "./upperContent.module.scss"
const InfoBanner = () => {
    return (
        <div className={s.textBanner}>
            <div className={s.text}><span style={{fontWeight:"bold"}}>Brainstorming </span>for desired perfect Usability</div>
            <div><span className={s.lowerText}>Our design projects are fresh and simple and will
                benefit your business greatly. Learn more about our work!</span></div>
            <div>
                <NavLink to={"/userStatistic"}>
                    <button className={s.button}>Views stats</button>
                </NavLink>
            </div>
        </div>
    )
}
export default InfoBanner