import React, { Component } from 'react';
import './MelonSpider.css'

import { Radar as RadarChart } from "react-chartjs";

export default class MelonSpider extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
        this.chartOptions = props.chartOptions;
        console.log(this.data);
    }

    render() {
        return <div className="melon-spider">
            <RadarChart data={this.data} options={this.chartOptions} width="320" height="250"/>
        </div>
    }
}