import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { ServeuseComponent } from './serveuse/serveuse.component';
import { CordonBleuComponent } from './cordon-bleu/cordon-bleu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { GerantComponent } from './gerant/gerant.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { PaiementComponent } from './paiement/paiement.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'cordon-bleu', component: CordonBleuComponent },
  { path: 'serveuse', component: ServeuseComponent },
  { path: 'gerant', component: GerantComponent },
  { path: 'paiement', component: PaiementComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    AboutComponent,
    BasketComponent,
    ServeuseComponent,
    CordonBleuComponent,
    GerantComponent,
    AddItemComponent,
    AddIngredientComponent,
    PaiementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
