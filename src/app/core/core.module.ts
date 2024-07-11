import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
