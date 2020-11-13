import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {useHistory} from "react-router-dom";
import React from "react";

const UsersTable = ({users}={}) => {
    let history = useHistory();
    const options = {
        onRowClick: (row) => {
            history.push(`/user/${row.id}`);
        }
    }
    return <BootstrapTable data={users} striped={true} hover={true} options={options}>
        <TableHeaderColumn dataField="id" isKey={true}
                           dataAlign='center'
                           headerAlign="left"
                           width="30">id</TableHeaderColumn>
        <TableHeaderColumn dataField="first_name"
                           dataAlign='center'
                           headerAlign="center">First Name</TableHeaderColumn>
        <TableHeaderColumn dataField="last_name" dataAlign='center'
                           headerAlign="center">Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField="email" dataAlign='center'
                           headerAlign="center">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="gender" dataAlign='center'
                           headerAlign="center">Gender</TableHeaderColumn>
        <TableHeaderColumn dataField="ip_address" dataAlign='center'
                           headerAlign="center">IP adress</TableHeaderColumn>
        <TableHeaderColumn dataField="clicks" dataAlign='center'
                           headerAlign="center">Total Clicks</TableHeaderColumn>
        <TableHeaderColumn dataField="page_views" dataAlign='center'
                           headerAlign="center">Total page views</TableHeaderColumn>
    </BootstrapTable>
}
export default UsersTable