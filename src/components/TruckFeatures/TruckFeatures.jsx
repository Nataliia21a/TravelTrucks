import css from "./TruckFeatures.module.css";

export default function TruckFeatures() {
  return (
    <div className={css.container}>
      <ul className={css.filterList}>
        <li className={css.filterItem}>
          <svg className={css.svgMap} width={20} height={20}>
            <use href="/svg/symbol-defs.svg#icon-Map"></use>
          </svg>
          <p className={css.filterText}>Automatic</p>
        </li>
        <li className={css.filterItem}>
          <svg className={css.svgMap} width={20} height={20}>
            <use href="/svg/symbol-defs.svg#icon-Map"></use>
          </svg>
          <p className={css.filterText}>Automatic</p>
        </li>
        <li className={css.filterItem}>
          <svg className={css.svgMap} width={20} height={20}>
            <use href="/svg/symbol-defs.svg#icon-Map"></use>
          </svg>
          <p className={css.filterText}>Automatic</p>
        </li>
        <li className={css.filterItem}>
          <svg className={css.svgMap} width={20} height={20}>
            <use href="/svg/symbol-defs.svg#icon-Map"></use>
          </svg>
          <p className={css.filterText}>Automatic</p>
        </li>
        <li className={css.filterItem}>
          <svg className={css.svgMap} width={20} height={20}>
            <use href="/svg/symbol-defs.svg#icon-Map"></use>
          </svg>
          <p className={css.filterText}>Automatic</p>
        </li>
      </ul>
      <div className={css.vehicleDetails}>
        <h4 className={css.detailsTitle}>Vehicle details</h4>
        <div className={css.line}></div>
        <ul className={css.infoList}>
          <li className={css.infoItems}>
            <p>Form</p>
            <p>Panel truck</p>
          </li>
          <li className={css.infoItems}>
            <p>Length</p>
            <p>Panel truck</p>
          </li>
          <li className={css.infoItems}>
            <p>Width</p>
            <p>Panel truck</p>
          </li>
          <li className={css.infoItems}>
            <p>Height</p>
            <p>Panel truck</p>
          </li>
          <li className={css.infoItems}>
            <p>Tank</p>
            <p>Panel truck</p>
          </li>
          <li className={css.infoItems}>
            <p>Consumption</p>
            <p>Panel truck</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
