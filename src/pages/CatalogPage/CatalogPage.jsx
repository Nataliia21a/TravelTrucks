import Filters from "../../components/Filters/Filters";
import TruckerList from "../../components/TrucksList/TruckerList";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <Filters />
      <TruckerList />
    </div>
  );
}
