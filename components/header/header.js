import MainNavigation from "./mainNavigation";
import SearchBar from "../shared/searchBar";

import utilsStyles from "../../styles/utils.module.css";
import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <header
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${headerStyles.header}`}
    >
      <MainNavigation />
      <SearchBar />
    </header>
  );
}
