// products.js
const products = [
    {
        id: 1,
        name: "Men's T-shirt",
        price: "$25",
        image: "images/tshirt.jpg",
        description: "Comfortable and stylish T-shirt.",
        reviews: "4.5/5"
    },
    {
        id: 2,
        name: "Leather Wallet",
        price: "$45",
        image: "images/wallet.jpg",
        description: "High-quality leather wallet.",
        reviews: "4.7/5"
    }
];

function displayProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        document.getElementById('product-details').innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>${product.description}</p>
            <p>Reviews: ${product.reviews}</p>
            <button onclick="addToCart(${product.id})">Buy Now</button>
        `;
    }
}

function addToCart(productId) {
    // Logic to add product to cart
    alert('Product added to cart!');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    displayProductDetails(productId);
});
