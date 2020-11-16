import React from "react"
import UsersTable from "./UsersTable"
import Pagination from "components/common/Pagination/Pagination"
import s from "./userStatistic.module.scss"

const UsersStatistic = (props) => {
    return (
        <div>
            <div className={s.title}>Users statistics</div>
            <UsersTable users={props.users}/>
            <div className={s.pagination}>
                <Pagination totalItemsCount={props.totalUsersCount}
                            pageSize={props.pageSize}
                            onPageChanged={props.onPageChanged}
                            currentPage={props.currentPage}
                            portionSize={5}/>
            </div>
        </div>
    )
}

export default UsersStatistic

