import Head from 'next/head';
import Image from 'next/image';
import LayoutAdmin from 'src/layouts/LayoutAdmin.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nói cùng con</title>
        <meta name="description" content="Nói cùng con is loading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAdmin>Page is loading...</LayoutAdmin>
    </>
  );
}
