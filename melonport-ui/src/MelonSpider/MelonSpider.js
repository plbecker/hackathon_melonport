import React, { Component } from 'react';
import './MelonSpider.css'

import { Radar as RadarChart } from "react-chartjs";

var chartOptions = {
    // POSSIBLE OPTIONS
    //scaleShowLine : false,
    //angleShowLineOut : false,
    //scaleShowLabels : true, 
    //angleLineColor : "rgba(0,255,0,.1)",
    //angleLineWidth : 3,
    pointLabelFontFamily: "'sans-serif'",
    //pointLabelFontFamily : "'Crimson Text'",
    //pointLabelFontStyle : "bold",
    //pointLabelFontSize : 12,
    //pointLabelFontColor : "#000000",
    //pointDot : false,
    //pointDotRadius : 7,
    //pointDotStrokeWidth : 2,
    //datasetFill : false,

    //String - A legend template
    //legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
}


export default class MelonSpider extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;
    }

    render() {
        return <div className="melon-spider">
            <RadarChart data={this.data} options={chartOptions} width="450" height="350"/>
        </div>
    }
}