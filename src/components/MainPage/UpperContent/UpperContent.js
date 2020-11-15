import s from "../mainPage.module.css"
import React from "react"
import InfoBanner from "./InfoBanner"
import imagePhone from "assets/images/mobile.png"

const UpperContent = () => {
    return (
        <div className={s.content}>
            <InfoBanner/>
            <div>
                <img src={imagePhone}/>
            </div>
        </div>
    )
}
export default UpperContent