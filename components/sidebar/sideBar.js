import { useState, useEffect } from "react";

import SearchBar from "../shared/searchBar";
import Select from "./select";

import utilsStyles from "../../styles/utils.module.css";
import sideBarStyles from "./sideBar.module.css";

function TierItem({ item }) {
  const pourcent = item[2].replace("%", " ");
  const pourcentNumber = parseFloat(pourcent);

  return (
    <li
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem}`}
    >
      <img src={``} />
      <p>{item[1]}</p>
      <p>{Math.round(pourcentNumber * 10) / 10} %</p>
    </li>
  );
}

export default function SideBar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [usage, setUsage] = useState("2021-04/gen8uu-1760");
  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  function selectTier(value) {
    setUsage(value);
  }

  function handleSearchInput(value) {
    setSearchValue(value);
    const itemsValues = items;

    function filtreTexte(arr, requete) {
      return arr.filter(function (el) {
        return el[1].toLowerCase().indexOf(requete.toLowerCase()) !== -1;
      });
    }

    const restItems = filtreTexte(itemsValues, value);
    setSearchItems(restItems);
  }

  useEffect(async () => {
    try {
      const res = await fetch(`https://pokeland-dev.vercel.app/api/${usage}/`);
      const data = await res.json();

      setIsLoaded(true);
      setItems(data);
      setSearchItems(data);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  }, [usage]);

  let sideBarContent;

  if (error) {
    sideBarContent = (
      <div>
        <p>Erreur</p>
      </div>
    );
  } else if (!isLoaded) {
    sideBarContent = (
      <div>
        <p>Chargement...</p>
      </div>
    );
  } else {
    const values = searchItems;
    sideBarContent = values.map((value) => {
      return <TierItem item={value} key={value[0]} />;
    });
  }

  return (
    <div
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${sideBarStyles.sidebar}`}
    >
      <h2>Tiers Stratégiques Usages</h2>
      <Select onChange={selectTier} value={usage} />
      <SearchBar onChange={handleSearchInput} value={searchValue} />
      <ul>{sideBarContent}</ul>
    </div>
  );
}
