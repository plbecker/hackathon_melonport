import React from 'react';

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class FundChartCellRenderer extends React.Component {

    render() {
        let mRight = '50%'
        let mLeft = 'auto'
        let neg = true
        if (Math.random() < 0.5){
            neg = false
            mRight = 'auto'
            mLeft = '50%'
        }
        let rand = 1 + (Math.random() * (99))
        rand = Math.round(rand)

        let gain = '+'
        if (neg) {
            gain = '-'
        }

        let backgroundColor;
        if (neg && rand > 10) {
            backgroundColor = 'red';
        } else if (!neg && rand >= 10) {
            backgroundColor = '#00A000';
        } else {
            backgroundColor = '#ff9900';
        }
        return (
//            <div className="div-percent-bar" style={{marginLeft:mLeft+'px', position:'absolute', top:'0', right:mRight,  width:rand/2+ '%', backgroundColor: backgroundColor}}>
//                <div className="div-percent-value" style={{}}>{rand}%</div>
//            </div>
            <div  classname="div-container-percent-bar" style={{textAlign:'center'}}>
                <div style={{position:'absolute', zIndex:'-1', top:'0', bottom:'0', left:'50%', borderLeft:'1px dashed #ccc'}}/>
                <div className="div-percent-bar" style={{margin:'0 auto', position:'absolute', right:mRight, left:mLeft, top:'30%', height:'20%', width:rand/2+ '%', backgroundColor: backgroundColor}}>
                    <div className="div-percent-value" style={{}}>{gain + rand}%</div>
                </div>
            </div>
        );
    }
}
