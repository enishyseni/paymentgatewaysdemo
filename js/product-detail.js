document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = getProductById(productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${product.name} - GlassMart`;
    
    // Display product details
    const productDetailSection = document.getElementById('product-detail');
    
    if (productDetailSection) {
        productDetailSection.innerHTML = `
            <div class="detail-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info">
                <h2 class="detail-title">${product.name}</h2>
                <p class="detail-price">$${product.price.toFixed(2)}</p>
                <p class="detail-description">${product.description}</p>
                
                <div class="quantity-control">
                    <button id="decrease-quantity">-</button>
                    <input type="number" id="product-quantity" value="1" min="1" max="10">
                    <button id="increase-quantity">+</button>
                </div>
                
                <button class="btn btn-primary" id="add-to-cart-btn">Add to Cart</button>
                <button class="btn btn-secondary" id="back-to-shopping">Continue Shopping</button>
            </div>
        `;
        
        // Add event listeners
        const quantityInput = document.getElementById('product-quantity');
        const decreaseBtn = document.getElementById('decrease-quantity');
        const increaseBtn = document.getElementById('increase-quantity');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const backToShoppingBtn = document.getElementById('back-to-shopping');
        
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
        
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(productId, quantity);
            
            // Show add to cart notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `<p>${quantity} ${product.name}(s) added to cart!</p>`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        });
        
        backToShoppingBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
