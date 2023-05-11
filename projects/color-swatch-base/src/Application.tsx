import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';


export interface RGBColorType  {
  red: number;
  green:number;
  blue:number;
}

export type AdjustmentAction ={
  type: 'ADJUST_RED'|'ADJUST_GREEN'|'ADJUST_BLUE';
  payload:number;
}

const reducer = (state:RGBColorType,action:AdjustmentAction)=>{
   switch(action.type){
    case 'ADJUST_RED':
      return {...state,red:action.payload}
    case 'ADJUST_GREEN':
      return {...state,green:action.payload}
    case 'ADJUST_BLUE':
      return {...state,blue:action.payload}
    default : 
      return state
   }
}

const colorChoices:RGBColorType = {red:0,green:0,blue:0};

const Application = () => {
  const [rgb, dispatch] = React.useReducer(reducer, colorChoices);


  return (
    <main style={{ borderColor: toRGB(rgb) }}>
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default Application;

