
import * as React from 'react';
import { reducer } from './reducer';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}
const Colors: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0
};
export const RGBCOntext = React.createContext<RGBContextType>(
  {} as RGBContextType
);

export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, Colors);

  return (
    <RGBCOntext.Provider value={{ ...rgb, dispatch }}>
      {children}
    </RGBCOntext.Provider>
  );
};
