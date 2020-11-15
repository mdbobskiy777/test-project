import {NavLink} from "react-router-dom"
import React from "react"

const InfoBanner = () => {
    return (
        <div>
            <div><h1>Brainstorming for desired perfect Usability</h1></div>
            <div><span>Our design projects are fresh and simple and will
                benefit your business greatly. Learn more about our work!</span></div>
            <div>
                <NavLink to={"/userStatistic"}>
                    <button>Views stats</button>
                </NavLink>
            </div>
        </div>
    )
}
export default InfoBanner