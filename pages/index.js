import Head from 'next/head';
import CharacterList from '../components/CharacterList';

export default function Home({ characters }) {
  // console.log(characters);
  return (
    <div>
      <Head>
        <title>Try Next.js!</title>
        <meta name='keywords' content='Here we go again!' />
      </Head>
      <CharacterList characters={characters} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://thronesapi.com/api/v2/Characters`);
  const characters = await res.json();

  return {
    props: {
      characters,
      images: characters.map((character) => character.imageUrl),
    },
  };
};
