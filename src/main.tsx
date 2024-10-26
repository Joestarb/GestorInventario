import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { ChildrenProps } from './models/dtos/components/componentsProps.ts'
import { RootState, store } from './store/store.ts'

//compontent who change darkt an ligth theme using user info
const ThemeProvider: React.FC<ChildrenProps> = ({ children  }) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
};



// this component apply the language
const LanguageProvider: React.FC<ChildrenProps> = ({ children }) => {
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    // Aquí puedes hacer alguna configuración adicional para el idioma si es necesario
    console.log(`Idioma actual: ${language}`);
  }, [language]);

  return <>{children}</>;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <LanguageProvider>
      <App />
      </LanguageProvider>
    </ThemeProvider>
    </Provider>
  </StrictMode>
);
