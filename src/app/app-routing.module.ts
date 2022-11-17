import { CongratulationsComponent } from './components/others/congratulations/congratulations.component';
import { CheckoutComponent } from './components/others/checkout/checkout.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { EditPerfilComponent } from './components/user/edit-perfil/edit-perfil.component';
import { AddEditProductComponent } from './components/product/add-edit-product/add-edit-product.component';
import { PanelComponent } from './components/menu-principal/panel/panel.component';
import { SidenavComponent } from './components/menu-principal/sidenav/sidenav.component';
import { DashboardComponent } from './components/menu-principal/dashboard/dashboard.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/principal/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/others/cart/cart.component';
import { ShopComponent } from './components/others/shop/shop.component';
import { ListSellsComponent } from './components/menu-principal/list-sells/list-sells.component';
import { NewCategoryComponent } from './components/product/new-category/new-category.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'cart', component:  CartComponent },
  { path: 'shop', component:  ShopComponent },
  { path: 'checkout', component:  CheckoutComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'add-category', component: NewCategoryComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: 'sidenav', component:  SidenavComponent},
  { path: 'gracias', component:  CongratulationsComponent},
  { path: 'panel', component:  PanelComponent,
    children:[
      { path: '', redirectTo:'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component:  DashboardComponent},
      { path: 'productos', component:  ListProductComponent},
      { path: 'perfil', component:  EditPerfilComponent},
      { path: 'pedidos', component:  ListSellsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
