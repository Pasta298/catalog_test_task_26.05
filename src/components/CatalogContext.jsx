import { createContext, useEffect, useState } from "react";

import { fetchCatalog } from "../services/api";

// eslint-disable-next-line react-refresh/only-export-components
export const CatalogContext = createContext();

export default function CatalogProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [inStockOnly, setInStockOnly] = useState(false);

  const [discountedOnly, setDiscountedOnly] = useState(false);

  const [sortBy, setSortBy] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });

  const [compare, setCompare] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await fetchCatalog();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(product) {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== product.id));

      return;
    }

    setFavorites([...favorites, product]);
  }

  function toggleCompare(product) {
    const exists = compare.find((item) => item.id === product.id);

    if (exists) {
      setCompare(compare.filter((item) => item.id !== product.id));

      return;
    }

    if (compare.length >= 3) {
      alert("You can compare up to 3 products");

      return;
    }

    setCompare([...compare, product]);
  }

  return (
    <CatalogContext.Provider
      value={{
        products,
        loading,
        error,
        search,
        setSearch,
        category,
        setCategory,
        inStockOnly,
        setInStockOnly,
        discountedOnly,
        setDiscountedOnly,
        sortBy,
        setSortBy,
        favorites,
        toggleFavorite,
        compare,
        toggleCompare,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
