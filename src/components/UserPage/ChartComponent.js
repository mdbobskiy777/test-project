import React from "react";
import { Line } from "react-chartjs-2";
import {MDBContainer} from "mdbreact";

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        dataLine: {
            labels: [...this.props.labels],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(0, 0,0, .0)",
                    borderColor: "#3A80BA",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data:[ ...this.props.data]
                }
            ]
        }
    };

    render() {
        return (
            <MDBContainer>
                <h3 className="mt-5">Line chart</h3>
                <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
        );
    }
}

export default ChartComponent;