import { useState, useEffect, useContext } from "react";

import { TierContext } from "../../contexts/tierContext";

export default function Tier({ tier }) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const { updateTier, deleteTier } = useContext(TierContext);

  useEffect(() => {
    setDate(tier.fields.date);
    setName(tier.fields.name);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdateTier = () => {
    const updatedFields = {
      ...tier.fields,
      date: date,
      name: name,
    };
    const updatedTier = { id: tier.id, fields: updatedFields };
    updateTier(updatedTier);
  };

  return (
    <li>
      <div>
        <label htmlFor={`date${tier.id}`}>
          Entrez la date du tiers : (ex : 2021-04)
          <input
            type="text"
            value={date}
            name={`date${tier.id}`}
            id={`date${tier.id}`}
            onChange={handleDateChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor={`name${tier.id}`}>
          Entrez le nom du tier : (ex : gen8ou-1825)
          <input
            type={`name${tier.id}`}
            value={name}
            name={`name${tier.id}`}
            id={`name${tier.id}`}
            onChange={handleNameChange}
          />
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
