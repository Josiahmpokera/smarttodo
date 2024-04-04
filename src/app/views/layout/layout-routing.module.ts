import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {FocusComponent} from "./focus/focus.component";
import {InsightComponent} from "./insight/insight.component";
import {CompletedComponent} from "./completed/completed.component";
import {AllComponent} from "./all/all.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'focus',
    pathMatch: 'full'
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'focus',
        component: FocusComponent
      },

      {
        path: 'insight',
        component: InsightComponent
      },

      {
        path: 'completed',
        component: CompletedComponent
      },

      {
        path: 'all',
        component: AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
