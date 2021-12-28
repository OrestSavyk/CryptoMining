import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/content/admin/admin.component';
import { BasketComponent } from './components/content/basket/basket.component';
import { CartInfoComponent } from './components/content/cart-info/cart-info.component';
import { ComparisonComponent } from './components/content/comparison/comparison.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { DirectoryComponent } from './components/content/directory/directory.component';
import { HomeComponent } from './components/content/home/home.component';
import { ImmersionComponent } from './components/content/immersion/immersion.component';
import { LoginComponent } from './components/content/login/login.component';
import { ShopComponent } from './components/content/shop/shop.component';
import { SignUpComponent } from './components/content/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'immersion', component: ImmersionComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'comp', component: ComparisonComponent },
  { path: 'shop/:id', component: CartInfoComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
