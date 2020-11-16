import React from "react"
import S from "./header.module.scss"
import logo from "assets/images/AppCo.png"

const Header = () => {
    return (
        <div className={S.headerContainer}>
            <div className={S.content}>
                <div className={S.logo}>
                    <img src={logo}/>
                </div>
            </div>
        </div>
    )
}
export default Header