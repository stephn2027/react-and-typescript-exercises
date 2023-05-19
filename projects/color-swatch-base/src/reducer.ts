import { RGBColorType } from './types';

export type AdjustmentAction = {
  type: ActionType;
  payload: number;
};

const colors = ['red','green','blue'] as const; 

type Colors = Uppercase<typeof colors[number]>;
type ActionType = `ADJUST_${Colors}`;

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  for(const color of colors){
    if(action.type === `ADJUST_${color.toUpperCase}`){
      return {...state,[color]:action.payload}
    }
  }

  return state;
};
