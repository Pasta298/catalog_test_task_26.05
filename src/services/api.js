export async function fetchCatalog() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");

    if (!response.ok) {
      throw new Error(`Http ${response.status} error!`);
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Fetch failed!", error.message);
  }
}
