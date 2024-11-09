import css from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <svg width="136" height="16" className={css.logo}>
      <use href="/svg/symbol-defs.svg#icon-travel-trucks-logo"></use>
    </svg>
  );
}
