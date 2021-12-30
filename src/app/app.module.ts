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
import { DirectoryComponent } from './components/content/directory/directory.component';
import { LoginComponent } from './components/content/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/content/admin/admin.component';
import { BasketComponent } from './components/content/basket/basket.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SignUpComponent } from './components/content/sign-up/sign-up.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputErrorsComponent } from './components/content/input-errors/input-errors.component';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './components/content/cart/cart.component';
import { ShopComponent } from './components/content/shop/shop.component';
import { CartInfoComponent } from './components/content/cart-info/cart-info.component';
import { ModalBehaviorComponent } from './components/content/modal-behavior/modal-behavior.component';

const appRoutes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImmersionComponent,
    DirectoryComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    BasketComponent,
    SignUpComponent,
    InputErrorsComponent,
    CartComponent,
    ShopComponent,
    CartInfoComponent,
    ModalBehaviorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
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
    MatMenuModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
