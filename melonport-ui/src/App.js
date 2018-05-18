import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import FundChartCellRenderer from './FundChartCellRenderer.js'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*
            columnDefs: [
                {headerName: "Address", field: "address"}, 
                {headerName: "Name", field: "name"},
                {headerName: "Price", field: "sharePrice", cellClass: 'number-cell', valueGetter: roundFormatter},
                {headerName: "Inception", field: "inception", valueGetter: dateFormatter}
            ]
*/
        }
    
    }

    static roundFormatter(params){
        return Math.round(params.data.sharePrice * 100) / 100 + ' CHF'
    }

    static dateFormatter(params){
        return params.data.inception.substring(0,10)
    }
    
    componentDidMount(){
        fetch('https://ranking.melon.fund/')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div  className="ag-theme-balham"
            style={{ 
                height: '1200px', 
                width: '80%',
                margin: '0 auto'
            }}>
            <AgGridReact 
                enableSorting={true}
                enableFilter={true}
//                columnDefs={this.state.columnDefs} 
                rowData={this.state.rowData}>

                <AgGridColumn headerName="Fund Name" field="name" width={250}></AgGridColumn>
                <AgGridColumn headerName="Price" field="sharePrice" cellClass="number-cell"  width={170} valueFormatter={App.roundFormatter}></AgGridColumn>
                <AgGridColumn headerName="1 YTD Performance" field="graph" width={170} enableValue cellRendererFramework={FundChartCellRenderer}></AgGridColumn>
                <AgGridColumn headerName="Inception" field="inception"  width={170} valueFormatter={App.dateFormatter}></AgGridColumn>
            </AgGridReact>
            </div>
        );
    }
}

export default App;
