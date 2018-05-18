import React from 'react';

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class FundChartCellRenderer extends React.Component {

    render() {
        let rand = 1 + (Math.random() * (99))
        rand = Math.round(rand)

        let backgroundColor;
        if (rand < 20) {
            backgroundColor = 'red';
        } else if (rand < 60) {
            backgroundColor = '#ff9900';
        } else {
            backgroundColor = '#00A000';
        }
        return (
            <div className="div-percent-bar" style={{width:rand+ '%', backgroundColor: backgroundColor}}>
                <div className="div-percent-value">{rand}%</div>
            </div>
        );
    }
}
