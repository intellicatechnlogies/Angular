import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm


@Component({
  selector: 'fin-idr',
  templateUrl: './idr.component.html',
  styleUrl: './idr.component.scss'
})
export class IdrComponent {

  breadcrumbs = [
    {
      label: 'Services',
      link: '/main/services/idr'
    }
  ];

  onSubmit(form: NgForm, formId: string, event: Event): void {
    event.preventDefault(); // Prevent default form submission
    
    if (form.valid) {
      // Handle different forms based on formId
      if (formId === 'PAN') {
        // Handle PAN form data
        const panData = form.value;
        console.log('PAN Data:', panData);

        // You can access individual fields like this
        const panNumber = panData.panNumber;
        const dob = panData.dob;
        console.log('PAN Number:', panNumber, 'DOB:', dob);

      } else if (formId === 'RC') {
        // Handle RC form data
        const rcData = form.value;
        console.log('RC Data:', rcData);

        // Access the RC number
        const rcNumber = rcData.rcNumber;
        console.log('RC Number:', rcNumber);
      }

      // You can now send this data to an API or further processing
    } else {
      console.log('Form is invalid');
    }
  }
}
