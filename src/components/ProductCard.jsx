import "../styles/product_card.css";

export default function ProductCard({
  product,
  isFavorite,
  isCompared,
  toggleFavorite,
  toggleCompare,
}) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="product-brand">{product.brand}</p>

      <p className="product-category">{product.category}</p>

      <p className="product-price">${product.price}</p>

      <p className="product-rating">{product.rating} ⭐</p>

      <p className="product-stock">
        {product.stock > 0 ? "In stock" : "Out of stock"}
      </p>

      {product.discountPercentage > 0 && (
        <p className="product-discount">-{product.discountPercentage}%</p>
      )}

      <button onClick={() => toggleFavorite(product)}>
        {isFavorite ? "Remove favorite" : "Favorite"}
      </button>

      <button onClick={() => toggleCompare(product)}>
        {isCompared ? "Remove compare" : "Compare"}
      </button>
    </div>
  );
}
