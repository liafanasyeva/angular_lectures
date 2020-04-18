import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { CatchButtonComponent } from './catch-button/catch-button.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [CatchButtonComponent, EditButtonComponent],
  imports: [
    CommonModule, FormsModule, AppRoutingModule,
  ],
  exports: [CatchButtonComponent, EditButtonComponent]
})
export class ButtonModule { }
