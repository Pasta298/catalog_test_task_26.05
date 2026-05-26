import "./App.css";

import CatalogProvider from "./components/CatalogContext.jsx";

import Filters from "./components/Filters.jsx";
import SortSelect from "./components/SortSelect.jsx";
import FavoritesSection from "./components/FavoritesSection.jsx";
import ProductList from "./components/ProductList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CompareTable from "./components/CompareTable.jsx";

export default function App() {
  return (
    <CatalogProvider>
      <div id="page">
        <SearchBar />

        <main id="content">
          <div className="controls">
            <div className="filters-wrapper">
              <Filters />
            </div>

            <div className="sort-wrapper">
              <SortSelect />
            </div>
          </div>

          <FavoritesSection />

          <CompareTable />

          <ProductList />
        </main>
      </div>
    </CatalogProvider>
  );
}
