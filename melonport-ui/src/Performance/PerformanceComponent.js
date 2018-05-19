import React, { Component } from 'react';

import Performance from './Performance';

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


class PerformanceComponent extends Component {

    constructor(props) {
        super(props);

        let fund1 = 'Volkan Kara'
        let fund2 = 'melonBot'


        const baseData = {
            labels: ["November", "December", "January", "February", "March", "April", "May" ],
            datasets: [
            ]
        }

        var data = Object.assign({},baseData);
        data.datasets = [
            {
			label: "Fund1",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "Fund2",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}];

        var arr1 = []
        var arr2 = []
        for (var i=0; i<20; i++){
            arr1.push(Math.random() * 35)
            arr2.push(Math.random() * 35)
        }

        data.datasets[0].data = arr1
        data.datasets[1].data = arr2

        this.data = data;

    }

    render() {
        return <div>
            <Performance  data={this.data} chartOptions={chartOptions} />
        </div>
    }
}

export default PerformanceComponent;
