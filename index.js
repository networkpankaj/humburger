function toggleMenu() {
    const menu = document.getElementById('mainmenu');
    const menuToggle = document.querySelector('.menu-toggle-box');

    // Toggle the collapse class to show/hide the menu
    menu.classList.toggle('show');
    
    // Update the aria-expanded attribute to reflect the state
    const isExpanded = menu.classList.contains('show');
    menuToggle.setAttribute('aria-expanded', isExpanded);
}
