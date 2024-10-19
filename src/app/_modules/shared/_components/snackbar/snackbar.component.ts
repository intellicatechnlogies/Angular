import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AppSettingService } from '../../../../_services/_appSetting/app-setting.service';
import { SnackbarService } from '../../../../_services/snackbar/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fin-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  message: string;
  type: 'success' | 'error' | 'warning';
  showHelperBlock?: boolean;
  helperNumber?: string;
  helperHeading?: string;
  theme!: string;
  subscriptions: Subscription[] = [];

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private appSetting: AppSettingService, private snackbar: SnackbarService) {
    this.message = data.message;
    this.type = data.type;
    this.showHelperBlock = data.showHelperBlock;
    this.helperNumber = data.helperNumber;
    this.helperHeading = data.helperHeading;

    let themeSub = this.appSetting.appTheme$.subscribe((theme: any) => this.theme = theme);
    this.subscriptions.push(themeSub);
  }

  copyToClipboard() {
    if (this.helperNumber) {
      navigator.clipboard.writeText(this.helperNumber).then(() => {
        this.showHelperBlock = false;
        this.snackbar.successSnackbar(`${this.helperHeading} copied to clipboard`);
      }).catch(() => {
        this.snackbar.errorSnackbar('Could not copy Reference Number');
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
