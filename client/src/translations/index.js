import { en } from './en';
import { fr } from './fr';
import { zh } from './zh';

export const translations = {
  en,
  fr,
  zh,
};

export const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    short: 'EN',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    short: 'FR',
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    short: '中文',
  },
];

export const defaultLanguage = 'en';
