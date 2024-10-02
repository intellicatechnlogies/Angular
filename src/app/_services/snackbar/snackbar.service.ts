import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../_modules/shared/_components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  successSnackbar(message: string, referenceNumber?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
      data: {
        message,
        type: 'success',
        ...(referenceNumber ?
          { showHelperBlock: true, helperNumber: referenceNumber, helperHeading: 'Reference Number' } :
          { showHelperBlock: false }
        )
      },
      panelClass: 'snackbar-custom'
    });
  }

  errorSnackbar(message: string, traceId?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
      data: {
        message,
        type: 'error',
        ...(traceId ?
          { showHelperBlock: true, helperNumber: traceId, helperHeading: 'TraceId' } :
          { showHelperBlock: false }
        )
      },
      panelClass: 'snackbar-custom'
    });
  }

  warningSnackbar(message: string, traceId?: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
      data: {
        message,
        type: 'warning',
        ...(traceId ?
          { showHelperBlock: true, helperNumber: traceId, helperHeading: 'TraceId' } :
          { showHelperBlock: false }
        )
      },
      panelClass: 'snackbar-custom'
    });
  }
}
