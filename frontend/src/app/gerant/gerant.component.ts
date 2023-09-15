import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { BasketService } from '../services/basket.service';
import { contains } from 'jquery';
import { AddIngredientComponent } from '../add-ingredient/add-ingredient.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss']
})
export class GerantComponent {

  croissants!: any[];
  pains! : any[];
  omelettes! : any[];
  boissons! : any[];
  boissonSection : boolean = true;
  croissantSection : boolean = false;
  painSection : boolean = false;
  omeletteSection : boolean = false;
  menuSection : boolean = true;
  profilSection : boolean = false;
 
  toppingListOmelettes: string[] = []; 
  toppingListBoissons: string[] = [];
  toppingListCroissant: string[] = [];
  toppingListPain: string[] = [];

  ingredientBoissons: any[] = [];
  ingredientCroissant: any[] = [];
  ingredientPain: any[] = [];
  ingredientOmelettes: any[] = [];

  userForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    statut: ['', Validators.required],
  });


  constructor(
    public dialog: MatDialog,
    private basketService : BasketService,
    private fb: FormBuilder
  ){

  }

  ngOnInit() {
    this.basketService.getCroissant().subscribe((data) => {
      this.croissants = Object.values(data);
      this.croissants = this.croissants[0];
    })
    this.basketService.getBoisson().subscribe((data) => {
      this.boissons = Object.values(data);
      this.boissons = this.boissons[0];
    })
    this.basketService.getPain().subscribe((data) => {
      this.pains = Object.values(data);
      this.pains = this.pains[0];
    })
    this.basketService.getOmelette().subscribe((data) => {
      this.omelettes = Object.values(data);
      this.omelettes = this.omelettes[0];
    })

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
  
  }

  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '800px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  
  openDialog2(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {
      width: '800px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  showBoissons() {
    this.boissonSection = true;
    this.croissantSection = false;
    this.painSection = false;
    this.omeletteSection = false;

  }

  showCroissant() {
    this.boissonSection = false;
    this.croissantSection = true;
    this.painSection = false;
    this.omeletteSection = false;
  }

  showPain() {
    this.boissonSection = false;
    this.croissantSection = false;
    this.painSection = true;
    this.omeletteSection = false;
  }

  showOmelettes() {
    this.boissonSection = false;
    this.croissantSection = false;
    this.painSection = false;
    this.omeletteSection = true;
  }

  deleteIngredientOmelettes(index : number) {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteIngredient(this.ingredientOmelettes[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteIngredientPain(index : number) {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteIngredient(this.ingredientPain[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteIngredientCroissant(index : number) {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteIngredient(this.ingredientBoissons[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteIngredientBoissons(index : number) {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteIngredient(this.ingredientBoissons[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteBoisson(index : number) {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteItem(this.boissons[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteCroissant(index : number){
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteItem(this.croissants[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deletePain(index : number){
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteItem(this.pains[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  deleteOmelettes(index : number){
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(confirmation){
      this.basketService.deleteItem(this.omelettes[index]._id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  showMenu(){
    this.menuSection = true;
    this.profilSection = false;
  }

  showProfils(){
    this.menuSection = false;
    this.profilSection = true;
  }

  createUser() {
    this.basketService.newUser(
      this.userForm.value.login!,
      this.userForm.value.password!,
      this.userForm.value.statut!
    ).subscribe((data) => {
      console.log(data);
    });

    location.reload();
  }
}
