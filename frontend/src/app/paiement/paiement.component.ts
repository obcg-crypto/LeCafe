import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {

  
  commandeForm = this.fb.group({
    numeroTable: [0, Validators.required]
  });

  panier : any[] = [];
  montant : number = 0;


  ngOnInit(){
    this.panier = JSON.parse(localStorage.getItem('panier')!);
    
    this.montant = parseInt(localStorage.getItem('montant')!);
  
    
    console.log(this.montant);
  }

  constructor(
    private basketService : BasketService,
    private fb: FormBuilder,
    private router: Router
  ){}

  passerCommandeEnLigne() {
    
    this.basketService.newCommande(
      this.commandeForm.value.numeroTable!,
      this.montant,
      '',
      'enLigne',
      this.panier

    ).subscribe((data) => {
      console.log(data);
    })

    alert('Commande passée avec success !');
    localStorage.removeItem('panier');
    this.router.navigate(['/menu']);
  }


  passerCommandeHorsLigne() {
    
    this.basketService.newCommande(
      this.commandeForm.value.numeroTable!,
      this.montant,
      '',
      'cash',
      this.panier

    ).subscribe((data) => {
      console.log(data);
    })

    alert('Commande passée avec success !');
    localStorage.removeItem('panier');
    this.router.navigate(['/menu']);
  }

}
