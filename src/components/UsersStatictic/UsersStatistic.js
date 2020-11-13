import React from "react"
import UsersTable from "./UsersTable";
import NavigationComponent from "./NavigationComponent";
import Pagination from "../common/Pagination/Pagination";
import s from "./userStatistic.module.css"

const UsersStatistic = (props) => {
    return <div>
        <NavigationComponent navItems={[]}/>
        <UsersTable users={props.users}/>
        <div className={s.pagination}>
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}
                        currentPage={props.currentPage}/>
        </div>
    </div>
}
export default UsersStatistic

