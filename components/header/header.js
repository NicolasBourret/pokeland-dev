import { useState } from "react";

import MainNavigation from "./mainNavigation";
import SearchBar from "../shared/searchBar";

import utilsStyles from "../../styles/utils.module.css";
import headerStyles from "./header.module.css";

function NavProfile() {
  return (
    <div
      className={`${headerStyles.navProfile} ${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem}`}
    >
      <a href="#" className={`${headerStyles.link}`}>
        Voir mon Profil
      </a>
      <a
        href="/api/auth/logout"
        className={`${utilsStyles.borderCircle} ${utilsStyles.boxShadow} ${utilsStyles.subTitle} ${utilsStyles.darkBackground} ${utilsStyles.lightText}`}
      >
        Déconnexion
      </a>
    </div>
  );
}

function Log({ user, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`${headerStyles.userInfos} ${headerStyles.log} ${utilsStyles.boxShadow} ${utilsStyles.borderCircle}`}
      onClick={handleClick}
    >
      <p>{user.name}</p>
      <img src={user.picture ? user.picture : "/images/user-solid.svg"} />
    </div>
  );
}

export default function Header({ user }) {
  const [navProfile, setNavProfile] = useState(false);

  const handleNavProfile = () => {
    setNavProfile(!navProfile);
  };

  return (
    <header
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${headerStyles.header}`}
    >
      <MainNavigation />
      <SearchBar />
      <div className={`${headerStyles.log}`}>
        {user && <Log user={user} onClick={handleNavProfile} />}
        {!user && (
          <a
            href="/api/auth/login"
            className={`${utilsStyles.borderCircle} ${utilsStyles.boxShadow} ${utilsStyles.subTitle}`}
          >
            Connexion
          </a>
        )}
      </div>
      {navProfile && <NavProfile />}
    </header>
  );
}
