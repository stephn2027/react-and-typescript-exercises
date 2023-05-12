import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';

import {ColorAdjustment} from './ColorAdjustment'

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import { ColorSlider } from './ColorSlider';
import { ColorInput } from './ColorInput';

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
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider}/>
    </main>
  );
};

export default Application;
