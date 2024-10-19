import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { defaultLang } from './_constants/appSetting.constant';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER
} from 'ngx-ui-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { HttpHeaderConfigInterceptor } from './_helpers/http-header-config.interceptor';
import { HttpErrorHandlerInterceptor } from './_helpers/http-error-handler.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { SharedModule } from './_modules/shared/shared.module';


export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const I18N_CONFIG = {
  defaultLanguage: defaultLang.langCode,
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
}

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#2cbd5f',
  fgsColor: '#ff7602',
  pbColor: '#fff',
  bgsOpacity: 0,
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.threeStrings,
  fgsType: SPINNER.threeStrings,
  hasProgressBar: false,
  overlayColor: "rgba(255, 255,255 , 0)",
  fgsSize: 100,
};

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot(I18N_CONFIG),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FlexLayoutModule,
  ],

  providers: [
    // --------interceptor--------//
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderConfigInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    },
    provideAnimationsAsync()
    //-------------------------------------//
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
