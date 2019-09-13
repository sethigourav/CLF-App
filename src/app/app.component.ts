import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
export interface PeriodicElement {
  name: string;
  position: number;
  type:string;
  title: string;
  date: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 2, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018', type: 'archived'},
  {position: 3, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 4, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 5, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 6, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 7, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 8, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 9, name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
  {position: 10,name: 'Aron Piekema', title:'Titel zoals toegevoegd op moment van', date: '27 juni 2018',type: 'archived'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns: string[] = ['select','type', 'position', 'name', 'title', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
