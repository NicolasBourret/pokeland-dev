import Head from "next/head";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { useEffect, useContext } from "react";

import Layout from "../../components/layout";
import { tiers, minifyRecords } from "../api/db/utils/airtable";
import { TierContext } from "../../contexts/tierContext";

import profileStyles from "../../styles/profile.module.css";
import Tier from "./tier";

export default withPageAuthRequired(function Profile({ initialTiers, user }) {
  const { tiers, setTiers } = useContext(TierContext);

  useEffect(() => {
    setTiers(initialTiers);
  }, []);

  return (
    <Layout user={user}>
      <Head>
        <title>Pokeland - Accueil</title>
      </Head>
      <div className={`${profileStyles.profile}`}>
        <div className={`${profileStyles.userInfos}`}>
          <div>
            <img src={user.picture} />
            <h2>{user.name}</h2>
          </div>
          <p>{user.email}</p>
        </div>
        <div className={`${profileStyles.userActions}`}>
          <ul>
            {tiers && tiers.map((tier) => <Tier tier={tier} key={tier.id} />)}
          </ul>
        </div>
      </div>
    </Layout>
  );
});

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
