import { CongratulationsComponent } from './components/congratulations/congratulations.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { PanelComponent } from './components/panel/panel.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { ListSellsComponent } from './components/list-sells/list-sells.component';


const routes: Routes = [
  { path: '', redirectTo: 'home ', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'cart', component:  CartComponent },
  { path: 'shop', component:  ShopComponent },
  { path: 'checkout', component:  CheckoutComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: 'sidenav', component:  SidenavComponent},
  { path: 'gracias', component:  CongratulationsComponent},
  { path: 'panel', component:  PanelComponent,
    children:[
      { path: '', redirectTo:'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component:  DashboardComponent},
      { path: 'productos', component:  ListProductComponent},
      { path: 'perfil', component:  EditPerfilComponent},
      { path: 'ventas', component:  ListSellsComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
