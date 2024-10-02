/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
const toggleThemeBtn = document.getElementById('toggleTheme');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const sections = document.querySelectorAll('.section-content');
const modals = document.querySelectorAll('.modal');
const modalLists = document.querySelectorAll('.modal ul');

// Função para alternar entre o modo claro e escuro
function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        // Trocar para o modo claro
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        
        sections.forEach(section => {
            section.classList.remove('dark-mode');
            section.classList.add('light-mode');
        });

        modals.forEach(modal => {
            modal.classList.remove('dark-mode');
            modal.classList.add('light-mode');
        });

        modalLists.forEach(list => {
            list.classList.remove('dark-mode');
            list.classList.add('light-mode');
        });

        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
    } else {
        // Trocar para o modo escuro
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        sections.forEach(section => {
            section.classList.remove('light-mode');
            section.classList.add('dark-mode');
        });

        modals.forEach(modal => {
            modal.classList.remove('light-mode');
            modal.classList.add('dark-mode');
        });

        modalLists.forEach(list => {
            list.classList.remove('light-mode');
            list.classList.add('dark-mode');
        });

        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    }
}

// Evento para alternar tema no clique do botão
toggleThemeBtn.addEventListener('click', toggleTheme);

// Exibir estado inicial
lightIcon.style.display = 'inline';
darkIcon.style.display = 'none';

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
