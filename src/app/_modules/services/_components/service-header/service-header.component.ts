import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { STATES } from '../../../../_constants/state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'fin-service-header',
  templateUrl: './service-header.component.html',
  styleUrl: './service-header.component.scss'
})
export class ServiceHeaderComponent implements OnInit {
  stateList = STATES;
  form!: FormGroup;
  
  @Output() onChange = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.initForm();

    this.form.valueChanges.pipe(distinctUntilChanged()).subscribe(val => {
      this.onChange.emit(val);
    });
  }

  /**
   * Init form
   */
  initForm() {
    this.form = this.fb.group({
      applicationNumber: [''],
      state: [''],
      product: ['']
    });
  }

  /**
   * Reset form
   */
  reset(){
    this.form.reset();
  }
}
