import "../styles/filters.css";
import { useContext } from "react";

import { CatalogContext } from "../components/CatalogContext.jsx";

export default function Filters() {
  const {
    category,
    setCategory,
    inStockOnly,
    setInStockOnly,
    discountedOnly,
    setDiscountedOnly,
  } = useContext(CatalogContext);

  return (
    <div className="filters">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All categories</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        In stock only
      </label>

      <label>
        <input
          type="checkbox"
          checked={discountedOnly}
          onChange={(e) => setDiscountedOnly(e.target.checked)}
        />
        Discounted only
      </label>
    </div>
  );
}
