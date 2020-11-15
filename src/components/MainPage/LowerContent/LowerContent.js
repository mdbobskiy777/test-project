import s from "../lowerContent.module.css";
import React from "react";
import InfoItem from "./InfoItem";

import TextBanner from "./TextBanner";
import SubscribeComponent from "./SubscribeComponent"
import infoItemsList from "./infoItemsList"

console.log(infoItemsList)

const LowerContent = () => {
    return <div>
        <TextBanner/>
        <div className={s.content}>
            {
                infoItemsList.map(item => (<InfoItem src={item.img} title={item.title} text={item.text}/>))
            }
        </div>
        <div className={s.subscribeContent}>
            <SubscribeComponent/>
        </div>
    </div>
}
export default LowerContent