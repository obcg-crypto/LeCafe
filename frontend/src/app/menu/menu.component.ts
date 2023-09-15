import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasketService } from '../services/basket.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit  {

  boissons : boolean = true;
  croissant : boolean = false;
  pain : boolean = false;
  omelettes : boolean = false;
  indice: number = 0;

  croissantList!: any[];
  boissonList!: any[];
  painList!: any[];
  omelettesList!: any[];

  ingredientBoissons: any[] = [];
  ingredientCroissant: any[] = [];
  ingredientPain: any[] = [];
  ingredientOmelettes: any[] = [];

  panier: any[] = [];


  toppingsOmelettes = new FormControl('');
  toppingListOmelettes: string[] = [];

  toppingsBoissons = new FormControl('');
  toppingListBoissons: string[] = [];

  toppingsCroissant = new FormControl('');
  toppingListCroissant: string[] = [];

  toppingsPain = new FormControl('');
  toppingListPain: string[] = [];




  constructor(
    private basketService:BasketService
  ){

  }

  ngOnInit() {

    if(this.panier.length != 0){
      this.panier = JSON.parse(localStorage.getItem('panier')!);
    }
    

    this.basketService.getBoissonIngredient().subscribe((data) => {
      this.ingredientBoissons = Object.values(data);
      this.ingredientBoissons = this.ingredientBoissons[0];
      this.ingredientBoissons.forEach(element => {
        this.toppingListBoissons.push(element.nom + ':' + element.cout)
      });
    });

    this.basketService.getCroissantIngredient().subscribe((data) => {
      this.ingredientCroissant = Object.values(data);
      this.ingredientCroissant = this.ingredientCroissant[0];

      this.ingredientCroissant.forEach(element => {
        this.toppingListCroissant.push(element.nom + ':' + element.cout)
      });
    });

    this.basketService.getPainIngredient().subscribe((data) => {
      this.ingredientPain = Object.values(data);
      this.ingredientPain = this.ingredientPain[0];

      this.ingredientPain.forEach(element => {
        this.toppingListPain.push(element.nom + ':' + element.cout)
      });
    });

    this.basketService.getOmeletteIngredient().subscribe((data) => {
      this.ingredientOmelettes = Object.values(data);
      this.ingredientOmelettes = this.ingredientOmelettes[0];
      this.ingredientOmelettes.forEach(element => {
        this.toppingListOmelettes.push(element.nom + ':' + element.cout)
      });
  
    });
  
    
    this.basketService.getCroissant().subscribe((data) => {
      this.croissantList = Object.values(data);
      this.croissantList = this.croissantList[0]
    });

    this.basketService.getBoisson().subscribe((data) => {
      this.boissonList = Object.values(data);
      this.boissonList = this.boissonList[0]
    });

    this.basketService.getOmelette().subscribe((data) => {
      this.omelettesList = Object.values(data);
      this.omelettesList = this.omelettesList[0]
    });

    this.basketService.getPain().subscribe((data) => {
      this.painList = Object.values(data);
      this.painList = this.painList[0]
    });

  }



  showBoissons() {
    this.boissons = true;
    this.croissant = false;
    this.pain = false;
    this.omelettes = false;

  }

  showCroissant() {
    this.boissons = false;
    this.croissant = true;
    this.pain = false;
    this.omelettes = false;
  }

  showPain() {
    this.boissons = false;
    this.croissant = false;
    this.pain = true;
    this.omelettes = false;
  }

  showOmelettes() {
    this.boissons = false;
    this.croissant = false;
    this.pain = false;
    this.omelettes = true;
  }
  
  incrementerIndice() {
    this.indice++;
  }

  remplirPanierBoisson(index : number) {
    const boisson = Object.assign({}, this.boissonList[index]);
    if(this.toppingsBoissons.value == ""){
      boisson.ingredient = 0;
    }
    else{
      boisson.ingredient = this.toppingsBoissons.value;
    }
    this.panier.push(boisson);
  }

  remplirPanierCroissant(index : number) {
    const croissant = Object.assign({}, this.croissantList[index]);
    if(this.toppingsBoissons.value == ""){
      croissant.ingredient = 0;
    }
    else{
      croissant.ingredient = this.toppingsCroissant.value;
    }
    this.panier.push(croissant);
  }
  remplirPanierPain(index : number) {
    const pain = Object.assign({}, this.painList[index]);
    if(this.toppingsBoissons.value == ""){
      pain.ingredient = 0;
    }
    else{
      pain.ingredient = this.toppingsPain.value;
    }
    this.panier.push(pain);
  }
  remplirPanierOmelette(index : number) {
    const omelettes = Object.assign({}, this.omelettesList[index]);
    if(this.toppingsBoissons.value == ""){
      omelettes.ingredient = 0;
    }
    else{
      omelettes.ingredient = this.toppingsOmelettes.value;
    }
    this.panier.push(omelettes);
  }
  envoyerPanier(){
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }
}
