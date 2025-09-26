import './input.css';
const hamburgerMenu = document.querySelector('button.hamburger-menu');
const navigationBar = document.querySelector('nav');
const accessibilityAttributes = ['aria-pressed', 'aria-expanded']
// console.log('it is working boss!', hamburgerMenu)


hamburgerMenu.addEventListener('click', (e) => {
    for (let i = 0; i < accessibilityAttributes.length; i++) {
        const attr = accessibilityAttributes[i];
        const currentValue = e.currentTarget.getAttribute(attr);
        e.currentTarget.setAttribute(attr, currentValue === 'false' ? 'true' : 'false');
    }
    classToggle(e.currentTarget)
    classToggle(navigationBar)

})
console.log(hamburgerMenu)
console.log(hamburgerMenu.getAttribute('aria-pressed'))



function classToggle(el, className = 'active') {
    el.classList.toggle(className)
}