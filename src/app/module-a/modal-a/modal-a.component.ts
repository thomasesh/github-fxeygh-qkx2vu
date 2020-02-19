import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-a',
  templateUrl: './modal-a.component.html',
  styleUrls: ['./modal-a.component.css']
})
export class ModalAComponent implements OnInit {

  
  constructor(public activeModal: DynamicDialogRef ) { }

  close() {
    this.activeModal.close();
  }
}