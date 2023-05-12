import { useContext } from 'react';
import { RGBCOntext } from './context';

export const ColorSwatch = () => {
  const { red, green, blue } = useContext(RGBCOntext);
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
