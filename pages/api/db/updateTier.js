import { tiers, getMinifyRecord } from "./utils/airtable";

export default async (req, res) => {
  const { id, fields } = req.body;

  try {
    const updatedRecords = await tiers.update([
      {
        id,
        fields,
      },
    ]);

    res.status(200).json(getMinifyRecord(updatedRecords[0]));
  } catch (error) {
    res.status(500).json({
      msg: "Il y à eu un problème lors de la récupération des données dans la base",
    });
  }
};
