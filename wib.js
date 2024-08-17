let cartCount = 0;

function addToCart(productName, productPrice) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Added ${productName} to the cart!`);
}

// Optional: You can also use localStorage or a backend to keep track of the cart items
