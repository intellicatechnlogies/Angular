import { IAppLanguage } from "../_models/appSetting.model";

export const appLanguage: IAppLanguage[] = [
  {
    langName: 'English',
    langCode: 'en',
    translation: 'English',
    isActive: true,
  },
  {
    langName: 'Hindi',
    langCode: 'hi',
    translation: 'हिंदी',
    isActive: true,
  },
];

export const defaultLang: IAppLanguage = appLanguage[0];


export const theme = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const defaultTheme: string = theme.LIGHT;

export const defaultFontSize: number = 14;

export const defaultDateFormat = 'dd-MM-YYYY';