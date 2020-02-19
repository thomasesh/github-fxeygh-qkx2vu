import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { ModalAComponent } from './modal-a/modal-a.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalAComponent
  ],
  entryComponents: [ModalAComponent],
  providers: [
    DialogService,
    DynamicDialogRef,
  ]
})
export class ModuleAModule { }