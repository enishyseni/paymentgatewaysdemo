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
- Multilingual support (English and Albanian)

## Technologies Used

- HTML5, CSS3, JavaScript
- Stripe API for payment processing
- PayPal API for payment processing
- Local storage for cart management
- Session storage for form data persistence

## Project Structure

- `index.html` - Home page with product listings
- `product.html` - Product detail page
- `cart.html` - Shopping cart page
- `checkout.html` - Checkout and payment page
- `css/` - CSS stylesheets
- `js/` - JavaScript files
- `images/` - Product and UI images (including language flags)

## How to Use

1. Clone the repository
2. Replace API keys for Stripe and PayPal in the appropriate configuration files
3. Open `index.html` in your browser to start shopping
4. Use the language switcher in the top-right corner to change between English and Albanian

## Payment Gateway Integration

### Stripe

The project uses Stripe Elements for a secure, customizable payment flow. API keys need to be set in the `js/payment.js` file.

### PayPal

The PayPal Smart Payment Buttons are integrated to allow for quick and convenient payments. API configuration should be updated in the `js/payment.js` file.

## Multilingual Support

The website supports two languages:

- English (default)
- Albanian (Shqip)

The language preference is saved in localStorage, so it persists across page reloads and sessions. All UI elements are translated dynamically, including dynamically generated content.

To add more languages:

1. Add a new language option in the language switcher
2. Add translations for the new language in the `translations.js` file
3. Add the corresponding flag image in the `images/flags/` directory

## Note

This is a demonstration project. For a production environment, you would need to implement:

- Server-side validation and processing
- Secure storage of API keys
- Additional security measures
- Complete error handling
- More comprehensive translation management

## License

MIT
