document.addEventListener('DOMContentLoaded', () => {
    // Display checkout items
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    if (checkoutItems && checkoutTotal) {
        const cart = getCart();
        
        if (cart.length === 0) {
            window.location.href = 'cart.html';
            return;
        }
        
        // Display items in checkout
        cart.forEach(item => {
            const checkoutItem = document.createElement('div');
            checkoutItem.className = 'checkout-item';
            checkoutItem.innerHTML = `
                <div class="checkout-item-name">
                    ${item.name} <span class="checkout-item-quantity">x${item.quantity}</span>
                </div>
                <div class="checkout-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
            `;
            checkoutItems.appendChild(checkoutItem);
        });
        
        // Display total
        checkoutTotal.textContent = getCartTotal().toFixed(2);
    }
    
    // Handle payment tab switching
    const paymentTabs = document.querySelectorAll('.payment-tab');
    const paymentPanels = document.querySelectorAll('.payment-panel');
    
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            paymentTabs.forEach(t => t.classList.remove('active'));
            paymentPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to current tab and corresponding panel
            tab.classList.add('active');
            const targetPanel = document.getElementById(tab.getAttribute('data-target'));
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // Form validation
    const billingForm = document.getElementById('billing-form');
    
    if (billingForm) {
        billingForm.addEventListener('input', validateForm);
    }
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();
        const country = document.getElementById('country').value;
        
        // Store form data in session storage for payment processing
        const formData = { name, email, address, city, zip, country };
        sessionStorage.setItem('billing-info', JSON.stringify(formData));
        
        // Enable/disable payment buttons based on form validity
        const isFormValid = name && email && address && city && zip && country;
        const stripeSubmit = document.getElementById('stripe-submit');
        
        if (stripeSubmit) {
            stripeSubmit.disabled = !isFormValid;
        }
        
        // PayPal button will be handled in the payment.js file
    }
});
