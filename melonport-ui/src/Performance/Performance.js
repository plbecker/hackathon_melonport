import React, { Component } from 'react';
import './Performance.css'

import { Line as LineChart} from "react-chartjs";

export default class Performance extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
        this.chartOptions = props.chartOptions;
    }

    render() {
        return <div className="performance-chart">
            <LineChart data={this.data} options={this.chartOptions} width="450" height="350"/>
        </div>
    }
}
