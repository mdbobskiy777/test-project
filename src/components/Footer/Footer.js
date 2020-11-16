import React from "react"
import s from "./footer.module.scss"
import logo from "assets/images/AppCo.png"
import {compose} from "redux";
import {withRouter} from "react-router";

const Footer = (props) => {
    return (
        <div
            className={(props.location.pathname === "/mainPage" || props.location.pathname === "/") ?
                s.contentMain : s.content}>
            <div>
                <img src={logo}/>
            </div>
            <div>All rights reserved by ThemeTags</div>
            <div>Copyrights © 2019.</div>
        </div>
    )
}
export default compose(
    withRouter
)(Footer)