import React from "react";
import S from "./header.module.css"
import logo from "../../assets/images/AppCo.png"
const Header = ()=>{
    return <div className={S.headerContainer}>
        <div className={S.logo}>
            <img src={logo} alt=""/>
        </div>
    </div>
}
export default Header