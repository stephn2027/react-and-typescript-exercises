import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => setCharacter(c));
      setLoading(!isLoading);
    }, 2000);
  }, []);

  return (
    <main>
      {isLoading && <Loading />}
      {character && <CharacterInformation character={character} />}
    </main>
  );
};

export default Application;
