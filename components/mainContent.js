import utilsStyles from "../styles/utils.module.css";
import layoutStyles from "./layout.module.css";

export default function MainContent({ children }) {
  return (
    <div
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding2rem} ${layoutStyles.mainContent}`}
    >
      {children}
    </div>
  );
}
