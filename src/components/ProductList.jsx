import "../styles/product_list.css";

import { useContext, useMemo } from "react";

import { CatalogContext } from "../components/CatalogContext.jsx";

import ProductCard from "./ProductCard";

import { filterAndSortProducts } from "../utils/productFuncs";

export default function ProductList() {
  const {
    products,
    loading,
    error,
    search,
    category,
    inStockOnly,
    discountedOnly,
    sortBy,
    favorites,
    toggleFavorite,
    compare,
    toggleCompare,
  } = useContext(CatalogContext);

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, {
      search,
      category,
      inStockOnly,
      discountedOnly,
      sortBy,
    });
  }, [products, search, category, inStockOnly, discountedOnly, sortBy]);

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!filteredProducts.length) {
    return <p>No products found</p>;
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.some((p) => p.id === product.id)}
          isCompared={compare.some((p) => p.id === product.id)}
          toggleFavorite={toggleFavorite}
          toggleCompare={toggleCompare}
        />
      ))}
    </div>
  );
}
