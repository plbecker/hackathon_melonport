import React, { Component } from 'react';

import { AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

import FundChartCellRenderer from '../FundChartCellRenderer.js'
import GraphCellRenderer from '../GraphCellRenderer.js'


class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onGridReady: function(params) {
                params.api.sizeColumnsToFit();
                window.addEventListener("resize", function() {
                  setTimeout(function() {
                    params.api.sizeColumnsToFit();
                  });
                });
              }
            ,rowSelection: "multiple"
            }

        };
    

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
        window.addEventListener("resize", function() {
          setTimeout(function() {
            params.api.sizeColumnsToFit();
          });
        });

        params.api.sizeColumnsToFit();
  }

    static roundFormatter(params){
        return Math.round(params.data.sharePrice * 100) / 100 + ' MLN'
    }

    static dateFormatter(params){
        return params.data.inception.substring(0,10)
    }

    static rankFormatter(params){
        return params.data.rank;
    }
    
    componentDidMount(){
        fetch('https://ranking.melon.fund/')
            .then(result => result.json())
            .then(rowData => {
                var rank = 1;
                rowData.forEach(row => {
                    row.rank = rank++;
                });

                this.setState({rowData});
            })
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
        window.onresize = () => {
            this.gridApi.sizeColumnsToFit();
        }
    }

    render() {
        return (
            <div  className="ag-theme-material"
            style={{ 
                height: '600px', 
                //margin: '0 auto'
            }}>
                <AgGridReact 
                    enableSorting={true}
                    enableFilter={true}
                    enableColResizes={true}
                    rowSelection={this.state.rowSelection}
            //                rowMultiSelectWithClick={true}
                    onGridReady={this.state.onGridReady}
                    onGridReady={this.onGridReady.bind(this)}
            //                suppressRowClickSelection={true}
            //                suppressAggFuncInHeader={true}

            //                columnDefs={this.state.columnDefs} 
                    rowData={this.state.rowData}>

                    <AgGridColumn checkboxSelection  headerName="Rank" field="rank" valueFormatter={Ranking.rankFormatter}></AgGridColumn>
                    <AgGridColumn headerName="Fund Name" field="name"></AgGridColumn>
                    <AgGridColumn headerName="Graph" suppressAutoSize suppressResize field="graph" enableValue cellRendererFramework={GraphCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Share Price" field="sharePrice" cellClass="number-cell" valueFormatter={Ranking.roundFormatter} ></AgGridColumn>
                    <AgGridColumn headerName="1 YTD Performance"  suppressAutoSize suppressResize field="performance" enableValue cellRendererFramework={FundChartCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Inception" field="inception" valueFormatter={Ranking.dateFormatter}></AgGridColumn>
                </AgGridReact>


            </div>
        );
    }
} export default Ranking
