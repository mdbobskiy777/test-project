import React from "react"
import S from "./textBanner.module.scss"

const TextBanner = () => {
    return (
        <div>
            <div className={S.title}>
                <h1>Why <span style={{fontWeight:"bold"}}>small business owners love</span> AppCo?</h1>
            </div>
            <div className={S.text}>
            <span>Our design projects are fresh and simple and will benefit your business greatly.
                Learn more about our work!</span>
            </div>
        </div>
    )
}
export default TextBanner