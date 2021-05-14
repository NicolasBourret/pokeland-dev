import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

import { tiers } from "../db/utils/airtable";

const OwnsRecords = (handler) =>
  withApiAuthRequired(async (req, res) => {
    const { user } = await getSession(req, res);

    const { id } = req.body;

    try {
      const existingRecord = await tiers.find(id);

      if (!existingRecord || user.sub !== existingRecord.fields.userId) {
        res.status(404).json({ msg: "Vous n'avez publié aucun tiers" });
      }

      req.record = existingRecord;

      return handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Vous n'avez pas accès à ces tiers" });
    }
  });

export default OwnsRecords;
