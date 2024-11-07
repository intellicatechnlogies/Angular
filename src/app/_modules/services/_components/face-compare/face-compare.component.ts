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
  toggelitems = [
    { name: 'DL', isToggled: false },
    { name: 'PAN', isToggled: false },
    { name: 'Voter', isToggled: false },
    { name: 'Aadhaar', isToggled: false },
    { name: 'Passport', isToggled: false },
    { name: 'Other', isToggled: false }
  ];

  toggleItem(index: number, event: boolean) {

    this.toggelitems[index].isToggled = !this.toggelitems[index].isToggled;
    // const checkedItems = this.getCheckedItems();
    const checkedItems = this.toggelitems.filter(item => item.isToggled);
    this.checkedItemsLength = checkedItems.length;

  } 

  // base64UploadImage: string | undefined;
  base64LiveImage: string | undefined;
  base64UploadImages: { [key: string]: string } = {};
  checkedItemsLength: number = 0;
  data: any;

  constructor(private http: HttpClient) {}

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    const uploaded_image_toogle = file?(event.target as HTMLInputElement).id : '';
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // this.base64UploadImage = reader.result as string;
        // return reader.result as string;
        this.base64UploadImages[uploaded_image_toogle] = reader.result as string;
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
    console.log('hi satyam');
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


    if(this.checkedItemsLength == Object.keys(this.base64UploadImages).length && Object.keys(this.base64UploadImages).length >= 1){
      if (form.valid) {
        // You can now send this data to an API or further processing
        this.getData();
      } else {
        console.log('Form is invalid');
      }
    }else{
      alert("Please select at least one toggle. If you have already selected a toggle, please upload the corresponding image.");
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
    let i = 1;
    const data: { [key: string]: string } = {};
    for (const key of Object.keys(this.base64UploadImages)) {
      data[`img${i}`] = this.base64UploadImages[key] ? 
    this.base64UploadImages[key].replace('data:image/png;base64,', '') : '';
    i++;
    }
    data[`img${i}`]  = this.base64LiveImage ? this.base64LiveImage.replace('data:image/png;base64,', '') : '';

    // const data = {
    //   img1: this.base64UploadImage ? this.base64UploadImage.replace('data:image/png;base64,', '') : '',
    //   img2: this.base64LiveImage ? this.base64LiveImage.replace('data:image/png;base64,', '') : '',
    // }; 
    console.log(data);

    this.http.post(this.apiUrl, data, { headers }).subscribe(
      (response) => {
        this.data = response;
        alert(JSON.stringify(this.data.result.cf_overview));
        // console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}