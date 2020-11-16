import React from "react"
import s from "./subscribeBunner.module.scss"
import background from "../../../assets/images/Rectangle54.png";

const SubscribeComponent = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`, height: "100px"
        }}>
            <div style={{paddingTop:"30px"}}>
                <div className={s.container}>
                    <input className={s.input} onChange={() => {
                    }} type="text" value={"Enter your email"}/>
                    <button className={s.subscribeButton}>Subscribe</button>
                </div>
            </div>
        </div>

    )
}
export default SubscribeComponent