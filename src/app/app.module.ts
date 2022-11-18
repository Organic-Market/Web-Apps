import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/principal/home/home.component';
import { NavbarComponent } from './components/principal/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/others/cart/cart.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AddEditProductComponent } from './components/product/add-edit-product/add-edit-product.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { SidenavComponent } from './components/menu-principal/sidenav/sidenav.component';
import { BodyComponent } from './components/menu-principal/body/body.component';
import { PanelComponent } from './components/menu-principal/panel/panel.component';
import { EditPerfilComponent } from './components/user/edit-perfil/edit-perfil.component';
import { CongratulationsComponent } from './components/others/congratulations/congratulations.component';
import { ShopComponent } from './components/others/shop/shop.component';
import { CheckoutComponent } from './components/others/checkout/checkout.component';
import { ListSellsComponent } from './components/menu-principal/list-sells/list-sells.component';
import { DashboardComponent } from './components/menu-principal/dashboard/dashboard.component';
import { NewCategoryComponent } from './components/product/new-category/new-category.component';
import { LoginAgricultorComponent } from './components/user/login-agricultor/login-agricultor.component';
import { LoginMayoristaComponent } from './components/user/login-mayorista/login-mayorista.component';
import { RequestLoginComponent } from './components/user/request-login/request-login.component';
import { BodyMComponent } from './components/menu-principal/body-m/body-m.component';
import { DashboardMComponent } from './components/menu-principal/dashboard-m/dashboard-m.component';
import { PanelMComponent } from './components/menu-principal/panel-m/panel-m.component';
import { SidenavMComponent } from './components/menu-principal/sidenav-m/sidenav-m.component';
import { ListCategoryComponent } from './components/product/list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CartComponent,
    AddEditProductComponent,
    ListProductComponent,
    EditProductComponent,
    SidenavComponent,
    BodyComponent,
    PanelComponent,
    EditPerfilComponent,
    CongratulationsComponent,
    ShopComponent,
    CheckoutComponent,
    ListSellsComponent,
    NewCategoryComponent,
    LoginAgricultorComponent,
    LoginMayoristaComponent,
    RequestLoginComponent,
    BodyMComponent,
    DashboardMComponent,
    PanelMComponent,
    SidenavMComponent,
    ListCategoryComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
