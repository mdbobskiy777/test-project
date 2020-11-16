import React from "react"
import S from "./infoItem.module.scss"

const InfoItem = ({src, title, text}) => {
    return (
        <div className={S.item}>
            <div style={{paddingTop:"48px"}}>
                <img src={src}/>
            </div>
            <div className={S.title}>
                <h2>{title}</h2>
            </div>
            <div className={S.text}>
                {text}
            </div>
        </div>
    )
}
export default InfoItem