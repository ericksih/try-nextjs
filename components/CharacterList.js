import characterStyles from '../styles/Character.module.css';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  return (
    <div className={characterStyles.grid}>
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
