import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { tiers, minifyRecords } from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
  const { user } = await getSession(req, res);
  try {
    const records = await tiers
      .select({ filterByFormula: `userId = '${user.sub}'` })
      .firstPage();
    const minifiedRecords = minifyRecords(records);

    res.status(200).json(minifiedRecords);
  } catch (error) {
    res.status(500).json({
      msg: "Il y à eu un problème lors de la récupération des données dans la base",
    });
  }
});
