import { ChangeEvent, useContext} from "react";
import { RGBCOntext } from "./context";


export interface ColorInputProps{
  id: string;
  label: string;
  value: number;
  onChange:(event:ChangeEvent<HTMLInputElement>)=>void;
}
const { red, green, blue, dispatch } = useContext(RGBCOntext);


const adjustRed= (event: ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: "ADJUST_RED", payload: +event.target.value });
};

const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: "ADJUST_GREEN", payload: +event.target.value });
};

const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: "ADJUST_BLUE", payload: +event.target.value });
};


export const ColorSlider = ({ id, label, value, onChange }: ColorInputProps) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" min="0" max="255" value={value} onChange={onChange} />
    </div>
  );
};
