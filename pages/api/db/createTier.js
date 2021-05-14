import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { tiers } from "./utils/airtable";

export default withApiAuthRequired(async (req, res) => {
  const { user } = await getSession(req, res);
  const { date, name } = req.body;

  try {
    const createdRecords = await tiers.create([
      {
        fields: {
          date,
          name,
          userId: user.sub,
        },
      },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };

    res.status(200).json(createdRecord);
  } catch (error) {
    res.status(500).json({
      msg: "Il y à eu un problème lors de la récupération des données dans la base",
    });
  }
});
