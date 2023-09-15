import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  items : boolean = true;
  ingredients : boolean = false;
  desserts : boolean = false;
  boissons : boolean = false;

  constructor(
    public dialog: MatDialog
  ){}

  showItems() {
    this.items = true;
    this.ingredients = false;
    this.desserts = false;
    this.boissons = false;

  }

  showIngredients() {
    this.items = false;
    this.ingredients = true;
    this.desserts = false;
    this.boissons = false;
  }

  showDesserts() {
    this.items = false;
    this.ingredients = false;
    this.desserts = true;
    this.boissons = false;
  }

  showBoissons() {
    this.items = false;
    this.ingredients = false;
    this.desserts = false;
    this.boissons = true;
  }

  connexion(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
