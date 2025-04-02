document.addEventListener('DOMContentLoaded', () => {
    // Display products on home page
    const productGrid = document.getElementById('product-grid');
    
    if (productGrid) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card glass-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions">
                        <button class="btn btn-secondary view-product" data-id="${product.id}">${getTranslation('product_view')}</button>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">${getTranslation('product_add')}</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners for product interactions
        productGrid.addEventListener('click', (e) => {
            // Handle view product button
            if (e.target.classList.contains('view-product')) {
                const productId = e.target.getAttribute('data-id');
                window.location.href = `product.html?id=${productId}`;
            }
            
            // Handle add to cart button
            if (e.target.classList.contains('add-to-cart')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                addToCart(productId);
                
                // Show add to cart animation or notification
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.innerHTML = `<p>${getTranslation('product_added')}</p>`;
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
            }
        });
    }
});
