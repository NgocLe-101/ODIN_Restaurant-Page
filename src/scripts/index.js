import '../style.css'
import homepageModule from './homepage';
import aboutModule from './about';
import menuModule from './menu';

const buttons = document.querySelectorAll('header button');
buttons.forEach(button => {
    button.onclick = () => {
        renderModule(button.id);
    }
});

const renderModule = function(module) {
    let content = null;
    if (module === 'homepage-btn') {
        content = homepageModule();
    } else if (module === 'menu-btn') {
        content = menuModule();
    } else {
        content = aboutModule();
    }
    const contentDiv = document.querySelector('div#content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(content);
}

document.addEventListener('DOMContentLoaded',() => {
    renderModule('homepage-btn');
})