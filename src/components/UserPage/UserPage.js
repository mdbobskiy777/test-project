import NavigationComponent from "../UsersStatistic/NavigationComponent";
import ChartComponent from "./ChartComponent";

const UserPage = (props) => {
    return <div>
        <div><h1>Eugene Bober</h1></div>
        <NavigationComponent navItems={[]}/>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.clicks}/>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.page_views}/>
    </div>
}

export default UserPage