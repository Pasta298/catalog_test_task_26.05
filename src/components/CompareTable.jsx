import "../styles/compare_table.css";

import { useContext } from "react";

import { CatalogContext } from "./CatalogContext";

export default function CompareTable() {
  const { compare, toggleCompare } = useContext(CatalogContext);

  if (!compare.length) return null;

  return (
    <section className="compare-section">
      <h2>Compare Products</h2>

      <div className="compare-wrapper">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Property</th>

              {compare.map((product) => (
                <th key={product.id}>
                  <div className="compare-product-header">
                    <img src={product.thumbnail} alt={product.title} />

                    <p className="compare-title">{product.title}</p>

                    <button onClick={() => toggleCompare(product)}>✕</button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brand</td>

              {compare.map((product) => (
                <td key={product.id}>{product.brand}</td>
              ))}
            </tr>

            <tr>
              <td>Category</td>

              {compare.map((product) => (
                <td key={product.id}>{product.category}</td>
              ))}
            </tr>

            <tr>
              <td>Price</td>

              {compare.map((product) => (
                <td key={product.id}>{product.price}</td>
              ))}
            </tr>

            <tr>
              <td>Rating</td>

              {compare.map((product) => (
                <td key={product.id}>{product.rating} ⭐</td>
              ))}
            </tr>

            <tr>
              <td>Stock</td>

              {compare.map((product) => (
                <td key={product.id}>
                  {product.stock > 0 ? "In stock" : "Out of stock"}
                </td>
              ))}
            </tr>

            <tr>
              <td>Discount</td>

              {compare.map((product) => (
                <td key={product.id}>
                  {product.discountPercentage > 0
                    ? `-${product.discountPercentage}%`
                    : "—"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
