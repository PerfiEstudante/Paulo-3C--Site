document.addEventListener('DOMContentLoaded', () => {
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const highContrastBtn = document.getElementById('high-contrast-btn');
    const fontSizeBtn = document.getElementById('font-size-btn');
    const body = document.body;

    // --- Funcionalidade do Menu de Acessibilidade ---
    accessibilityBtn.addEventListener('click', () => {
        const isExpanded = accessibilityBtn.getAttribute('aria-expanded') === 'true';
        accessibilityBtn.setAttribute('aria-expanded', !isExpanded);
        accessibilityMenu.classList.toggle('visible');
    });

    // --- Funcionalidade do Alto Contraste ---
    highContrastBtn.addEventListener('click', () => {
        body.classList.toggle('alto-contraste');
        if (body.classList.contains('alto-contraste')) {
            localStorage.setItem('acessibilidade-contraste', 'sim');
        } else {
            localStorage.removeItem('acessibilidade-contraste');
        }
    });

    // --- Funcionalidade de Aumentar a Fonte ---
    fontSizeBtn.addEventListener('click', () => {
        body.classList.toggle('font-size-large');
        if (body.classList.contains('font-size-large')) {
            localStorage.setItem('acessibilidade-fonte', 'sim');
        } else {
            localStorage.removeItem('acessibilidade-fonte');
        }
    });

    // --- Carrega as preferências do usuário ao carregar a página ---
    const contrasteSalvo = localStorage.getItem('acessibilidade-contraste');
    if (contrasteSalvo === 'sim') {
        body.classList.add('alto-contraste');
    }

    const fonteSalva = localStorage.getItem('acessibilidade-fonte');
    if (fonteSalva === 'sim') {
        body.classList.add('font-size-large');
    }
});
