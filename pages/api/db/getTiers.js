import { tiers, minifyRecords } from "./utils/airtable";

export default async (req, res) => {
  try {
    const records = await tiers.select({}).firstPage();
    const minifiedRecords = minifyRecords(records);

    res.status(200).json(minifiedRecords);
  } catch (error) {
    res.status(500).json({
      msg: "Il y à eu un problème lors de la récupération des données dans la base",
    });
  }
};
