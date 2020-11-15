import React from "react"
import S from "./infoBanner.module.css"

const TextBanner = () => {
    return (
        <div>
            <div className={S.title}>
                <h1>Why small business owners love AppCo?</h1>
            </div>
            <div className={S.title}>
            <span>Our design projects are fresh and simple and will benefit your business greatly.
                Learn more about our work!</span>
            </div>
        </div>
    )
}
export default TextBanner