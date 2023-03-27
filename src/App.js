import logo from './logo.svg';
import './App.css';

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';

import 'ag-grid-community/styles/ag-theme-alpine.css';

import 'ag-grid-enterprise';

import { useCallback } from 'react';


function App() {

  const rowData=[
    {make:'ford',model:'focus',price:2000},
    {make:'fora',model:'focue',price:2023},
    {make:'fore',model:'focud',price:20001},
    {make:'fore',model:'focud',price:20001}

  ];
  const columnDefs=[
    {field:"make",sortable:true,filter:true},
    {field:"model",sortable:true,filter:true,rowGroup:true},
    {field:"price",sortable:true,filter:true},
    {field:"price",sortable:true,filter:true}
  ];

  const cellClickedListner=useCallback( e=>{
    console.log('cellClicked',e);
  });


  return (
    <div className='ag-theme-alpine' style={{height:500}}>
      <AgGridReact
      rowGroupPanelShow='always'
      onCellClicked={cellClickedListner}
      rowData={rowData}
      rowSelection='multiple'
      animateRows={true}
      columnDefs={columnDefs}/>


    </div>
  );
}

export default App;
