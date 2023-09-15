import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddItemComponent>,
    private basketService: BasketService,
    private http: HttpClient
  ) {

  }

  ingredientForm = this.fb.group({
    nom: ['', Validators.required],
    cout: ['', Validators.required],
    description: ['', Validators.required],
    typeItem: ['', Validators.required]
  });


  onNoClick(): void {
    this.dialogRef.close();
  }

  saveIngredient() {


    var nom = '';
    var cout = '';
    var description = '';
    var typeItem = '';

    nom = this.ingredientForm.value.nom!;
    cout = this.ingredientForm.value.cout!;
    description = this.ingredientForm.value.description!;
    
    if(this.ingredientForm.value.typeItem == "1"){
      typeItem = 'Boisson Chaude'
    }
    else if(this.ingredientForm.value.typeItem == "2"){
      typeItem = 'Croissant'
    }
    else if(this.ingredientForm.value.typeItem == "3"){
      typeItem = 'Pain'
    }
    else if(this.ingredientForm.value.typeItem == "4"){
      typeItem = 'Omelettes'
    }

    this.basketService.newIngredient(
      nom,
      cout,
      description,
      typeItem
    ).subscribe((response) => {
      console.log(response);
    });

    location.reload();
  }

}
