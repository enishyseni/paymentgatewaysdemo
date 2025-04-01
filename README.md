# Payment Gateways Demo - E-Commerce Website

A demonstration e-commerce website showcasing integration with multiple payment gateways (Stripe and PayPal).

## Project Overview

This project is a simple e-commerce website that features:

- A home page displaying 6 products
- Product detail pages
- Shopping cart functionality
- Checkout process with billing information collection
- Two payment gateway options (Stripe and PayPal)
- Minimalist glassmorphic design

## Technologies Used

- HTML5, CSS3, JavaScript
- Stripe API for payment processing
- PayPal API for payment processing
- Local storage for cart management

## Project Structure

- `index.html` - Home page with product listings
- `product.html` - Product detail page
- `cart.html` - Shopping cart page
- `checkout.html` - Checkout and payment page
- `css/` - CSS stylesheets
- `js/` - JavaScript files
- `images/` - Product and UI images

## How to Use

1. Clone the repository
2. Replace API keys for Stripe and PayPal in the appropriate configuration files
3. Open `index.html` in your browser to start shopping

## Payment Gateway Integration

### Stripe

The project uses Stripe Elements for a secure, customizable payment flow. API keys need to be set in the `js/payment.js` file.

### PayPal

The PayPal Smart Payment Buttons are integrated to allow for quick and convenient payments. API configuration should be updated in the `js/payment.js` file.

## Note

This is a demonstration project. For a production environment, you would need to implement:

- Server-side validation and processing
- Secure storage of API keys
- Additional security measures
- Complete error handling

## License

MIT
