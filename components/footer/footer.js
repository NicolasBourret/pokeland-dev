import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitch,
  faTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import utilsStyles from "../../styles/utils.module.css";
import footerStyles from "./footer.module.css";

function FooterItem({ icon }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} />
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${footerStyles.footer}`}
    >
      <ul>
        <FooterItem icon={faLink} />
        <FooterItem icon={faDiscord} />
        <FooterItem icon={faTwitch} />
        <FooterItem icon={faTwitter} />
        <FooterItem icon={faYoutube} />
      </ul>
    </footer>
  );
}
