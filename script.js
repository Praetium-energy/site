// JavaScript for Praetium Energy Landing Page

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Praetium Energy website loaded successfully!');
    
    // Initialize the energy demand chart
    initializeDemandChart();
    
    // Add smooth scrolling to navigation
    addSmoothScrolling();
    
    // Add interactive animations
    addScrollAnimations();
    
    // Add contact form validation (if needed in future)
    // addContactFormValidation();
});

/**
 * Initialize the energy demand forecast chart
 */
function initializeDemandChart() {
    const ctx = document.getElementById('demandChart').getContext('2d');
    
    // Sample data for energy demand (matching the Streamlit version)
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const demandData = [850, 780, 720, 690, 750, 920, 1050, 1100, 980, 830, 790, 860];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Demanda Energética (MWh)',
                data: demandData,
                borderColor: '#4facfe',
                backgroundColor: 'rgba(79, 172, 254, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#4facfe',
                pointBorderColor: '#1f4e79',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Pronóstico Anual de Demanda Energética (MWh)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#1f4e79'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 600,
                    max: 1200,
                    ticks: {
                        color: '#1f4e79'
                    },
                    grid: {
                        color: 'rgba(31, 78, 121, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#1f4e79'
                    },
                    grid: {
                        color: 'rgba(31, 78, 121, 0.1)'
                    }
                }
            },
            elements: {
                point: {
                    hoverBackgroundColor: '#1f4e79'
                }
            }
        }
    });
}

/**
 * Add smooth scrolling behavior to internal links
 */
function addSmoothScrolling() {
    // This would be used if we had navigation links
    // For now, just ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Add scroll animations for elements
 */
function addScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Add animation styles and observe elements
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .contact-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

/**
 * Add hover effects to service cards
 */
function addServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Interactive lightning bolts animation
 */
function animateLightningBolts() {
    const lightningBolts = document.querySelectorAll('.lightning-bolt');
    
    lightningBolts.forEach((bolt, index) => {
        setTimeout(() => {
            bolt.style.animation = 'flash 2s infinite';
        }, index * 500);
    });
}

// Add CSS animation for lightning bolts
const style = document.createElement('style');
style.textContent = `
    @keyframes flash {
        0%, 50%, 100% { opacity: 0.3; }
        25%, 75% { opacity: 0.8; }
    }
    
    .service-card {
        transition: transform 0.3s ease;
    }
    
    .service-card:hover {
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

// Initialize additional effects when page loads
window.addEventListener('load', function() {
    addServiceCardEffects();
    animateLightningBolts();
});

/**
 * Utility function to format numbers (for future use)
 */
function formatNumber(num) {
    return new Intl.NumberFormat('es-ES').format(num);
}

/**
 * Future: Contact form validation
 */
function addContactFormValidation() {
    // This would be implemented if we add a contact form
    console.log('Contact form validation ready to be implemented');
}

// Export functions for potential future use
window.PraetiumEnergy = {
    initializeDemandChart,
    formatNumber,
    addSmoothScrolling
};
