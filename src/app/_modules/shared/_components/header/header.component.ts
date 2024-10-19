import { Component, OnInit } from '@angular/core';
import { appLanguage, defaultFontSize, defaultTheme, theme } from '../../../../_constants/appSetting.constant';
import { IAppLanguage } from '../../../../_models/appSetting.model';
import { TranslateService } from '@ngx-translate/core';
import { AppSettingService } from '../../../../_services/_appSetting/app-setting.service';
import { languageConfig } from '../../../../_constants/language-config';

@Component({
  selector: 'fin-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  selectedLanguage = {
    'langName': 'English',
    'langCode': 'en',
    'translation': 'English',
    'isActive': true,
  };
  appLanguages: IAppLanguage[] = languageConfig;
  font_size = defaultFontSize;
  theme!: string;

  /**
   * class constructor
   * @param transalate 
   */
  constructor(
    private transalate: TranslateService,
    private appSetting: AppSettingService,
  ) { }

  /**
   * on init hooks
   */
  ngOnInit(): void {
    this.getUserSystemTheme();
  }

  /**
   * set user system theme on app load
   */
  getUserSystemTheme() {
    if (localStorage.getItem('theme')) {
      this.setTheme(localStorage.getItem('theme') || '');
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setTheme(theme.DARK);
      } else {
        this.setTheme(theme.LIGHT);
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const systemTheme = event.matches ? theme.DARK : theme.LIGHT;
      this.setTheme(systemTheme);
    });
  }

  /**
   * set theme from app header button
   * @param theme string
   */
  setTheme(theme: string) {
    this.theme = theme;
    let htmlRoot: HTMLElement = <HTMLElement>document.getElementsByTagName("body")[0];
    if (htmlRoot != null) {
      htmlRoot.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
    this.appSetting.appTheme$.next(theme);
  }

  /**
   * on language change
   * @param lang 
   */
  onLanguageChange(lang: IAppLanguage) {
    this.selectedLanguage = lang;
    this.transalate.use(lang.langCode);
  }

  /**
   *  set font scaling size
   * @param id string
   */
  setFontSize(id: string) {
    if (id === 'a+') {
      this.font_size += 1;
    } else if (id === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = defaultFontSize;
    }

    let htmlRoot: HTMLElement = <HTMLElement>document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
    }
  }
}
