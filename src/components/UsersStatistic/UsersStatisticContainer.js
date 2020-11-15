import React, {useEffect} from "react"
import {compose} from "redux"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {getUsers, setCurrentPage} from "redux/statistic-reducer"
import Preloader from "components/common/Preloader/Preloader"
import UsersStatistic from "./UsersStatistic"

const UsersStatisticContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)

    }, [])

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.getUsers(pageNumber, props.pageSize)
    }
    return (
        <div>
            <div>
                {props.isFetching ? <Preloader/> : null}
            </div>
            <div>
                <UsersStatistic {...props} onPageChanged={onPageChanged}/>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

export default compose(
    connect(mapStateToProps, {getUsers, setCurrentPage}),
    withRouter)(UsersStatisticContainer)

