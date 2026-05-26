import "../styles/sort_select.css";
import { useContext } from "react";
import { CatalogContext } from "../components/CatalogContext.jsx";

export default function SortSelect() {
  const { sortBy, setSortBy } = useContext(CatalogContext);

  return (
    <select
      className="sort-select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">No sorting</option>

      <option value="price-low">Price: low → high</option>

      <option value="price-high">Price: high → low</option>

      <option value="rating">Rating: high → low</option>

      <option value="title">Title: A → Z</option>
    </select>
  );
}
