import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './_components/side-menu/side-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './_components/button/button.component';
import { InputComponent } from './_components/input/input.component';
import { SelectComponent } from './_components/select/select.component';
import { AutoCompleteComponent } from './_components/auto-complete/auto-complete.component';
import { DatePickerComponent } from './_components/date-picker/date-picker.component';
import { CardComponent } from './_components/card/card.component';
import { TableComponent } from './_components/table/table.component';
import { CustomColumnComponent } from './_components/table/_component/custom-column/custom-column.component';
import { CustomActionComponent } from './_components/table/_component/custom-action/custom-action.component';
import { FabButtonComponent } from './_components/fab-button/fab-button.component';
import { PaginationComponent } from './_components/pagination/pagination.component';
import { ConfirmationBoxComponent } from './_components/confirmation-box/confirmation-box.component';
import { BreadcrumbComponent } from './_components/breadcrumb/breadcrumb.component';
import { RejectBoxComponent } from './_components/reject-box/reject-box.component';
import { DateRangePickerComponent } from './_components/date-range-picker/date-range-picker.component';
import { CheckboxComponent } from './_components/checkbox/checkbox.component';
import { TextAreaComponent } from './_components/text-area/text-area.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { SnackbarComponent } from './_components/snackbar/snackbar.component';
import { RadioComponent } from './_components/radio/radio.component';
import { DoughnutChartComponent } from './_components/doughnut-chart/doughnut-chart.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './_components/server-error/server-error.component';
import { LabelComponent } from './_components/label/label.component';
import { NumberFormatPipe } from './_pipes/number-format.pipe';
import { NumberToWordPipe } from './_pipes/number-to-word.pipe';
import { MainComponent } from './_components/main/main.component';

const EXPORTED_COMPONENTS = [
  SideMenuComponent,
  HeaderComponent,
  ButtonComponent,
  InputComponent,
  SelectComponent,
  AutoCompleteComponent,
  DatePickerComponent,
  CardComponent,
  TableComponent,
  CustomColumnComponent,
  CustomActionComponent,
  FabButtonComponent,
  PaginationComponent,
  ConfirmationBoxComponent,
  BreadcrumbComponent,
  RejectBoxComponent,
  DateRangePickerComponent,
  CheckboxComponent,
  TextAreaComponent,
  ProfileComponent,
  SnackbarComponent,
  RadioComponent,
  DoughnutChartComponent,
  PageNotFoundComponent,
  ServerErrorComponent,
  LabelComponent,
  NumberFormatPipe,
  NumberToWordPipe,
  MainComponent,
];

const EXPORTED_MODULES = [
  MaterialModule,
  RouterModule,
  TranslateModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...EXPORTED_MODULES
  ],
  exports: [
    ...EXPORTED_COMPONENTS,
    ...EXPORTED_MODULES
  ]
})
export class SharedModule { }
