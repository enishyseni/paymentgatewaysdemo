document.addEventListener('DOMContentLoaded', () => {
    // Initialize Stripe Elements
    // Note: In a real application, you would use your actual Stripe publishable key
    const stripePublishableKey = 'pk_test_51HG9W...'; // Replace with your test key
    const stripe = Stripe(stripePublishableKey);
    const elements = stripe.elements();
    
    // Create card element
    const cardElement = elements.create('card', {
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    });
    
    const cardContainer = document.getElementById('card-element');
    if (cardContainer) {
        cardElement.mount('#card-element');
        
        // Handle real-time validation errors
        cardElement.on('change', function(event) {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
        
        // Handle form submission
        const stripeForm = document.getElementById('stripe-form');
        if (stripeForm) {
            stripeForm.addEventListener('submit', async function(event) {
                event.preventDefault();
                
                // Get billing info
                const billingInfo = JSON.parse(sessionStorage.getItem('billing-info') || '{}');
                if (!billingInfo.name || !billingInfo.email || !billingInfo.address) {
                    alert('Please fill in all billing information.');
                    return;
                }
                
                // Disable the submit button to prevent repeated clicks
                document.getElementById('stripe-submit').disabled = true;
                
                try {
                    // In a real application, you would create a payment intent on your server
                    // and return a client secret to complete the payment on the client side
                    // For this demo, we'll simulate a successful payment
                    
                    // Show processing message
                    const cardErrors = document.getElementById('card-errors');
                    cardErrors.textContent = 'Processing payment...';
                    
                    // Simulate processing delay
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Simulate successful payment
                    handleSuccessfulPayment();
                } catch (error) {
                    const errorElement = document.getElementById('card-errors');
                    errorElement.textContent = error.message;
                    document.getElementById('stripe-submit').disabled = false;
                }
            });
        }
    }
    
    // Initialize PayPal
    // Note: In a real application, you would use your actual PayPal client ID
    const paypalContainer = document.getElementById('paypal-button-container');
    if (paypalContainer) {
        paypal.Buttons({
            createOrder: function(data, actions) {
                // Get cart total
                const total = getCartTotal();
                
                // Create the order
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total.toFixed(2)
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                // Capture the order
                return actions.order.capture().then(function(details) {
                    handleSuccessfulPayment(`Payment completed with PayPal! Transaction ID: ${details.id}`);
                });
            },
            onError: function(err) {
                console.error('PayPal error:', err);
                alert('There was an error processing your PayPal payment. Please try again.');
            }
        }).render('#paypal-button-container');
    }
    
    // Handle successful payment (both Stripe and PayPal)
    function handleSuccessfulPayment(message = 'Payment processed successfully!') {
        // Clear cart
        clearCart();
        
        // Create success page content
        const checkoutSection = document.querySelector('.checkout');
        if (checkoutSection) {
            checkoutSection.innerHTML = `
                <div class="payment-success glass-card">
                    <i class="fas fa-check-circle success-icon"></i>
                    <h2>Thank You!</h2>
                    <p>${message}</p>
                    <p>Your order has been placed successfully.</p>
                    <a href="index.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            `;
        }
        
        // Update cart count
        updateCartCount();
    }
});
