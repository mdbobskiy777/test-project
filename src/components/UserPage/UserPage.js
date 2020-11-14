import NavigationComponent from "../UsersStatistic/NavigationComponent";
import ChartComponent from "./ChartComponent";

const UserPage = (props) => {
    return <div>
        <div><h1>{props.fullName}</h1></div>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.clicks}
                        label={"clicks"}/>
        <ChartComponent labels={props.chartsData.labels}
                        data={props.chartsData.page_views}
                        label={"views"}
        />
    </div>
}

export default UserPage