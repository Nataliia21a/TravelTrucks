import css from "./TruckFeatures.module.css";

export default function TruckFeatures({ camper }) {
  return (
    <div className={css.container}>
      <ul className={css.filterList}>
        {camper.AC && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-wind"></use>
            </svg>
            <p className={css.filterText}>AC</p>
          </li>
        )}
        {camper.bathroom && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-ph-shower"></use>
            </svg>
            <p className={css.filterText}>Bathroom</p>
          </li>
        )}
        {camper.kitchen && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-cup-hot"></use>
            </svg>
            <p className={css.filterText}>Kitchen</p>
          </li>
        )}
        {camper.TV && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-tv"></use>
            </svg>
            <p className={css.filterText}>TV</p>
          </li>
        )}
        {camper.radio && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-ui-radios"></use>
            </svg>
            <p className={css.filterText}>Radio</p>
          </li>
        )}
        {camper.refrigerator && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-solar-fridge-outline"></use>
            </svg>
            <p className={css.filterText}>Refrigerator</p>
          </li>
        )}
        {camper.microwave && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-lucide-microwave"></use>
            </svg>
            <p className={css.filterText}>Microwave</p>
          </li>
        )}
        {camper.gas && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-hugeicons_gas-stove"></use>
            </svg>
            <p className={css.filterText}>Gas</p>
          </li>
        )}
        {camper.water && (
          <li className={css.filterItem}>
            <svg className={css.svgMap} width={20} height={20}>
              <use href="/svg/symbol-defs.svg#icon-ion-water-outline2x"></use>
            </svg>
            <p className={css.filterText}>Water</p>
          </li>
        )}
      </ul>
      <div className={css.vehicleDetails}>
        <h4 className={css.detailsTitle}>Vehicle details</h4>
        <div className={css.line}></div>
        <ul className={css.infoList}>
          <li className={css.infoItems}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={css.infoItems}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={css.infoItems}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={css.infoItems}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={css.infoItems}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={css.infoItems}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
