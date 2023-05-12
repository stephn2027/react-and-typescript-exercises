import * as React from 'react';
import { RGBCOntext } from './context';

type AdjustmentInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ColorAdjustmentProps {
  Adjustment: React.ComponentType<AdjustmentInputProps>;
}

export const ColorAdjustment = ({ Adjustment }: ColorAdjustmentProps) => {
  const { red, green, blue, dispatch } = React.useContext(RGBCOntext);

  const adjustRed = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value });
  };

  const adjustGreen = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value });
  };

  const adjustBlue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value });
  };

  return (
    <section className="color-sliders">
      <Adjustment
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
