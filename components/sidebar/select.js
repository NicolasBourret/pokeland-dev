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
        <option value="2021-04/gen8ubers-1760">Ubers</option>
        <option value="2021-04/gen8ou-1825">OverUsed</option>
        <option value="2021-04/gen8uu-1760">UU</option>
        <option value="2021-04/gen8ru-1760">RU</option>
        <option value="2021-04/gen8nu-1760">NU</option>
        <option value="2021-04/gen8pu-1760">PU</option>
        <option value="2021-04/gen8lc-1760">LC</option>
        <option value="2021-04/gen8monotype-1760">Monotype</option>
        <option value="2021-04/gen8zu-1760">ZU</option>
      </optgroup>
      <optgroup label="Old Gen">
        <option value="2021-04/gen1ou-1760">Gen 1 OU</option>
        <option value="2021-04/gen2ou-1760">Gen 2 OU</option>
        <option value="2021-04/gen3ou-1760">Gen 3 OU</option>
        <option value="2021-04/gen4ou-1760">Gen 4 OU</option>
        <option value="2021-04/gen5ou-1760">Gen 5 OU</option>
        <option value="2021-04/gen6ou-1760">Gen 6 OU</option>
        <option value="2021-04/gen7ou-1760">Gen 7 OU</option>
      </optgroup>
      <optgroup label="Tiers Doubles">
        <option value="2021-01/gen8vgc2021-1760">VGC 2021 Janvier</option>
        <option value="2021-02/gen8vgc2021-1760">VGC 2021 Fevrier</option>
        <option value="2021-03/gen8vgc2021-1760">VGC 2021 Mars</option>
        <option value="2021-04/gen8vgc2021-1760">VGC 2021 Avril</option>
        <option value="2021-04/gen8doublesubers-1760">Doubles Ubers</option>
        <option value="2021-04/gen8doublesou-1825">Doubles OU</option>
        <option value="2021-04/gen8doublesuu-1760">Doubles UU</option>
      </optgroup>
    </select>
  );
}
