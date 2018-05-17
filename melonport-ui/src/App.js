import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Address", field: "address"},
                {headerName: "Name", field: "name"},
                {headerName: "Price", field: "sharePrice"},
                {headerName: "Inception", field: "inception"}
            ]
        }
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
                columnDefs={this.state.columnDefs} 
                rowData={this.state.rowData}>
            </AgGridReact>
            </div>
        );
    }
}

export default App;
