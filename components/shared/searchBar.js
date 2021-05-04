import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import utilsStyles from "../../styles/utils.module.css";
import searBarStyles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <label
      className={`${utilsStyles.borderCircle} ${utilsStyles.boxShadow} ${utilsStyles.paddingHalfrem} ${searBarStyles.searchBar}`}
    >
      <input
        type="search"
        id="site-search"
        name="search"
        aria-label="Search"
        placeholder="Rechercher"
      />
      <FontAwesomeIcon icon={faSearch} />
    </label>
  );
}
