/**
 * ==========================================================================
 * Anuj Singh Portfolio - Condition-Based Scroll Trigger
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // Lock baseline viewports on initialize
    document.body.classList.add("locked");

    // 1. Fire up typing sequence
    initQuoteSequence();
});

/**
 * Types out custom quote sentence on the front page grid
 */
function initQuoteSequence() {
    const textElement = document.querySelector("#typing-text");
    if (!textElement) return;

    // Your precise quote including lightning, book, and sparkle emojis
    const quoteToType = 'Driven by ambition 🚀, powered by learning 🎯, and focused on creating meaningful impact.🌟';
    textElement.innerHTML = ""; 
    let index = 0;

    function type() {
        if (index < quoteToType.length) {
            textElement.innerHTML += quoteToType.charAt(index);
            index++;
            // Steady typing cadence speed rhythm (75ms per character)
            setTimeout(type, 75); 
        } else {
            // --- TYPING COMPLETE ---
            // Allow 1.5 seconds for comfortable reading of the quote, then transition views
            setTimeout(() => {
                transitionToPortfolio();
            }, 1500);
        }
    }
    
    setTimeout(type, 500); 
}

/**
 * Unlocks layout layers and performs a perfectly smooth slow scroll down to header summary stuff
 */
function transitionToPortfolio() {
    const portfolioMain = document.querySelector("#portfolio-main");
    const aboutHeader = document.querySelector("#about-profile");

    if (!portfolioMain || !aboutHeader) return;

    // 1. Reveal your portfolio block data wrapper smoothly
    portfolioMain.classList.remove("opacity-0");

    // 2. Clear body alignment lock metrics
    document.body.classList.remove("locked");

    // 3. Smoothly scroll down to land on your profile photo and info fold
    aboutHeader.scrollIntoView({ behavior: "smooth", block: "start" });

    // 4. Connect toolkit presentation visibility event hooks
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
}

/**
 * Visual highlight trigger loops for inner element tracking metrics
 */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const triggerBottom = (window.innerHeight / 5) * 4.5; 

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add("active");
        }
    });
}