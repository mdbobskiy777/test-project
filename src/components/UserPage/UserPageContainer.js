import React, {useEffect} from "react"
import {connect} from "react-redux";
import {getUserData} from "../../redux/charts-reducer";
import UserPage from "./UserPage";
import Preloader from "../common/Preloader/Preloader";

const UserPageContainer = (props) => {
    useEffect(() => {
        props.getUserData()
    }, [])
    return <div>
        {props.chartsData ? <UserPage {...props}/> : <Preloader/>}
    </div>
}
const mapStateToProps = state => ({
    chartsData: state.chartsPage.chartsData
})
export default connect(mapStateToProps, {getUserData})(UserPageContainer)