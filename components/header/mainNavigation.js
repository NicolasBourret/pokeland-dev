import Link from "next/link";

import utilsStyles from "../../styles/utils.module.css";
import headerStyles from "./header.module.css";

function MainNavigationItem({ children, source }) {
  return (
    <li>
      <Link href={source}>
        <a className={utilsStyles.subTitle}>{children}</a>
      </Link>
    </li>
  );
}

export default function MainNavigation() {
  return (
    <nav className={headerStyles.mainNavigation}>
      <ul>
        <MainNavigationItem source="/">Actualité</MainNavigationItem>
        <MainNavigationItem source="/equipes">Equipes</MainNavigationItem>
        <MainNavigationItem source="/tournois">Tournois</MainNavigationItem>
        <MainNavigationItem source="/forum">Forum</MainNavigationItem>
      </ul>
    </nav>
  );
}
