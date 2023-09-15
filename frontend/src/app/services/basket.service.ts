import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface ItemData {
  nom: string;
  cout: number;
  description: string;
  image: string;
  typeMenu: string;
}

interface IngredientData {
  nom: string;
  cout: string;
  description: string;
  typeItem: string;
}

interface CommandeData {
  numeroTable: number;
  montant: number;
  statut: string;
  modePaiement: string;
  item: any[];
}

interface User {
  login: string;
  password: string;
  statut: string;
}

interface Login {
  login: string;
  password: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  createItemUrl = 'http://localhost:3000/item';
  createUserUrl = 'http://localhost:3000/user/singnUp';
  loginUserUrl = 'http://localhost:3000/user/login';
  createIngredientUrl = 'http://localhost:3000/ingredient';
  createCommandeUrl = 'http://localhost:3000/commande';
  loadCroissantUrl = 'http://localhost:3000/item/croissant';
  loadBoissonUrl = 'http://localhost:3000/item/boisson';
  loadPainUrl = 'http://localhost:3000/item/pain';
  loadOmeletteUrl = 'http://localhost:3000/item/omelette';
  loadCroissantIngredientUrl = 'http://localhost:3000/ingredient/croissant';
  loadBoissonIngredientUrl = 'http://localhost:3000/ingredient/boisson';
  loadPainIngredientUrl = 'http://localhost:3000/ingredient/pain';
  loadOmeletteIngredientUrl = 'http://localhost:3000/ingredient/omelette';
  loadCommandeUrl = 'http://localhost:3000/commande';
  updateCommandeUrl = 'http://localhost:3000/commande/';
  deleteIngredientUrl = 'http://localhost:3000/ingredient/';
  deleteItemUrl = 'http://localhost:3000/item/'

  

  constructor(private http: HttpClient) { }


  newItem(
    nom: string,
    cout: number,
    description: string,
    image: string,
    typeMenu: string
  ): Observable<any> {
    const itemData: ItemData = {
      nom: nom,
      cout:cout,
      description: description,
      image:image,
      typeMenu:typeMenu
    };
    return this.http.post(this.createItemUrl, itemData, httpOptions);
  }

  newIngredient(
    nom: string,
    cout: string,
    description: string,
    typeItem: string
  ): Observable<any> {
    const ingredientData: IngredientData = {
      nom: nom,
      cout:cout,
      description: description,
      typeItem:typeItem
    };
    return this.http.post(this.createIngredientUrl, ingredientData, httpOptions);
  }

  newCommande(
    numeroTable: number,
    montant: number,
    statut: string,
    modePaiement: string,
    item: any[]
  ): Observable<any> {
    const commandeData: CommandeData = {
      numeroTable: numeroTable,
      montant:montant,
      statut: statut,
      modePaiement:modePaiement,
      item:item
    };
    return this.http.post(this.createCommandeUrl, commandeData, httpOptions);
  }

  newUser(
    login: string,
    password: string,
    statut: string
  ): Observable<any> {
    const user: User = {
      login: login,
      password:password,
      statut: statut
    };
    return this.http.post(this.createUserUrl, user, httpOptions);
  }

  login(
    login: string,
    password: string,
  ): Observable<any> {
    const loginData: Login = {
      login: login,
      password:password,
    };
    return this.http.post(this.loginUserUrl, loginData, httpOptions);
  }



  updateCommand(
    numeroTable: number,
    montant: number,
    statut: string,
    modePaiement: string,
    item: any[],
    idCommand: string
  ): Observable<any> {
    const commandeData: CommandeData = {
      numeroTable: numeroTable,
      montant:montant,
      statut: statut,
      modePaiement:modePaiement,
      item:item
    };
    return this.http.put(this.updateCommandeUrl + idCommand, commandeData, httpOptions);
  }


  getCommande(): Observable<any> {
    return this.http.get(this.loadCommandeUrl);
  }

  getCroissant(): Observable<any> {
    return this.http.get(this.loadCroissantUrl);
  }

  getCroissantIngredient(): Observable<any> {
    return this.http.get(this.loadCroissantIngredientUrl);
  }

  getBoisson(): Observable<any> {
    return this.http.get(this.loadBoissonUrl);
  }

  getBoissonIngredient(): Observable<any> {
    return this.http.get(this.loadBoissonIngredientUrl);
  }

  getPain(): Observable<any> {
    return this.http.get(this.loadPainUrl);
  }

  getPainIngredient(): Observable<any> {
    return this.http.get(this.loadPainIngredientUrl);
  }

  getOmelette(): Observable<any> {
    return this.http.get(this.loadOmeletteUrl);
  }

  getOmeletteIngredient(): Observable<any> {
    return this.http.get(this.loadOmeletteIngredientUrl);
  }

  deleteIngredient(idIngredient: string): Observable<any> {
    return this.http.delete(this.deleteIngredientUrl+idIngredient);
  }

  deleteItem(idItem: string): Observable<any> {
    return this.http.delete(this.deleteItemUrl+idItem);
  }
}
