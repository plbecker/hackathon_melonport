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
        return <div>
            <RadarChart data={this.data} options={this.chartOptions} width="350" height="350"/>
        </div>
    }
}