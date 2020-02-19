import { Component } from '@angular/core';
import {
    DynamicDialogRef
} from 'primeng/api';

import { InnerDialogComponent } from './inner-dialog/inner-dialog.component';

@Component({
  selector: 'app-dialog-app',
  templateUrl: './dialogA.component.html',
  styleUrls: ['./dialogA.component.css'],
 })
export class DialogAComponent {

  constructor(public activeModal: DynamicDialogRef ) { }

  close() {
    this.activeModal.close();
  }

  
}