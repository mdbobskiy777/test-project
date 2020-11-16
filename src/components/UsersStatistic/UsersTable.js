import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table"
import {useHistory} from "react-router-dom"
import React from "react"

const UsersTable = ({users} = {}) => {
    let history = useHistory()
    const options = {
        onRowClick: (row) => {
            history.push(`/user/${row.id}`)
        }
    }
    return (
        <div style={{maxWidth: "1180px", margin:"0 auto"}}>
            <BootstrapTable data={users} striped={true} hover={true} options={options}>
                <TableHeaderColumn dataField="id" isKey={true}
                                   dataAlign='center'
                                   headerAlign="left"
                                   width="30">id</TableHeaderColumn>
                <TableHeaderColumn dataField="first_name"
                                   width="112"
                                   dataAlign='center'
                                   headerAlign="left"
                >First Name</TableHeaderColumn>
                <TableHeaderColumn dataField="last_name" width="112"
                                   dataAlign='center'
                                   headerAlign="left"
                >Last Name</TableHeaderColumn>
                <TableHeaderColumn dataField="email" width="244"
                                   dataAlign='center'
                                   headerAlign="left">Email</TableHeaderColumn>
                <TableHeaderColumn dataField="gender" width="80"
                                   dataAlign='center'
                                   headerAlign="left">Gender</TableHeaderColumn>
                <TableHeaderColumn dataField="ip_address" width="140"
                                   dataAlign='center'
                                   headerAlign="left">IP adress</TableHeaderColumn>
                <TableHeaderColumn dataField="total_clicks" width="140"
                                   dataAlign='center'
                                   headerAlign="left">Total Clicks</TableHeaderColumn>
                <TableHeaderColumn dataField="total_views" width="180"
                                   dataAlign='center'
                                   headerAlign="left">Total page views</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}

export default UsersTable