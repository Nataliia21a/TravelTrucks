import { useSearchParams } from "react-router-dom";
import css from "../Filters/Filters.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchCampersByEquipment,
  fetchCampersByLocation,
} from "../../redux/campers/operations";
import { setLocation, clearItems } from "../../redux/campers/slice";

export default function Filters() {
  const [hasAccepted, setHasAccepted] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const locationFilter = searchParams.get("location") ?? "";

  const changeLocationFilter = (newLocation) => {
    searchParams.set("location", newLocation);
    setSearchParams(searchParams);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (locationFilter) {
      dispatch(setLocation(locationFilter));
      dispatch(fetchCampersByLocation(locationFilter));
    }
  }, [dispatch, locationFilter]);

  const handleChange = (e) => {
    changeLocationFilter(e.target.value);
    dispatch(setLocation(e.target.value));
    dispatch(fetchCampersByLocation(e.target.value));
    dispatch(clearItems());
  };

  const handleCheck = (e) => {
    setHasAccepted(e.target.checked);

    console.log(e.target.checked, e.target.name);

    const equipment = e.target.name;
    const equipmenToLowerCase = equipment.toLowerCase();
    console.log(equipmenToLowerCase);

    const state = e.target.checked;
    dispatch(fetchCampersByEquipment({ equipment, state }));
    // console.log(e.target.name);
    // console.log(Object.keys(hasAccepted));
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
              value="AC"
              checked={hasAccepted.AC}
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
            <input
              className={css.chekInput}
              type="checkbox"
              name="automatic"
              value="Automatic"
              checked={hasAccepted.Automatic}
              onChange={handleCheck}
            />
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
            <input
              className={css.chekInput}
              type="checkbox"
              name="kitchen"
              value="Kitchen"
              checked={hasAccepted.Kitchen}
              onChange={handleCheck}
            />
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
            <input
              className={css.chekInput}
              type="checkbox"
              name="TV"
              value="TV"
              checked={hasAccepted.TV}
              onChange={handleCheck}
            />
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
            <input
              className={css.chekInput}
              type="checkbox"
              name="bathroom"
              value="Bathroom"
              checked={hasAccepted.Bathroom}
              onChange={handleCheck}
            />
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
