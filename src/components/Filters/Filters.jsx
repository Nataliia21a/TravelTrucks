import { useSearchParams } from "react-router-dom";
import css from "../Filters/Filters.module.css";
import { useState } from "react";

export default function Filters() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const locationFilter = searchParams.get("location") ?? "";

  const changeLocationFilter = (newLocation) => {
    searchParams.set("location", newLocation);
    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    changeLocationFilter(e.target.value);
  };

  const handleCheck = (e) => {
    setHasAccepted(e.target.checked);
  };

  return (
    <div className={css.container}>
      <div className={css.locationFilter}>
        <label className={css.lableLocation} htmlFor="">
          <span className={css.locationText}>Location</span>

          <div className={css.inputBlock}>
            <input
              className={css.fildLocation}
              type="text"
              placeholder="City"
              value={locationFilter}
              onChange={handleChange}
            />
            <svg className={css.locationSvg} height={20} width={20}>
              <use href="/svg/symbol-defs.svg#icon-Map"></use>
            </svg>
          </div>
        </label>
      </div>

      <h2 className={css.filters}>Filters</h2>

      <h3 className={css.filtersTitle}>Vehicle equipment</h3>

      <div className={css.line}></div>
      <ul className={css.filtersList}>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input
              className={css.chekInput}
              type="checkbox"
              name="AC"
              checked={hasAccepted}
              onChange={handleCheck}
            />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-wind"></use>
              </svg>
              <span className={css.checkboxText}>AC</span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="checkbox" name="Automatic" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-diagram"></use>
              </svg>
              <span className={css.checkboxText}>Automatic</span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="checkbox" name="Kitchen" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-cup-hot"></use>
              </svg>
              <span className={css.checkboxText}>Kitchen</span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="checkbox" name="TV" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-tv"></use>
              </svg>
              <span className={css.checkboxText}>TV</span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="checkbox" name="Bathroom" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-ph-shower"></use>
              </svg>
              <span className={css.checkboxText}>Bathroom</span>
            </span>
          </label>
        </li>
      </ul>

      <h3 className={css.filtersTitle}>Vehicle type</h3>
      <div className={css.line}></div>
      <ul className={css.vehicleList}>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="radio" name="Van" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-bi-grid-1x2"></use>
              </svg>
              <span className={css.checkboxText}>Van</span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input
              className={css.chekInput}
              type="radio"
              name="Fully Integrated"
            />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-bi-grid"></use>
              </svg>
              <span className={css.checkboxText}>
                Fully <br /> Integrated
              </span>
            </span>
          </label>
        </li>
        <li className={css.filtersItem}>
          <label className={css.label}>
            <input className={css.chekInput} type="radio" name="Alcove" />
            <span className={css.checkboxContent}>
              <svg className={css.svg} height={32} width={32}>
                <use href="/svg/symbol-defs.svg#icon-bi-grid-3x3"></use>
              </svg>
              <span className={css.checkboxText}>Alcove</span>
            </span>
          </label>
        </li>
      </ul>

      <button className={css.btn}>Search</button>
    </div>
  );
}
