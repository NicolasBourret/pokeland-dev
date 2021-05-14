import OwnsRecords from "../middleware/ownsRecords";
import { tiers, getMinifyRecord } from "./utils/airtable";

export default OwnsRecords(async (req, res) => {
  const { id } = req.body;

  try {
    const deletedRecords = await tiers.destroy([id]);

    res.status(200).json(getMinifyRecord(deletedRecords[0]));
  } catch (error) {
    res.status(500).json({
      msg: "Il y à eu un problème lors de la récupération des données dans la base",
    });
  }
});
