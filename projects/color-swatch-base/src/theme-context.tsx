import * as React from 'react';

type Themes = {
  [key: string]: React.CSSProperties;
};

type ChildrenType = {
  children: React.ReactNode;
};

const defaultTheme: Themes = {
  light: { backgroundColor: 'white', color: 'black' },
  dark: { backgroundColor: '#555', color: 'white' }
};

export const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = ({ children }: ChildrenType) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
