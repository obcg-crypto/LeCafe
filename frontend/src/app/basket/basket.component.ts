import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  displayedColumns2: string[] = ['position', 'PRODUIT', 'PRIX', 'INGRÉDIENTS'];
  empty : boolean = false;
  panier : any[] = [];
  coutPartiel : any[] = [];
  coutTotal : number = 0;
  
  constructor() {

  }
  ngOnInit() {

    this.panier = JSON.parse(localStorage.getItem('panier')!);

    if(this.panier.length == 0){
      this.empty = true;
    }

    this.coutPartiel =  this.calculerSousTotal();
    this.coutTotal = this.calculerCoutTotal();
  }

  removeItem(index : number) {
    this.panier.splice(index, 1); 
    localStorage.removeItem('panier');
    localStorage.setItem('panier', JSON.stringify(this.panier));
    location.reload();
  }

  /* This function compute the price of one item with 
  his ingredient */ 

  calculerSousTotal() : Array<number> {
    console.log(this.panier)
    var cout1 = 0;
    var coutFinal = [];

    for(let i of this.panier){
      if(i.ingredient != "") {
        for(let cout of i.ingredient){
          cout1 = cout1 + parseInt(cout.split(':')[1]);
        } 
      }
      cout1 = cout1 + i.cout;
      coutFinal.push(cout1);
      cout1 = 0;
    }
    return coutFinal;
  }


  /* This function compute the total price */ 

  calculerCoutTotal() : number {

    var total = 0;
    var tableau = this.calculerSousTotal();

    for(let i of tableau){
      total = total + i;
    }
    return total;
  }

  envoyerCommande(){
    var coutTotal = '' + this.coutTotal
    localStorage.setItem('montant', coutTotal);
  }

}
