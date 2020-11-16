import s from "../mainPage.module.css"
import React from "react"
import InfoBanner from "./InfoBanner"
import imagePhone from "assets/images/iPhoneX.png"
import background from "assets/images/Rectangle8.png"

const UpperContent = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className={s.content}>
            <span className={s.bannerContent}>
                <InfoBanner/>
                <div>
                    <img src={imagePhone}/>
                </div>
            </span>
        </div>
    )
}
export default UpperContent