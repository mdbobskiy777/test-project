import React, {useEffect} from "react"
import {connect} from "react-redux"
import {clearStore, getUserData} from "../../redux/charts-reducer"
import UserPage from "./UserPage"
import Preloader from "../common/Preloader/Preloader"
import {compose} from "redux";
import {withRouter} from "react-router"

const UserPageContainer = (props) => {

    useEffect(() => {
        props.getUserData(props.match.params.id)
        return () => {
            props.clearStore()
        }
    }, [])

    return (
        <div>
            {props.chartsData ? <UserPage {...props}/> : <Preloader/>}
        </div>
    )
}
const mapStateToProps = state => ({
    chartsData: state.chartsPage.chartsData,
    fullName: state.chartsPage.fullName,
    totalDates: state.chartsPage.totalDates
})

export default compose(
    connect(mapStateToProps, {getUserData, clearStore}),
    withRouter
)(UserPageContainer)