import { createContext, useEffect, useState } from 'react';

import { ThemeName } from '~/types';
import { THEME_KEY } from '~/utils';

type ContextType = {
  theme: ThemeName;
  setTheme: (val: ThemeName) => void;

  loading: boolean;
  setLoading: (val: boolean) => void;

  isError: boolean;
  setIsError: (val: boolean) => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const StateContext = createContext({} as ContextType);

export const StateProvider = ({ children }: StateProps) => {
  const [theme, setTheme] = useState<ThemeName>('dark');

  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // Load theme from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as ThemeName;
    if (!storedTheme) {
      localStorage.setItem(THEME_KEY, theme);
    } else {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        loading,
        setLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
