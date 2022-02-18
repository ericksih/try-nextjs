import characterStyles from '../styles/Character.module.css';
import Link from 'next/link';

const CharacterItem = ({ character }) => {
  return (
    <Link href='/character/[id]' as={`/character/${character.id}`}>
      <a className={characterStyles.card}>
        <h3> {character.fullName} &rarr; </h3>
      </a>
    </Link>
  );
};

export default CharacterItem;
