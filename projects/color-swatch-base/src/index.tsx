import { render } from 'react-dom';

import Application from './Application';
import { ThemeProvider } from './theme-context';

import './style.scss';
import { RGBContextProvider } from './context';

const rootElement = document.getElementById('root');
render(
  <ThemeProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeProvider>,
  rootElement
);
