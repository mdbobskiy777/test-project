import React from "react"
import UsersTable from "./UsersTable"
import Pagination from "components/common/Pagination/Pagination"
import s from "./userStatistic.module.css"
import img from "assets/images/Line 9.png"

const paginationStyle = {
    border: "4px solid #3A80BA",
    img: img,
    transform: "rotate(180deg)",
    background: "#F1F1F1",
    borderRadius: "8px",
    width: "48px",
    height: "48px",
    backgroundActive: "#3A80BA"
}

const UsersStatistic = (props) => {
    return (
        <div>
            <div className={s.title}>Users statistics</div>
            <UsersTable users={props.users}/>
            <div className={s.pagination}>
                <Pagination paginationStyle={paginationStyle} totalItemsCount={props.totalUsersCount}
                            pageSize={props.pageSize}
                            onPageChanged={props.onPageChanged}
                            currentPage={props.currentPage}
                            portionSize={5}/>
            </div>
        </div>
    )
}

export default UsersStatistic

