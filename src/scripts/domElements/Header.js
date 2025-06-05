
const headerContent = (container) => {

    const appTitle = document.createElement('h1');
    appTitle.classList.add('app-title');

    appTitle.innerText = 'ToDoApp';

    container.appendChild(appTitle);
}

export default headerContent;   