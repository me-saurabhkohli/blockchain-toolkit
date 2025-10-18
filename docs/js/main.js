// Main JavaScript for Blockchain Toolkit website
(function() {
    'use strict';

    // DOM elements
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const newsletterForm = document.querySelector('.newsletter-form');

    // Initialize the application
    function init() {
        setupNavigation();
        setupScrollEffects();
        setupAnimations();
        setupNewsletterForm();
        setupThemeToggle();
        setupSmoothScrolling();
    }

    // Navigation functionality
    function setupNavigation() {
        // Mobile navigation toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                
                // Animate hamburger icon
                const spans = navToggle.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transform = navMenu.classList.contains('active') 
                        ? getHamburgerTransform(index)
                        : 'none';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = 'none';
                    });
                }
            });

            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = 'none';
                    });
                });
            });
        }

        // Navbar scroll effect
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add background when scrolling
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Hide navbar when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Hamburger animation transforms
    function getHamburgerTransform(index) {
        const transforms = [
            'rotate(45deg) translate(5px, 5px)',
            'opacity: 0',
            'rotate(-45deg) translate(7px, -6px)'
        ];
        return transforms[index];
    }

    // Scroll effects and animations
    function setupScrollEffects() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => {
            observer.observe(el);
        });

        // Add animation classes to elements that should animate
        const elementsToAnimate = [
            '.feature-card',
            '.framework-card',
            '.step-card',
            '.community-link'
        ];

        elementsToAnimate.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.classList.add('animate-on-scroll');
                el.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }

    // Setup animations
    function setupAnimations() {
        // Terminal typing animation
        const terminalLines = document.querySelectorAll('.terminal-line');
        if (terminalLines.length > 0) {
            animateTerminal(terminalLines);
        }

        // Stats counter animation
        const stats = document.querySelectorAll('.stat-number');
        if (stats.length > 0) {
            animateCounters(stats);
        }
    }

    // Terminal typing animation
    function animateTerminal(lines) {
        let delay = 0;
        
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '0';
                line.style.animation = `fadeInUp 0.5s ease-out ${delay}s forwards`;
                
                // Typing effect for commands
                const command = line.querySelector('.terminal-command');
                if (command) {
                    typeText(command, command.textContent, delay + 0.5);
                }
            }, delay * 1000);
            
            delay += 1;
        });
    }

    // Typing text effect
    function typeText(element, text, delay) {
        element.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 50);
        }, delay * 1000);
    }

    // Counter animation
    function animateCounters(counters) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent.replace(/\D/g, ''));
                    const suffix = counter.textContent.replace(/\d/g, '');
                    
                    animateCounter(counter, target, suffix);
                    observer.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Animate individual counter
    function animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    }

    // Newsletter form handling
    function setupNewsletterForm() {
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = this.querySelector('.newsletter-input').value;
                const button = this.querySelector('.newsletter-button');
                
                if (validateEmail(email)) {
                    // Simulate form submission
                    button.textContent = 'Subscribing...';
                    button.disabled = true;
                    
                    setTimeout(() => {
                        button.textContent = 'Subscribed!';
                        button.style.backgroundColor = '#10b981';
                        
                        // Reset after 3 seconds
                        setTimeout(() => {
                            button.textContent = 'Subscribe';
                            button.disabled = false;
                            button.style.backgroundColor = '';
                            this.reset();
                        }, 3000);
                    }, 1500);
                } else {
                    showNotification('Please enter a valid email address', 'error');
                }
            });
        }
    }

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Theme toggle functionality
    function setupThemeToggle() {
        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);

        // Create theme toggle button if it doesn't exist
        const themeToggle = document.querySelector('.theme-toggle') || createThemeToggle();
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update button icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    }

    // Create theme toggle button
    function createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
        toggle.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--primary-yellow);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toggle);
        return toggle;
    }

    // Smooth scrolling for anchor links
    function setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : '#10b981'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Feature card interactions
    function setupFeatureCards() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Copy to clipboard functionality
    function setupCopyButtons() {
        const codeBlocks = document.querySelectorAll('.step-code code');
        
        codeBlocks.forEach(block => {
            block.style.cursor = 'pointer';
            block.title = 'Click to copy';
            
            block.addEventListener('click', function() {
                const text = this.textContent;
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        showNotification('Copied to clipboard!', 'success');
                    });
                } else {
                    // Fallback for older browsers
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                    showNotification('Copied to clipboard!', 'success');
                }
            });
        });
    }

    // Lazy loading for images
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Performance monitoring
    function setupPerformanceMonitoring() {
        // Monitor page load time
        window.addEventListener('load', function() {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
            
            // Report to analytics if needed
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_load_time', {
                    value: Math.round(loadTime)
                });
            }
        });
    }

    // Error handling
    function setupErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
            
            // Report critical errors
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: e.error.message,
                    fatal: false
                });
            }
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Additional setup after DOM load
    window.addEventListener('load', function() {
        setupFeatureCards();
        setupCopyButtons();
        setupLazyLoading();
        setupPerformanceMonitoring();
        setupErrorHandling();
    });

    // Export functions for potential external use
    window.BlockchainToolkit = {
        showNotification,
        validateEmail,
        animateCounter
    };

})();