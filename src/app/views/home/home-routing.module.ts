import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplashComponent} from "../splash/splash.component";
import {LoginComponent} from "../auth/login/login.component";
import {CreateAccountComponent} from "../auth/create-account/create-account.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateAccountComponent
  },
  {
    path: 'layout',
    loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
