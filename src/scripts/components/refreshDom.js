// import { projects } from "../data/data";
import { createProjectDom } from "./createProject";
import { projects } from "../data/data";
import { createTaskDom } from "../domElements/TaskCards";

export const refreshProjects = () => {
    const projectContainer = document.querySelector('.added-projects');
    projectContainer.innerHTML = '';

    createProjectDom(projects, projectContainer);
}

export function refreshProjectTask() {
    const tasksContainer = document.querySelector('.added-tasks-container');
    console.log('Cleared');
    tasksContainer.innerHTML = '';
}

