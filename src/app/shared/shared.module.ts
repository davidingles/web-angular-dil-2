import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedError404Component } from './pages/error404/pages.component';



@NgModule({
  declarations: [
    SharedError404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedError404Component
  ]
})
export class SharedModule { }
