document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulate successful login
            window.location.href = 'home.html';
        });
    }
});

function displayProductDetails(productId) {
    const products = [
        { id: 1, name: "Accessory 1", price: "$10", description: "High-quality accessory.", reviews: "★★★★☆", image: "../images/accessories.jpg" },
        // Add more product objects here
    ];
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        document.getElementById('product-details').innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>${product.description}</p>
            <p>Reviews: ${product.reviews}</p>
            <button onclick="window.location.href='address.html'">Buy Now</button>
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
    if (productId) {
        displayProductDetails(productId);
    }
});
