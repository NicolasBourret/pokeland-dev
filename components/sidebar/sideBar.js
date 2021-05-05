import { useState, useEffect } from "react";
import SearchBar from "../shared/searchBar";
import Select from "./select";

import utilsStyles from "../../styles/utils.module.css";
import sideBarStyles from "./sideBar.module.css";

function TierItem({ item }) {
  return (
    <li
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem}`}
    >
      <img src={`https://pokepast.es/img/pokemon/${item.dex}-0.png`} />
      <p>{item.pokemon}</p>
      <p>{item.usage_pct}</p>
    </li>
  );
}

export default function SideBar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [usage, setUsage] = useState("gen8ou");
  const [searchValue, setSearchValue] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  function selectTier(value) {
    setUsage(value);
  }

  function filtreTexte(arr, requete) {
    return arr.filter(function (el) {
      return el.pokemon.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
  }

  function handleSearchInput(value) {
    setSearchValue(value);
    const itemsValues = Object.values(items);

    const restItems = filtreTexte(itemsValues, value);
    setSearchItems(restItems);
  }

  useEffect(async () => {
    try {
      const res = await fetch(
        `https://usage-server.herokuapp.com/data/2021-03/${usage}`
      );
      const data = await res.json();

      setIsLoaded(true);
      setItems(data.data);
      setSearchItems(data.data);
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
    const values = Object.values(searchItems);
    sideBarContent = values.map((value) => {
      return <TierItem item={value} key={value.id_} />;
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
