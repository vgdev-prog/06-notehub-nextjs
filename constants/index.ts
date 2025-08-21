export const API_URL = 'https://notehub-public.goit.study/api';

export const DATE_FORMATS = {
  FULL: {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
    hour: '2-digit' as const,
    minute: '2-digit' as const
  },
  SHORT: {
    day: '2-digit' as const,
    month: '2-digit' as const,
    year: 'numeric' as const
  },
  LOCALE: 'ru-RU'
};