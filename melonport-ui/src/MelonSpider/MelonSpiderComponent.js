import React, { Component } from 'react';

import MelonSpider from './MelonSpider';

import spiderLabels from './spiderLabels';
import personalSpiderData from './personalSpiderData';
import spiderData1 from './spiderData1';
import spiderData2 from './spiderData2';

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


class MelonSpiderComponent extends Component {

    constructor(props) {
        super(props);

        const baseSpiderData = {
            labels: spiderLabels,
            datasets: [
            ]
        }

        // TODO only use one spiderdataset here
        // TODO give data from outside
        /* TODO uncomment when props are ready
        var combinedSpiderData = Object.assign({}, baseSpiderData);
        combinedSpiderData.datasets = [
            props.data1,
            props.data2
        ];
        */

        var combinedSpiderData1 = Object.assign({}, baseSpiderData);
        combinedSpiderData1.datasets = [
            personalSpiderData,
            spiderData1
        ];

        var combinedSpiderData2 = Object.assign({}, baseSpiderData);
        combinedSpiderData2.datasets = [
            spiderData1,
            spiderData2
        ];

        this.combinedSpiderData1 = combinedSpiderData1;
        this.combinedSpiderData2 = combinedSpiderData2;
    }

    render() {
        return <div>
            <MelonSpider data={this.combinedSpiderData1} chartOptions={chartOptions} />
        </div>
    }
}

export default MelonSpiderComponent;
