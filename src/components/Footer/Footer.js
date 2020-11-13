import React from "react";
import s from "./footer.module.css"
import logo from "../../assets/images/AppCo.png"

const Footer = ()=>{
    return <div className={s.content}>
        <div>
            <img src={logo} alt=""/>
        </div>
        <div>All rights reserved by ThemeTags</div>
        <div>Copyrights © 2019. </div>
    </div>
}
export default Footer