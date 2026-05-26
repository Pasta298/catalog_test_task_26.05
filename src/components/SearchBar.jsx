import { useContext } from "react";
import "../styles/search_bar.css";

import { CatalogContext } from "../components/CatalogContext.jsx";

export default function SearchBar() {
  const { search, setSearch } = useContext(CatalogContext);

  return (
    <header id="search_bar">
      <div id="search_field">
        <div id="search_wrapper">
          <input
            id="search_input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a title, brand or category"
          />

          <button id="search_button"></button>
        </div>
      </div>
    </header>
  );
}
