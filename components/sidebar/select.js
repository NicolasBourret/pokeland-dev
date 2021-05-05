import utilsStyles from "../../styles/utils.module.css";
import sideBarStyles from "./sideBar.module.css";

export default function Select({ onChange, value }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${sideBarStyles.select}`}
    >
      <optgroup label="8G">
        <option value="gen8ubers">Ubers</option>
        <option value="gen8ou">OverUsed</option>
        <option value="gen8uu">UU</option>
        <option value="gen8ru">RU</option>
        <option value="gen8nu">NU</option>
        <option value="gen8pu">PU</option>
        <option value="gen8lc">LC</option>
        <option value="gen8monotype">Monotype</option>
        <option value="gen8zu">ZU</option>
      </optgroup>
    </select>
  );
}
