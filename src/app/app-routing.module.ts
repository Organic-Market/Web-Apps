<<<<<<< Updated upstream
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
=======
import { PanelComponent } from './components/panel/panel.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
>>>>>>> Stashed changes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'register', component:  RegisterComponent },
<<<<<<< Updated upstream
  { path: 'dashboard', component:  DashboardComponent },
  { path: '', component: ListProductComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: '**', component: ListProductComponent },

  

=======
  { path: 'sidenav', component:  SidenavComponent},
  { path: 'panel', component:  PanelComponent,
    children:[
      { path: 'dashboard', component:  DashboardComponent},
    ]
  },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
