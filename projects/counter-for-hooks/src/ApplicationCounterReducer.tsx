import { useReducer } from "react";

type CounterState ={
  value:number
}
type BasicCounterACtion = {
  type: 'decrement'|'increment'
}

type SetCounterAction = {
  type: 'set';
  payload: number;
}

type CounterAction = SetCounterAction | BasicCounterACtion;

const initialState = {value:0};


const reducer = (state:CounterState,action:CounterAction)=>{
  switch(action.type){
    case 'increment':
      return {value:state.value + 1}
    case 'decrement':
      return {value:state.value - 1}
    case 'set':
      return {value:action.payload}
    default: 
      return state;
  }
}; 
 

const Counter = () => {
    
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
  <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={(e)=>dispatch({type:'set',payload:+e.currentTarget.value})}>Reset</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;