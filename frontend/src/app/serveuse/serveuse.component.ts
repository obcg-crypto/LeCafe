import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-serveuse',
  templateUrl: './serveuse.component.html',
  styleUrls: ['./serveuse.component.scss']
})
export class ServeuseComponent {
  listeCommande: any[] = [];
  commande : any[] = [];
  
  constructor(
    private basketService : BasketService
  ){}

  ngOnInit() { 
    this.basketService.getCommande().subscribe((data) => {
      
      this.commande = Object.values(data);
      this.commande = this.commande[0];
      data = Object.values(data);
      for (var element of data[0]) {
        this.listeCommande = this.listeCommande.concat(element.item);
      }
      console.log(this.commande)
    });
  }

  cuisiner(index : number) {
    this.basketService.updateCommand(
      this.commande[index].numeroTable,
      this.commande[index].montant,
      'servi',
      this.commande[index].modePaiement,
      this.commande[index].item,
      this.commande[index]._id
    ).subscribe((data) => {
      console.log(data);
    });

    location.reload();
  }
}
