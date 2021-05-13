import { useState, useEffect, useContext } from "react";

import { TierContext } from "../../contexts/tierContext";

export default function Tier({ tier }) {
  console.log(tier);
  const [date, setDate] = useState("");
  const { updateTier, deleteTier } = useContext(TierContext);

  useEffect(() => {
    setDate(tier.fields.date);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleUpdateTier = () => {
    const updatedFields = {
      ...tier.fields,
      date: date,
    };
    const updatedTier = { id: tier.id, fields: updatedFields };
    updateTier(updatedTier);
  };

  return (
    <li>
      <div>
        <label htmlFor="date">
          Entrez la date du tiers : (ex : 2021-04)
          <input
            type="text"
            value={date}
            name="date"
            id="date"
            onChange={handleDateChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Entrez le nom du tier : (ex : gen8ou-1825)
          <input type="text" value={tier.fields.name} name="name" id="name" />
        </label>
      </div>
      <button type="button" onClick={handleUpdateTier}>
        Modifier
      </button>
      <button type="button" onClick={() => deleteTier(tier.id)}>
        Effacer
      </button>
    </li>
  );
}
