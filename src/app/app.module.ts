import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { v4 as uuidv1 } from '../../node_modules/uuid';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { BasketComponent } from './components/content/basket/basket.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogDataExampleDialogComponent } from './components/content/comparison/dialog-data-example-dialog/dialog-data-example-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { InputErrorStateMatcherExampleComponent } from './components/content/comparison/input-error-state-matcher-example/input-error-state-matcher-example.component';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { ModalBehaviorComponent } from './components/content/modal-behavior/modal-behavior.component';
import { ErrorStateMatcherComponent } from './components/content/error-state-matcher/error-state-matcher.component';
import { MatMenuModule } from '@angular/material/menu';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'immersion', component: ImmersionComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'comp', component: ComparisonComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImmersionComponent,
    ComparisonComponent,
    ShopComponent,
    DirectoryComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    AdminComponent,
    BasketComponent,
    DialogDataExampleDialogComponent,
    InputErrorStateMatcherExampleComponent,
    ModalBehaviorComponent,
    ErrorStateMatcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatStepperModule,
    MatIconModule,
    MatMenuModule
    // MatPaginatorIntl
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
