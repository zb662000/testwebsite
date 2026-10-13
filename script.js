// Sample product data (could also be fetched from an API)
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Smartwatch", price: 200 },
  { id: 5, name: "Tablet", price: 500 },
];

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Function to display products
function displayProducts(items) {
  productContainer.innerHTML = ''; // Clear previous content
  items.forEach(item => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <div class="product-name">${item.name}</div>
      <div>Price: $${item.price}</div>
    `;
    productContainer.appendChild(productDiv);
  });
}

// Function to filter and sort products
function filterAndSortProducts() {
  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  const sortValue = sortSelect.value;
  if (sortValue === 'name-asc') filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
  if (sortValue === 'name-desc') filteredProducts.sort((a,b) => b.name.localeCompare(a.name));
  if (sortValue === 'price-asc') filteredProducts.sort((a,b) => a.price - b.price);
  if (sortValue === 'price-desc') filteredProducts.sort((a,b) => b.price - a.price);

  displayProducts(filteredProducts);
}

// Initial display
displayProducts(products);

// Event listeners
searchInput.addEventListener('input', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);
