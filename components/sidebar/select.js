import utilsStyles from "../../styles/utils.module.css";
import sideBarStyles from "./sideBar.module.css";

export default function Select({ onChange, value }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${utilsStyles.boxShadow} ${utilsStyles.borderCircle} ${utilsStyles.padding1rem} ${sideBarStyles.select}`}
    >
      <optgroup label="Gen 8">
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
      <optgroup label="Old Gen">
        <option value="gen1ou">Gen 1 OU</option>
        <option value="gen2ou">Gen 2 OU</option>
        <option value="gen3ou">Gen 3 OU</option>
        <option value="gen4ou">Gen 4 OU</option>
        <option value="gen5ou">Gen 5 OU</option>
        <option value="gen6ou">Gen 6 OU</option>
        <option value="gen7ou">Gen 7 OU</option>
      </optgroup>
    </select>
  );
}
