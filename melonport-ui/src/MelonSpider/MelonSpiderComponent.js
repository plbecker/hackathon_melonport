import React from 'react';

import MelonSpider from './MelonSpider';

import spiderVariables from './spiderVariables';
import spiderSet1 from './spiderSet1';

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

let MelonSpiderComponent = () => (
    <div>
        <MelonSpider data={spiderSet1} chartOptions={chartOptions} />
    </div>
);

export default MelonSpiderComponent;
