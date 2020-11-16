import React from "react"
import {connect} from "react-redux"
import {NavLink, withRouter} from "react-router-dom"
import S from "./navigation.module.css"
import {compose} from "redux"
import {clearStore} from "redux/statistic-reducer"

const NavigationComponent = ({navItems, navLinks, ...props}) => {
    const onClick = () => {
        props.clearStore()
    }
    const getItems = (navItems) => {
        let items = navItems.filter(e => e !== '')
        items = items.slice(0, items.length - 1)
        items = items.map((i, n) => {
            return <span key={n} onClick={(n === 0) ? onClick : null}><NavLink className = {S.item} key={n}
                to={navLinks[n]}><span key={n}>{i}</span></NavLink>
                <span className = {S.item}>{">"}</span></span>
        })
        items.push(<span key={"key"}
            className={S.current}><span>{navItems[items.length]}</span></span>
        )
        return items
    }
    return <div className={S.container}>
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