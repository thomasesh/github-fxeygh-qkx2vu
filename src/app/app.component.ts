import { Component } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from 'primeng/api';
import {ModalAService} from './module-a/modal-a.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  resultA: any;
  resultB: any;

  constructor(private modalAService: ModalAService) {

  }

  opentModalA() {
    this.modalAService.displayModalA().subscribe(
      (result) => {
        console.log("displayModalA: Closed with:", result);
        this.resultA = result;
    },
      (error) => {
        console.log("idleModal: Error:", error);
        this.resultA = 'Error';
      }
    );
  }
}
