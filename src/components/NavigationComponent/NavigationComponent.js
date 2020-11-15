import React from "react"
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import S from "./navigation.module.css"
import {compose} from "redux";
import {clearStore} from "../../redux/statistic-reducer";

const NavigationComponent = ({navItems, navLinks, ...props}) => {
    const onClick = () => {
        props.clearStore()
    }
    const getItems = (navItems) => {
        let items = navItems.filter(e => e !== '')
        items = items.slice(0, items.length - 1)
        items = items.map((i, n) => {
            return <span onClick={(n === 0) ? onClick : null}
                         className={(props.location.pathname === "/") ? S.notVisible : " "}><NavLink
                to={navLinks[n]}><span>{i}</span></NavLink><span>{">"}</span></span>
        })
        items.push(<span
            className={(props.location.pathname === "/") ? S.notVisible : " "}><span>{navItems[items.length]}</span></span>
        )
        return items
    }
    return <div>
        {getItems(navItems)}
    </div>
}
const mapStateToProps = state => ({
    navItems: ["Main Page", "Users Statistic", state.chartsPage.fullName],
    navLinks: ["/", "/userStatistic", "/user"]
})
export default compose(
    connect(mapStateToProps, {clearStore}),
    withRouter
)(NavigationComponent)