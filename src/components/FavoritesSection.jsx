import "../styles/favorites.css";

import { useContext } from "react";
import { CatalogContext } from "../components/CatalogContext.jsx";
import ProductCard from "./ProductCard";

export default function FavoritesSection() {
  const { favorites, toggleFavorite, toggleCompare, compare } =
    useContext(CatalogContext);

  if (!favorites.length) {
    return <p className="favorites-empty">No favorites yet</p>;
  }
  return (
    <section className="favorites">
      <h2>Favorites</h2>

      <div className="product-grid">
        {favorites.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={true}
            isCompared={compare.some((p) => p.id === product.id)}
            toggleFavorite={toggleFavorite}
            toggleCompare={toggleCompare}
          />
        ))}
      </div>
    </section>
  );
}
