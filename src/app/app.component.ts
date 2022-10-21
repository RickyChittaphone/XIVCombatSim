import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
export interface Player {
  name: string;
  job: string;
}

const PLAYER_DATA: Player[] = [
  {name: 'Leonhard Euler', job: 'Black Mage'},
  {name: 'Apologizing Canadian', job: 'Red Mage'},
  {name: 'Harrow Levesque', job: 'Dark Knight'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'job'];
  dataSource = [...PLAYER_DATA];

  @ViewChild(MatTable) table!: MatTable<Player>;

  addPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * PLAYER_DATA.length);
    this.dataSource.push(PLAYER_DATA[randomPlayerIndex]);
    this.table.renderRows();
  }

  removePlayer(){
    this.dataSource.pop();
    this.table.renderRows();
  }
}
