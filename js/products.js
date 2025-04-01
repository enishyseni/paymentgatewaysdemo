// Products data
const products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 199.99,
        description: "A sleek smartwatch with health monitoring and notification features.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 149.99,
        description: "Premium noise-cancelling wireless headphones for immersive audio experience.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: 3,
        name: "Laptop Sleeve",
        price: 29.99,
        description: "Protective sleeve for your laptop with water-resistant material.",
        image: "https://images.unsplash.com/photo-1544925524-82a09dca5f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: 4,
        name: "Portable Speaker",
        price: 79.99,
        description: "Compact portable speaker with 10 hours of battery life and waterproof design.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: 5,
        name: "Phone Stand",
        price: 19.99,
        description: "Adjustable phone stand for your desk, perfect for video calls and watching content.",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    },
    {
        id: 6,
        name: "Wireless Charger",
        price: 39.99,
        description: "Fast wireless charger compatible with all Qi-enabled devices.",
        image: "https://images.unsplash.com/photo-1622036674932-90a8a290d150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        featured: true
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Cart functionality
function initCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex > -1) {
        cart[productIndex].quantity += quantity;
    } else {
        const product = getProductById(productId);
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    return cart;
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    return cart;
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex > -1) {
        if (quantity <= 0) {
            return removeFromCart(productId);
        }
        cart[productIndex].quantity = quantity;
        saveCart(cart);
    }
    
    return cart;
}

function clearCart() {
    localStorage.removeItem('cart');
    initCart();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    updateCartCount();
});
