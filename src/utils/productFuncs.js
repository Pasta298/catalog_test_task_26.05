export function filterAndSortProducts(products, options) {
  let result = [...products];

  if (options.search) {
    const s = options.search.toLowerCase();

    result = result.filter((p) =>
      [p.title, p.brand, p.category].join(" ").toLowerCase().includes(s)
    );
  }

  if (options.category) {
    result = result.filter((p) => p.category === options.category);
  }

  if (options.inStockOnly) {
    result = result.filter((p) => p.stock > 0);
  }

  if (options.discountedOnly) {
    result = result.filter((p) => p.discountPercentage > 0);
  }

  switch (options.sortBy) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;

    case "title":
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  return result;
}
