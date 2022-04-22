/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import characterStyles from '../../../styles/Character.module.css';
import Head from 'next/head';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../../../utils';

const character = ({ character }) => {
  // console.log(character);
  return (
    <>
      <Head>
        <title>{character.fullName}</title>
      </Head>
      <>
        <a className={characterStyles.card} style={{ textAlign: 'center' }}>
          <h2>
            {character.title}, {character.fullName}
          </h2>

          <hr />
          <Image
            src={character.imageUrl}
            alt={character.name}
            width={200}
            height={200}
            unoptimized
            loader={grpahCMSImageLoader}
          />
          <hr />
          <p> Family : {character.family}</p>
        </a>

        <Link href='/'> Back to Home</Link>
      </>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Characters/${context.params.id}`
  );

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default character;
