import React, { Component } from 'react';

import { AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

import Typography from '@material-ui/core/Typography';
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
            , hgt: '0px'
            , pad: '0px'
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

    onRowSelected(event) {
        //window.alert("row " + event.node.data.name + " selected = " + event.node.selected);
    }
    onSelectionChanged(event) {
        var rowCount = event.api.getSelectedNodes().length;
        if (rowCount < 2){
            const ANIMATION_TIMEOUT = 50;
            setTimeout(() => {
               this.setState({hgt: '48px', pad: '20px'}) 
            }, ANIMATION_TIMEOUT);
        }
        else {
            this.setState({hgt: '0px', pad: '0px'}) 
            if (rowCount == 2){
                //do graph stuff
            }
        }
        //window.alert("selection changed, " + rowCount + " rows selected");
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
            <div>
            <div className={'selectIndicator'} style={{transition: 'ease-in-out 1s', width:'auto', height:this.state.hgt, paddingTop:this.state.pad, marginTop:'-15px', marginLeft:'-25px', marginRight:'-25px', backgroundColor:'#111'}}>
                <Typography variant="title"  component='h3' color='primary' style={{marginLeft:'20px'}}>
                    Select two funds to compare them.
                 </Typography> 
            </div>
            <div  className="ag-theme-material"
            border='3'
            style={{ 
                height: '900px', 
                marginBottom: '-20px'
                //margin: '0 auto'
            }}>
                <AgGridReact 
                    paginationPageSize={40}
                    pagination={true}
                    enableSorting={true}
                    enableFilter={true}
                    enableColResize={true}
                    enableColResizes={true}
                    rowSelection={this.state.rowSelection}
            //                rowMultiSelectWithClick={true}
                    onGridReady={this.state.onGridReady}
                    onGridReady={this.onGridReady.bind(this)}

                    onRowSelected={this.onRowSelected.bind(this)}
                    onSelectionChanged={this.onSelectionChanged.bind(this)}    //                suppressRowClickSelection={true}
            //                suppressAggFuncInHeader={true}

            //                columnDefs={this.state.columnDefs} 
                    rowData={this.state.rowData}>

                    <AgGridColumn checkboxSelection  headerName="Rank" field="rank" valueFormatter={Ranking.rankFormatter}></AgGridColumn>
                    <AgGridColumn headerName="Fund Name" field="name"></AgGridColumn>
                    <AgGridColumn headerName="Graph" suppressAutoSize field="graph" enableValue cellRendererFramework={GraphCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Share Price" field="sharePrice" cellClass="number-cell" valueFormatter={Ranking.roundFormatter} ></AgGridColumn>
                    <AgGridColumn headerName="YTD Performance"  suppressAutoSize field="performance" enableValue cellRendererFramework={FundChartCellRenderer}></AgGridColumn>
                    <AgGridColumn headerName="Inception" field="inception" valueFormatter={Ranking.dateFormatter}></AgGridColumn>
                </AgGridReact>


            </div>
            </div>
        );
    }
} export default Ranking
