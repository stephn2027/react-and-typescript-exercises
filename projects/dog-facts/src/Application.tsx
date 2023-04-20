import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormProps = {
  onSubmit: (n:number) => void
};

const Form = ({onSubmit}:FormProps) => {
  const [numOfDogFacts,setNumOfDogFacts] = React.useState<number>(0);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(numOfDogFacts);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value={numOfDogFacts} min="1" max="10" id="number-of-facts" onChange={(e)=>setNumOfDogFacts(+e.target.value)}/>
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {

  const [facts,setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n:number)=>{
    fetchDogFacts(n).then(facts=>setFacts(facts))
  }

  return (
    <main>
      <Form onSubmit={handleSubmit}/>
      <section>
      {facts&&facts.map(f=>
        <Fact key={f.id} fact={f.fact}/>
      )}
      </section>
    </main>
  );
};

export default Application;
