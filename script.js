const MOBILE_MENU_CLASS = 'show';

function initMobileMenu() {
    const menuButton = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');

    if (!menuButton || !menu) return;

    menuButton.addEventListener('click', () => {
        menu.classList.toggle(MOBILE_MENU_CLASS);
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove(MOBILE_MENU_CLASS);
        });
    });
}

function initContactForm() {
    const forms = document.querySelectorAll('[data-contact-form]');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (!input) return;

            const email = input.value.trim();
            if (!email || !email.includes('@')) {
                showNotification('Veuillez entrer une adresse email valide.', 'error');
                input.focus();
                return;
            }

            showNotification('Merci ! Nous vous contacterons bientôt.', 'success');
            form.reset();
        });
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 400);
    }, 2800);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initScrollAnimation() {
    const animatedItems = document.querySelectorAll('[data-animate]');
    if (!animatedItems.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    animatedItems.forEach(item => {
        item.classList.add('before-visible');
        observer.observe(item);
    });
}

function initThemeToggle() {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
}

function initStatCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(target) {
    const finalValue = Number(target.dataset.counter || 0);
    let current = 0;
    const increment = Math.max(1, Math.round(finalValue / 60));

    const timer = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            target.textContent = finalValue;
            clearInterval(timer);
            return;
        }
        target.textContent = current.toLocaleString();
    }, 25);
}

function initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalOpen;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        });
    });

    document.querySelectorAll('[data-modal-close]').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('[data-modal]');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    });

    document.querySelectorAll('[data-modal]').forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initContactForm();
    initSmoothScroll();
    initScrollAnimation();
    initThemeToggle();
    initStatCounters();
    initModals();
});
