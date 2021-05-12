import Head from "next/head";
import { getSession } from "@auth0/nextjs-auth0";

import Layout from "../components/layout";

export default function Home({ user }) {
  return (
    <Layout user={user}>
      <Head>
        <title>Pokeland - Accueil</title>
      </Head>
      <h1>Accueil</h1>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);

  return {
    props: {
      user: session ? session.user : null,
    },
  };
}
