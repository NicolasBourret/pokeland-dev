import SearchBar from "../components/shared/searchBar";

import utilsStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";

export default function SideBar() {
  return (
    <div
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${layoutStyles.sidebar}`}
    >
      <h2>Tiers Stratégiques Usages</h2>
      <SearchBar />
    </div>
  );
}
