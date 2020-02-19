import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { Observable } from 'rxjs';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class DialogAService {

  constructor(
              private dialogService: DialogService,
             ) {
     }

  /**
   * Display the diaplog A modal
   *
  
   */
  public displayLoginModal(): Observable<any> {
     
      // get the home reference name
      this.dialogService['displayLoginModal'] = 1;
      const modalRef: DynamicDialogRef = this.dialogService.open(DialogAComponent, {
        showHeader: false,
        closeOnEscape: false,
      });
          return modalRef.onClose;
  }
}