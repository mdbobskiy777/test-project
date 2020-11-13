import React from "react"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import UsersTable from "./UsersTable";
import NavigationComponent from "./NavigationComponent";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import s from "./userStatistic.module.css"
let products = [
    {
        id: 1,
        firstName: "Eugene",
        lastName: "Bober",
        email: "mdbobskiy777@gmail.com",
        gender: "male",
        ip: "127.0.1.168",
        clicks: "290333",
        views: "300111"
    },
    {
        id: 2,
        firstName: "Eugene",
        lastName: "Bober",
        email: "mdbobskiy777@gmail.com",
        gender: "male",
        ip: "127.0.1.168",
        clicks: "290333",
        views: "300111"
    },
    {
        id: 3,
        firstName: "Eugene",
        lastName: "Bober",
        email: "mdbobskiy777@gmail.com",
        gender: "male",
        ip: "127.0.1.168",
        clicks: "290333",
        views: "300111"
    }
]

const UserStatistic = (props) => {
    return <div>
        <NavigationComponent navItems={[]}/>
        <UsersTable products={products}/>
        <div className={s.pagination}>
            <Pagination totalItemsCount={100} portionSize={5} pageSize={1} onPageChanged={() => {
            }} currentPage={1}/>
        </div>
    </div>
}
export default compose(withRouter)(UserStatistic)

