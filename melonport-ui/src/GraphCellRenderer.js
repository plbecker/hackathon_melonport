import React from 'react';
//import ReactD3 from 'react-d3-components';
import { LineChart, Brush, d3 } from 'react-d3-components';
//import LineChart from './LineChart';
//import * as d3 from 'd3';

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class GraphCellRenderer extends React.Component {

    render() {
        var array = []
        for (var i=0; i<20; i++){
            array.push({x: i, y: Math.random() * 35})
        }
        let data = [
                {
                values: array
                }];
        return (
            <div style={{position:'relative'}}>

            <hr style={{position: 'absolute', top:'30%', width:'90%', border:'1px dashed #ddd'}}/>
            <LineChart
                data={data}
                style={{position:'absolute'}}
                width={115}
                height={40}
                xAxis={{tickValue: null, outerTickSize: 0, tickPadding: 0, innerTickSize: 0, className: "xAxis", tickFormat: x => { return ''; },}}
                yAxis={{outerTickSize: 0, tickPadding: 0, innerTickSize: 0, className: "yAxis", tickFormat: x => { return ''; },}}
                margin={{top:12, bottom: 5, left: 10, right: 0}}/>
            </div>
        )}
}
