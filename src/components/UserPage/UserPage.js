import React from "react"
import NavigationComponent from "../UserStatictic/NavigationComponent";
import ChartComponent from "./ChartComponent";

const UserPage = () => {
    return <div>
        <div><h1>Eugene Bober</h1></div>
        <NavigationComponent navItems={[]}/>
        <ChartComponent/>
        <ChartComponent/>
    </div>
}
export default UserPage