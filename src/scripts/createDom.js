import '../style/createDom.css';
import headerContent from './domElements/Header';
import mainContent from './domElements/MainContent';
import {createProject} from './components/createProject';

function handleDom() {
    
    // Html Containers
    const headerContainer = document.querySelector('.header-container');
    const mainContainer = document.querySelector('.main-content');

    mainContent(mainContainer);
    headerContent(headerContainer)

    createProject();
}






export { handleDom };