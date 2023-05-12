import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';

const Application = () => {
  const [rgb] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });
  const themes = React.useContext(ThemeContext);

  return (
    <main
      style={{
        borderColor: toRGB(rgb),

        ...themes.dark
      }}
    >
      <ColorSwatch />
      <ColorInputs {...rgb} />
      <ColorSliders  />
    </main>
  );
};

export default Application;
