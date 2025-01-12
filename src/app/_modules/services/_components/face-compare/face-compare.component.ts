import { ChangeDetectorRef, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FaceCompareService } from '../../../../_services/faceCompare/face-compare.service';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../../../_services/snackbar/snackbar.service';
import { ServiceHeaderComponent } from '../service-header/service-header.component';
import { ResultComponent } from '../result/result.component';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fin-face-compare',
  templateUrl: './face-compare.component.html',
  styleUrl: './face-compare.component.scss'
})
export class FaceCompareComponent {
  breadcrumbs = [
    {
      label: 'Services',
      link: '/main/services'
    },
    {
      label: 'Face Compare',
      link: '/main/services/face-compare'
    }
  ];

  toggelitems = [
    { name: 'DL', isToggled: false, base64String: '', ngModelName: 'dl' },
    { name: 'PAN', isToggled: false, base64String: '', ngModelName: 'pan' },
    { name: 'Voter', isToggled: false, base64String: '', ngModelName: 'voter' },
    { name: 'Aadhaar', isToggled: false, base64String: '', ngModelName: 'aadhaar' },
    { name: 'Passport', isToggled: false, base64String: '', ngModelName: 'passport' },
    { name: 'Other', isToggled: false, base64String: '', ngModelName: 'other' }
  ];

  base64LiveImage: any;
  @ViewChild('fcForm') fcForm!: NgForm;
  @ViewChild('serviceHeader') serviceHeader!: ServiceHeaderComponent;
  serviceHeaderForm: any;

  /**
   * constructor
   * @param cd 
   * @param faceCompareService 
   */
  constructor(
    private cd: ChangeDetectorRef,
    private faceCompareService: FaceCompareService,
    private snackbarService: SnackbarService,
    private matDialog: MatDialog
  ) { }

  onHeaderChange(event: any) { 
    if (event) {
     this.serviceHeader = event;
    }
  }
  /**
   * checkbox handler
   * @param index 
   * @param event 
   */
  toggleItem(index: number, event: boolean) {
    this.toggelitems[index].isToggled = event;
    if (!event) {
      this.toggelitems[index].base64String = '';
    }
  }

  /**
   * file change handler
   * @param event 
   * @param index 
   */
  onFileChange(event: Event, index: number): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.toggelitems[index].base64String = reader.result as string;
        this.cd.markForCheck();
      };
    }
  }

  /**
   * live image change handler
   * @param event 
   */
  onLiveImageChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.base64LiveImage = reader.result as string;
      };
    }
  }

  /**
   * submit handler
   * @param form 
   */
  onSubmit(form: any): void {
    let i = 1;
    let data: { [key: string]: string } = {};

    this.toggelitems.forEach(item => {
      if (item.base64String) {
        data[`${item.name}`] = item.base64String ? item.base64String.split(',')[1] : '';
        i++;
      }
      data[`${'liveImage'}`] = this.base64LiveImage ? this.base64LiveImage.split(',')[1] : '';
    });

    data = {
      ...data,
      ...this.serviceHeaderForm
    }

    this.faceCompareService.saveFaceCompare(data).subscribe({
      next: (res: any) => {
        if(res.response_code === '101') {
          let request = {};
          for (const element in res.imageid) {
            request = {
              ...request,
              [element] : this.faceCompareService.getImagePath({imagepath: res.imageid[element]})
            }
          }
          forkJoin(request).subscribe((imageRes: any) => {
            this.openResultDialog(res, imageRes);
            this.resetForm();
            this.serviceHeader.reset();
            this.snackbarService.successSnackbar(res.response_message);
          });
        }
      },
      error: (err: any) => {
        this.snackbarService.errorSnackbar(err.error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  /**
   * Mat Dialog
   * @param data 
   */
  openResultDialog(data: any, imagePath: any) {
    this.matDialog.open(ResultComponent, {
      width: '80vw',
      height: 'auto',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data:{
        overView: data.result.cf_overview,
        result: data.result.cf_result,
        imagePath: imagePath
      }
    });  
  }

  /**
   * reset form
   */
  resetForm() {
    this.fcForm.reset();
    this.toggelitems.forEach(item => {
      item.isToggled = false;
      item.base64String = '';
    });
  }
}