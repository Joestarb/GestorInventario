// hooks/useTheme.ts
import { useAppSelector, useAppDispatch } from './useRedux';
import { toggleTheme } from '../features/theme/themeSlice';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return { isDarkMode, toggleTheme: handleToggleTheme };
};

export default useTheme;
