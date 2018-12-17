import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgGridNg2 } from 'ag-grid-angular';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient, private appService: AppService) {

  }

  @ViewChild('agGrid') agGrid: AgGridNg2;
  columnDefs = [
    { headerName: 'ID', field: 'id', checkboxSelection: true},
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Enabled', field: 'enabled'},
    { headerName: 'Start Date', field: 'startDate'},
    { headerName: 'Modification Date', field: 'modificationDate'},
    { headerName: 'End Date', field: 'endDate'},
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  rowData: any;

  ngOnInit(): void {
    // this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
    this.rowData = this.appService.getData();
    console.log(this.appService);
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes);
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
