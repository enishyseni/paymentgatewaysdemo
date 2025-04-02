document.addEventListener('DOMContentLoaded', () => {
    // Add language switcher to all pages
    const navUl = document.querySelector('nav ul');
    
    if (navUl) {
        // Create language switcher
        const langSwitcher = document.createElement('li');
        langSwitcher.className = 'lang-switcher';
        langSwitcher.innerHTML = `
            <div class="lang-switcher-btn">
                <span>${getCurrentLanguage().toUpperCase()}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="lang-options">
                <div class="lang-option ${getCurrentLanguage() === 'en' ? 'active' : ''}" data-lang="en">
                    <img src="images/flags/en.png" alt="English">
                    English
                </div>
                <div class="lang-option ${getCurrentLanguage() === 'sq' ? 'active' : ''}" data-lang="sq">
                    <img src="images/flags/sq.png" alt="Albanian">
                    Shqip
                </div>
            </div>
        `;
        
        navUl.appendChild(langSwitcher);
        
        // Toggle language options
        const langSwitcherBtn = langSwitcher.querySelector('.lang-switcher-btn');
        const langOptions = langSwitcher.querySelector('.lang-options');
        
        langSwitcherBtn.addEventListener('click', () => {
            langOptions.classList.toggle('show');
        });
        
        // Hide options when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langOptions.classList.remove('show');
            }
        });
        
        // Language selection
        const langOptionElements = langSwitcher.querySelectorAll('.lang-option');
        langOptionElements.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.getAttribute('data-lang');
                
                if (selectedLang !== getCurrentLanguage()) {
                    setCurrentLanguage(selectedLang);
                    translatePage();
                    
                    // Show notification
                    const notification = document.createElement('div');
                    notification.className = 'notification';
                    notification.innerHTML = `<p>${
                        selectedLang === 'en' ? 'Language changed to English' : 'Gjuha u ndryshua në Shqip'
                    }</p>`;
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
                
                langOptions.classList.remove('show');
            });
        });
    }
});
