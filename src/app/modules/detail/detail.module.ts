import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MaterialModule } from 'app/material.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MaterialModule
  ]
})
export class DetailModule { }
