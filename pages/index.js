import Head from "next/head";
import { getSession } from "@auth0/nextjs-auth0";
import { useEffect, useContext } from "react";

import { tiers, minifyRecords } from "./api/db/utils/airtable";
import Layout from "../components/layout";
import { TierContext } from "../contexts/tierContext";

export default function Home({ initialTiers, user }) {
  const { setTiers } = useContext(TierContext);

  useEffect(() => {
    setTiers(initialTiers);
  }, []);

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
  try {
    const tiersDb = await tiers.select({}).firstPage();
    const session = await getSession(req, res);

    return {
      props: {
        initialTiers: minifyRecords(tiersDb),
        user: session ? session.user : null,
      },
    };
  } catch (error) {
    return {
      props: {
        msg: "Il y a eu un problème lors de l'appel au serveur",
      },
    };
  }
}
