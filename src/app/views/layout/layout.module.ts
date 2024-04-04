import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FocusComponent } from './focus/focus.component';
import { InsightComponent } from './insight/insight.component';
import { CompletedComponent } from './completed/completed.component';
import { AllComponent } from './all/all.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LayoutComponent,
    FocusComponent,
    InsightComponent,
    CompletedComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
