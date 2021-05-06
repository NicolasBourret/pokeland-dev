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
        <option value="gen8ubers-1760">Ubers</option>
        <option value="gen8ou-1825">OverUsed</option>
        <option value="gen8uu-1760">UU</option>
        <option value="gen8ru-1760">RU</option>
        <option value="gen8nu-1760">NU</option>
        <option value="gen8pu-1760">PU</option>
        <option value="gen8lc-1760">LC</option>
        <option value="gen8monotype-1760">Monotype</option>
        <option value="gen8zu-1760">ZU</option>
      </optgroup>
      <optgroup label="Old Gen">
        <option value="gen1ou-1760">Gen 1 OU</option>
        <option value="gen2ou-1760">Gen 2 OU</option>
        <option value="gen3ou-1760">Gen 3 OU</option>
        <option value="gen4ou-1760">Gen 4 OU</option>
        <option value="gen5ou-1760">Gen 5 OU</option>
        <option value="gen6ou-1760">Gen 6 OU</option>
        <option value="gen7ou-1760">Gen 7 OU</option>
      </optgroup>
    </select>
  );
}
