import { Component, Inject, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  currentPlayer: Player = { name:'', job: ''};

  @ViewChild(MatTable) table!: MatTable<Player>;

  constructor(public dialog: MatDialog) {}

  openAddPlayerDialog(): void {
    this.currentPlayer = { name:'', job: ''};
    const dialogRef = this.dialog.open(DialogNewPlayer, {

      data: {name: this.currentPlayer.name, job: this.currentPlayer.job},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.currentPlayer = result;
      this.addPlayer()
    });
  }
  addPlayer() {
    this.dataSource.push(this.currentPlayer);
    this.table.renderRows();
  }

  removePlayer(){
    this.dataSource.pop();
    this.table.renderRows();
  }
  selectPlayer() {

  }

}

@Component({
  selector: 'dialog-new-player',
  templateUrl: 'dialog-new-player.html',
})
export class DialogNewPlayer {
constructor(
  public dialogRef: MatDialogRef<DialogNewPlayer>,
  @Inject(MAT_DIALOG_DATA) public data: Player,
) {}
onNoClick(): void {
  this.dialogRef.close();
}

}
