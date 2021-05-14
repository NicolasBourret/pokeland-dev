import { createContext, useState } from "react";

const TierContext = createContext();

const TierProvider = ({ children }) => {
  const [tiers, setTiers] = useState([]);

  const refreshTiers = async () => {
    try {
      const res = await fetch("/api/db/getTiers");
      const latestTiers = await res.json();

      setTiers(latestTiers);
    } catch (error) {
      console.error(error);
    }
  };

  const addTier = async ({ date, name }) => {
    try {
      const res = await fetch("/api/db/createTier", {
        method: "POST",
        body: JSON.stringify({ date, name }),
        headers: { "Content-Type": "application/json" },
      });
      const newTier = await res.json();

      setTiers((prevTiers) => {
        return [newTier, ...prevTiers];
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateTier = async (updatedTier) => {
    try {
      const res = await fetch("/api/db/updateTier", {
        method: "PUT",
        body: JSON.stringify(updatedTier),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();

      setTiers((prevTiers) => {
        const existingTiers = [...prevTiers];
        const existingTier = existingTiers.find(
          (tier) => tier.id === updatedTier.id
        );
        existingTier.fields = updatedTier.fields;

        return existingTiers;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTier = async (id) => {
    try {
      await fetch("api/db/deleteTier", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });

      setTiers((prevTiers) => {
        return prevTiers.filter((tier) => tier.id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TierContext.Provider
      value={{
        tiers,
        setTiers,
        refreshTiers,
        updateTier,
        deleteTier,
        addTier,
      }}
    >
      {children}
    </TierContext.Provider>
  );
};

export { TierContext, TierProvider };
