import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'fin-face-compare',
  templateUrl: './face-compare.component.html',
  styleUrl: './face-compare.component.scss'
})
export class FaceCompareComponent {
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

      } else if (formId === 'DL') {
        // Handle RC form data
        const rcData = form.value;
        console.log('DL Data:', rcData);

        // Access the RC number
        const rcNumber = rcData.rcNumber;
        console.log('DL Number:', rcNumber);
      }

      // You can now send this data to an API or further processing
    } else {
      console.log('Form is invalid');
    }
  }
}
