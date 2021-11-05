import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalculatorComponent } from './components/content/calculator/calculator.component';
import { ImmersionComponent } from './components/content/immersion/immersion.component';
import { ComparisonComponent } from './components/content/comparison/comparison.component';
import { ShopComponent } from './components/content/shop/shop.component';
import { DirectoryComponent } from './components/content/directory/directory.component';
import { LoginComponent } from './components/content/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/content/cart/cart.component';
import { AdminComponent } from './components/content/admin/admin.component';
import { ModalComponent } from './components/content/modal/modal.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'immersion', component: ImmersionComponent},
  {path: 'shop', component: ShopComponent, children:[
    {path: 'cart', component: CartComponent}
  ]},
  {path: 'directory', component: DirectoryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorComponent,
    ImmersionComponent,
    ComparisonComponent,
    ShopComponent,
    DirectoryComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    AdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
