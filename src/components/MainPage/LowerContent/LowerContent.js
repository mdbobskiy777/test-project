import s from "../lowerContent.module.css";
import React from "react";
import InfoItem from "./InfoItem";
import img1 from "../../../assets/images/Group 13.png"
import img2 from "../../../assets/images/Group 14.png"
import img3 from "../../../assets/images/Group 15.png"
import TextBanner from "./TextBanner";
import SubscribeComponent from "./SubscribeComponent";

const LowerContent = () => {
    return <div>
        <TextBanner/>
        <div className={s.content}>
            <InfoItem src={img1} title={"Clean Design"}
                      text={"Increase sales by showing true dynamics of your website."}/>

            <InfoItem src={img2} title={"Secure Data"}
                      text={"Build your online store’s trust using Social Proof & Urgency."}/>
            <InfoItem src={img3} title={"Retina Ready"}
                      text={" Realize importance of social proof in customer’s purchase decision."}/>
        </div>
        <div className={s.subscribeContent}>
            <SubscribeComponent/>
        </div>
    </div>
}
export default LowerContent