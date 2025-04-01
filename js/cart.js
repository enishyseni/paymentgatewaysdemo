document.addEventListener('DOMContentLoaded', () => {
    // Display cart items
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cartList && cartTotal) {
        renderCart();
        
        // Add event listener for cart items
        cartList.addEventListener('click', (e) => {
            // Handle increase quantity
            if (e.target.classList.contains('increase-qty')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = getCart().find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity + 1);
                    renderCart();
                }
            }
            
            // Handle decrease quantity
            if (e.target.classList.contains('decrease-qty')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = getCart().find(item => item.id === productId);
                if (item && item.quantity > 1) {
                    updateCartQuantity(productId, item.quantity - 1);
                    renderCart();
                }
            }
            
            // Handle remove item
            if (e.target.classList.contains('remove-item')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(productId);
                renderCart();
            }
        });
        
        // Add event listener for checkout button
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                const cart = getCart();
                if (cart.length > 0) {
                    window.location.href = 'checkout.html';
                } else {
                    alert('Your cart is empty. Add some products first!');
                }
            });
        }
    }
    
    // Function to render cart items
    function renderCart() {
        const cart = getCart();
        
        if (cart.length === 0) {
            cartList.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <a href="index.html" class="btn btn-primary">Start Shopping</a>
                </div>
            `;
            cartTotal.textContent = '0.00';
            if (checkoutBtn) {
                checkoutBtn.disabled = true;
            }
        } else {
            cartList.innerHTML = '';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h3 class="cart-item-title">${item.name}</h3>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="decrease-qty" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-subtotal">
                        $${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div class="cart-item-remove">
                        <i class="fas fa-trash remove-item" data-id="${item.id}"></i>
                    </div>
                `;
                cartList.appendChild(cartItem);
            });
            
            cartTotal.textContent = getCartTotal().toFixed(2);
            if (checkoutBtn) {
                checkoutBtn.disabled = false;
            }
        }
    }
});
