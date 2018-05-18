import React from 'react';

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class FundChartCellRenderer extends React.Component {
    constructor(props){
        super(props)
        this.cell = React.createRef()
    }
    render() {
        let max = 68
        let mLeft = 'auto'
        let mRight = max
        let neg = true
        if (Math.random() < 0.5){
            neg = false
            mLeft = max
            mRight = 'auto'
        }
        let rand = 1 + (Math.random() * (99))
        rand = Math.round(rand)

        let backgroundColor;
        if (neg && rand > 10) {
            backgroundColor = 'red';
        } else if (!neg && rand >= 10) {
            backgroundColor = '#00A000';
        } else {
            backgroundColor = '#ff9900';
        }
        return (
            <div className="div-percent-bar" style={{marginLeft:mLeft+'px', position:'absolute', top:'0', right:mRight,  width:rand/2+ '%', backgroundColor: backgroundColor}}>
                <div className="div-percent-value" style={{}}>{rand}%</div>
            </div>
        );
    }
}
