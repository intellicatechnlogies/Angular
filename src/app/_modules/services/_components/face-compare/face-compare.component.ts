import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'fin-face-compare',
  templateUrl: './face-compare.component.html',
  styleUrl: './face-compare.component.scss'
})
export class FaceCompareComponent {
  breadcrumbs = [
    {
      label: 'Services',
      link: '/main/services/face-compare'
    }
  ];
  base64UploadImage: string | undefined;
  base64LiveImage: string | undefined;
  data: any;

  constructor(private http: HttpClient) {}

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.base64UploadImage = reader.result as string;
      };
    }
  }

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

  onSubmit(form: NgForm, formId: string, event: Event): void {
    event.preventDefault(); // Prevent default form submission
        
    // console.log(this.base64UploadImage);
    // console.log(this.base64LiveImage);
    // console.log('Form ID:', formId);
    // console.log('Form Valid:', form.valid);
    // console.log('Form Errors:', form.errors); 

    // // Debugging each control's validity
    // for (const controlName in form.controls) {
    //   if (form.controls.hasOwnProperty(controlName)) {
    //     const control = form.controls[controlName];
    //     console.log(`Control ${controlName} - Valid:`, control.valid);
    //     console.log(`Control ${controlName} - Value:`, control.value);
    //     console.log(`Control ${controlName} - Errors:`, control.errors);  // Display any control-specific errors
    //   }
    // }

    if (form.valid) {
      
      // // Handle different forms based on formId
      // if (formId === 'Dl') {
      //   // Handle PAN form data
      //   const dlData = form.value;
      //   const img_1 = dlData.imageInput;
      //   console.log('img_1 :', img_1);

      // } else if (formId === 'RC') {
      //   // console.log(this.rcNumber);
      //   // Handle RC form data
      //   const rcData = form.value;
      //   console.log('RC Data:', rcData);

      //   // Access the RC number
      //   const rcNumber = rcData.rcNumber;
      //   console.log('RC Number:', rcNumber);
      // }

      // You can now send this data to an API or further processing
      this.getData();
    } else {
      console.log('Form is invalid');
    }
  }

  //api call
  private apiUrl = 'https://www.intellicatechnology.com/cface'; 

  getData(): void {
    const headers = new HttpHeaders({
      'api-key': 'abcd',  // Replace with your API key
      'api-id': 'cdef',    // Replace with your API ID
      'Content-Type': 'application/json' 
    });

    const data = {
      img1: this.base64UploadImage ? this.base64UploadImage.replace('data:image/png;base64,', '') : '',
      img2: this.base64LiveImage ? this.base64LiveImage.replace('data:image/png;base64,', '') : '',
    }; 

    this.http.post(this.apiUrl, data, { headers }).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}