import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BasketService } from '../services/basket.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddItemComponent>,
    private basketService: BasketService,
    private http: HttpClient
  ){

  }

  itemForm = this.fb.group({
    nom: ['', Validators.required],
    cout: [0, Validators.required],
    description: ['', Validators.required],
    image: [''],
    typeMenu: ['', Validators.required]
  });

  createItem(){
    var nom = '';
    var cout = 0;
    var description = '';
    var image = '';
    var typeMenu = '';

    nom = this.itemForm.value.nom!;
    cout = this.itemForm.value.cout!;
    description = this.itemForm.value.description!;
    image = this.itemForm.value.image!;
    image = '../../../assets/' + image.substring(12);
    
    if(this.itemForm.value.typeMenu == "1"){
      typeMenu = 'Boisson Chaude'
    }
    else if(this.itemForm.value.typeMenu == "2"){
      typeMenu = 'Croissant'
    }
    else if(this.itemForm.value.typeMenu == "3"){
      typeMenu = 'Pain'
    }
    else if(this.itemForm.value.typeMenu == "4"){
      typeMenu = 'Omelettes'
    }

    this.basketService.newItem(
      nom,
      cout,
      description,
      image,
      typeMenu
    ).subscribe((response) => {
      console.log(response);
    });

    location.reload();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post<any>('http://localhost:3000/upload', formData).subscribe(
        (response) => {
          // Handle success response
          console.log('File uploaded successfully.');
        },
        (error) => {
          // Handle error response
          console.error('File upload failed:', error);
        }
      );
    }
  }
}
