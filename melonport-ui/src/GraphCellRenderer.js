import React from 'react';
//import ReactD3 from 'react-d3-components';
import { LineChart, Brush, d3 } from 'react-d3-components';
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
                label: 'somethingA',
                values: array
                }];
        return (
            <div>
            <LineChart
                data={data}
                width={100}
                height={35}
                xAxis={{innerTickSize: 0 }}
                yAxis={{innerTickSize:0}}
                margin={{top:14, bottom: 5, left: 10, right: 0}}/>
            </div>
        )}
}
