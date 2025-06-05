import showProjectModal from "../domElements/ProjectModal";
import { projects, saveToLocalStorage } from "../data/data";
// const  projects = [];

const createProject = () => {
    const addProjectButton = document.querySelector('.add-project-button');

    showProjectModal();
    addProjectButton.addEventListener('click', () => {
        const modal = document.querySelector('.modal-container');
        modal.classList.toggle('show-modal');
        
        const addProject = document.querySelector('.modal-add-btn');
        
        addProject.addEventListener('click', makeProject);
    });
    
    
}

const makeProject = () => {
    const projectInput = document.querySelector('.project-input');
    
    let projectInputValue = projectInput.value;
    
    const projectContainer = document.querySelector('.added-projects');

    const project = projectFactory(projectInputValue);

    projects.push(project);

    refreshInput(projectInput);

    createProjectDom(projects, projectContainer);
    saveToLocalStorage(projects);
    
    const modal = document.querySelector('.modal-container');
    if(modal.classList.contains('show-modal')) {
        modal.classList.toggle('show-modal');
    }
}

const projectFactory = (name) => {
    return {
        id : crypto.randomUUID(),
        projectTitle: !name ? 'Project' : name,
        tasks: [],
    }
}

const refreshInput = (input) => {
    input.value = '';
}

const createProjectDom = (projectsArr, container) => {
    container.innerText = '';
    projectsArr.forEach(element => {
        const projectWrapper = document.createElement('div');
        projectWrapper.classList.add('project-wrapper');

        const projectTitle = document.createElement('button');
        projectTitle.classList.add('created-project-title');
        projectTitle.name = element.projectTitle;
        projectTitle.setAttribute('data-project-id', `${element.id}`);

        const deleteProject = document.createElement('button')
        deleteProject.classList.add('delete-project');

        projectWrapper.setAttribute('data-id', `${element.id}`);
        deleteProject.setAttribute('data-id', `${element.id}`);

        projectTitle.innerText = `${element.projectTitle}`;
        projectTitle.name = `${element.projectTitle}`;
        deleteProject.innerText = '-';

        projectWrapper.appendChild(projectTitle);
        projectWrapper.appendChild(deleteProject);

        container.appendChild(projectWrapper);
    });
    
}


export { createProject, createProjectDom};