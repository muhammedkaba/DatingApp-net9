import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  private spinnerService = inject(NgxSpinnerService);

  busy(){
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: "ball-fussion",
      bdColor: "rgba(177,177,177,0)",
      color: "#AAAAAA"
    });
  }

  idle(){
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
