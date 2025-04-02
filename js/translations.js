// Translations for the website
const translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_cart': 'Cart',
        
        // Hero section
        'hero_title': 'Welcome to GlassMart',
        'hero_description': 'Experience the beauty of glassmorphic shopping',
        
        // Products section
        'products_title': 'Featured Products',
        'product_view': 'View Details',
        'product_add': 'Add to Cart',
        'product_added': 'Product added to cart!',
        
        // Product detail
        'quantity_label': 'Quantity',
        'add_to_cart_btn': 'Add to Cart',
        'continue_shopping': 'Continue Shopping',
        'added_to_cart': '{quantity} {product}(s) added to cart!',
        
        // Cart
        'cart_title': 'Your Cart',
        'cart_empty': 'Your cart is empty',
        'cart_start_shopping': 'Start Shopping',
        'cart_total': 'Total:',
        'cart_checkout': 'Proceed to Checkout',
        'cart_empty_alert': 'Your cart is empty. Add some products first!',
        
        // Checkout
        'checkout_title': 'Checkout',
        'order_summary': 'Order Summary',
        'checkout_total': 'Total:',
        'billing_info': 'Billing Information',
        'full_name': 'Full Name',
        'email': 'Email',
        'address': 'Address',
        'city': 'City',
        'zip': 'ZIP Code',
        'country': 'Country',
        'select_country': 'Select a country',
        'payment_method': 'Payment Method',
        'card_label': 'Credit or Debit Card',
        'pay_with_stripe': 'Pay with Stripe',
        'pay_with_paypal': 'Click the PayPal button to complete your purchase:',
        'billing_alert': 'Please fill in all billing information.',
        'processing_payment': 'Processing payment...',
        
        // Countries
        'country_us': 'United States',
        'country_ca': 'Canada',
        'country_uk': 'United Kingdom',
        'country_au': 'Australia',
        
        // Payment success
        'thank_you': 'Thank You!',
        'payment_success': 'Payment processed successfully!',
        'order_success': 'Your order has been placed successfully.',
        'continue_shopping_btn': 'Continue Shopping',
        'payment_success_paypal': 'Payment completed with PayPal! Transaction ID: {id}',
        'payment_error': 'There was an error processing your payment. Please try again.',
        
        // Footer
        'footer_text': '© 2023 GlassMart. All rights reserved.'
    },
    'sq': {
        // Navigation
        'nav_home': 'Kryefaqja',
        'nav_cart': 'Shporta',
        
        // Hero section
        'hero_title': 'Mirë se vini në GlassMart',
        'hero_description': 'Përvoja e bukur e blerjes glasmorfike',
        
        // Products section
        'products_title': 'Produktet e Veçanta',
        'product_view': 'Shiko Detajet',
        'product_add': 'Shto në Shportë',
        'product_added': 'Produkti u shtua në shportë!',
        
        // Product detail
        'quantity_label': 'Sasia',
        'add_to_cart_btn': 'Shto në Shportë',
        'continue_shopping': 'Vazhdo Blerjet',
        'added_to_cart': '{quantity} {product} u shtuan në shportë!',
        
        // Cart
        'cart_title': 'Shporta Juaj',
        'cart_empty': 'Shporta juaj është bosh',
        'cart_start_shopping': 'Fillo Blerjet',
        'cart_total': 'Totali:',
        'cart_checkout': 'Vazhdo në Arkë',
        'cart_empty_alert': 'Shporta juaj është bosh. Shtoni disa produkte së pari!',
        
        // Checkout
        'checkout_title': 'Arka',
        'order_summary': 'Përmbledhja e Porosisë',
        'checkout_total': 'Totali:',
        'billing_info': 'Informacioni i Faturimit',
        'full_name': 'Emri i Plotë',
        'email': 'Email',
        'address': 'Adresa',
        'city': 'Qyteti',
        'zip': 'Kodi Postar',
        'country': 'Vendi',
        'select_country': 'Zgjidh një vend',
        'payment_method': 'Metoda e Pagesës',
        'card_label': 'Kartë Krediti ose Debiti',
        'pay_with_stripe': 'Paguaj me Stripe',
        'pay_with_paypal': 'Klikoni butonin PayPal për të përfunduar blerjen tuaj:',
        'billing_alert': 'Ju lutemi plotësoni të gjitha informacionet e faturimit.',
        'processing_payment': 'Duke përpunuar pagesën...',
        
        // Countries
        'country_us': 'Shtetet e Bashkuara',
        'country_ca': 'Kanada',
        'country_uk': 'Mbretëria e Bashkuar',
        'country_au': 'Australi',
        
        // Payment success
        'thank_you': 'Faleminderit!',
        'payment_success': 'Pagesa u përpunua me sukses!',
        'order_success': 'Porosia juaj u vendos me sukses.',
        'continue_shopping_btn': 'Vazhdo Blerjet',
        'payment_success_paypal': 'Pagesa u krye me PayPal! ID e transaksionit: {id}',
        'payment_error': 'Pati një gabim në përpunimin e pagesës. Ju lutemi provoni përsëri.',
        
        // Footer
        'footer_text': '© 2023 GlassMart. Të gjitha të drejtat e rezervuara.'
    }
};

// Function to get translation
function getTranslation(key, lang = getCurrentLanguage()) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    
    // Fallback to English
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    
    // Return the key if no translation is found
    return key;
}

// Function to get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Function to set current language
function setCurrentLanguage(lang) {
    localStorage.setItem('language', lang);
}

// Function to format translation with variables
function formatTranslation(key, variables = {}, lang = getCurrentLanguage()) {
    let text = getTranslation(key, lang);
    
    // Replace variables in the text
    for (const [varName, varValue] of Object.entries(variables)) {
        text = text.replace(`{${varName}}`, varValue);
    }
    
    return text;
}

// Function to translate the page
function translatePage() {
    const lang = getCurrentLanguage();
    
    // Update language switcher
    const langSwitcherBtn = document.querySelector('.lang-switcher-btn span');
    if (langSwitcherBtn) {
        langSwitcherBtn.textContent = lang.toUpperCase();
    }
    
    const langOptions = document.querySelectorAll('.lang-option');
    if (langOptions) {
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
    }
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key, lang);
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = getTranslation(key, lang);
    });
    
    // Translate buttons that have specific text
    document.querySelectorAll('button.view-product').forEach(button => {
        button.textContent = getTranslation('product_view', lang);
    });
    
    document.querySelectorAll('button.add-to-cart').forEach(button => {
        button.textContent = getTranslation('product_add', lang);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set default language if not set yet
    if (!localStorage.getItem('language')) {
        setCurrentLanguage('en');
    }
    
    translatePage();
});
