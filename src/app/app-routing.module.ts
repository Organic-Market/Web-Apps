import { ListCategoryComponent } from './components/product/list-category/list-category.component';
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
import { RequestLoginComponent } from './components/user/request-login/request-login.component';
import { LoginAgricultorComponent } from './components/user/login-agricultor/login-agricultor.component';
import { LoginMayoristaComponent } from './components/user/login-mayorista/login-mayorista.component';
import { PanelMComponent } from './components/menu-principal/panel-m/panel-m.component';
import { DashboardMComponent } from './components/menu-principal/dashboard-m/dashboard-m.component';
import { SidenavMComponent } from './components/menu-principal/sidenav-m/sidenav-m.component';


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
  { path: 'sidenav-m', component:  SidenavMComponent},
  { path: 'gracias', component:  CongratulationsComponent},
  { path: 'request-login', component:  RequestLoginComponent},
  { path: 'login-agricultor', component:  LoginAgricultorComponent},
  { path: 'login-mayorista', component:  LoginMayoristaComponent},
  { path: 'panel', component:  PanelComponent,
    children:[
      { path: '', redirectTo:'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component:  DashboardComponent},
      { path: 'productos', component:  ListProductComponent},
      { path: 'categorias', component:  ListCategoryComponent},
      { path: 'perfil', component:  EditPerfilComponent},
    ]
  },
  { path: 'panel-m', component:  PanelMComponent,
    children:[
      { path: '', redirectTo:'dashboard-m', pathMatch: 'full' },
      { path: 'dashboard-m', component:  DashboardMComponent},
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
