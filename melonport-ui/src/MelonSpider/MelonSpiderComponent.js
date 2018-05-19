import React from 'react';

import MelonSpider from './MelonSpider';

import spiderLabels from './spiderLabels';
import personalSpiderData from './personalSpiderData';
import spiderData1 from './spiderData1';
import spiderData2 from './spiderData2';

var chartOptions = {
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

var combinedSpiderData1 = {
    "labels": spiderLabels,
    "datasets": [
        personalSpiderData,
        spiderData1
    ]
}

var combinedSpiderData2 = {
    "labels": spiderLabels,
    "datasets": [
        spiderData1,
        spiderData2
    ]
}

let MelonSpiderComponent = () => (
    <div>
        {console.log(combinedSpiderData1)}
        <MelonSpider data={combinedSpiderData2} chartOptions={chartOptions} />
    </div>
);

export default MelonSpiderComponent;
