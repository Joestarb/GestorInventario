// hooks/useLanguage.ts
import { useAppSelector, useAppDispatch } from './useRedux';
import { setLanguage } from '../features/language/languageSlice';
import { translations } from '../utils/translations';

type Language = 'es' | 'en';

const useLanguage = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.language) as Language;

  const changeLanguage = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  const translate = (key: string) => {
    return translations[language][key] || key;
  };

  return { language, changeLanguage, translate };
};

export default useLanguage;
