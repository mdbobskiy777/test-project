import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import {getUserData} from "../../redux/charts-reducer";
import UserPage from "./UserPage";


const UserPageContainer = (props) => {
    useEffect(() => {
        props.getUserData()
    }, [])
    return <div>
        {props.chartsData ? <UserPage {...props}/> : null}
    </div>
}
const mapStateToProps = state => ({
    chartsData: state.chartsPage.chartsData
})
export default connect(mapStateToProps, {getUserData})(UserPageContainer)