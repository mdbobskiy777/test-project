import React from "react";
import S from "./infoItem.module.css"

const InfoItem = ({src, title, text}) => {
    return <div className={S.item}>
        <div>
            <img src={src} alt="1"/>
        </div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            {text}
        </div>
    </div>
}
export default InfoItem