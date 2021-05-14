import Head from "next/head";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { useEffect, useContext, useState } from "react";

import Layout from "../../components/layout";
import { tiers, minifyRecords } from "../api/db/utils/airtable";
import { TierContext } from "../../contexts/tierContext";

import profileStyles from "../../styles/profile.module.css";
import Tier from "../../components/profile/tier";

function TierForm() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const { addTier } = useContext(TierContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tier = {
      date,
      name,
    };
    addTier(tier);
    setDate("");
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Tier :</h2>
      <div>
        <label htmlFor="newDate"></label>
        <input
          type="text"
          name="newDate"
          id="newDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newName"></label>
        <input
          type="text"
          name="newName"
          id="newName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default withPageAuthRequired(function Profile({ initialTiers, user }) {
  const { tiers, setTiers } = useContext(TierContext);

  useEffect(() => {
    setTiers(initialTiers);
  }, []);

  return (
    <Layout user={user}>
      <Head>
        <title>Pokeland - Profile</title>
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
          {tiers && (
            <>
              <TierForm />
              <ul>
                {tiers.map((tier) => (
                  <Tier tier={tier} key={tier.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
});

export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);
  let tiersDb = [];

  try {
    if (session?.user) {
      tiersDb = await tiers
        .select({ filterByFormula: `userId = '${session.user.sub}'` })
        .firstPage();
    }

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
