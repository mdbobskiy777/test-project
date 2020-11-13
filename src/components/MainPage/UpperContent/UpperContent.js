import s from "../mainPage.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import InfoBanner from "./InfoBanner";
import imagePhone from "../../../assets/images/mobile.png"
const UpperContent = () => {
    return  <div className={s.content}>
        <InfoBanner/>
        <div>
            <img src={imagePhone} alt="322"/>
        </div>
    </div>
}
export default UpperContent