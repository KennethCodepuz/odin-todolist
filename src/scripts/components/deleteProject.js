import { projects, removeProject } from "../data/data";
import { refreshProjects, refreshProjectTask } from "./refreshDom";
import {createTaskEvent} from "./createProjectTasks";
import { createTaskDom } from "../domElements/TaskCards";

const deleteProjects = () => {
    const deleteBtnsContainer = document.querySelector('.added-projects');
    // console.log(deleteBtns);
    deleteBtnsContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete-project')) {
            deleteProject(e.target);
        }

        if(e.target.closest('.created-project-title')) {
            const projectTitle = document.querySelector('.tasks-title');

            projectTitle.innerText = `${e.target.innerText} Tasks`;
            const projectId = e.target.dataset.projectId;
            console.log(projectId);
            refreshProjectTask();
            createTaskEvent(projectId);
        }
    });
}

function deleteProject(btn) {
    const dataId = btn.dataset.id;
    console.log(dataId);
    
    // Use the imported function to modify the array
    removeProject(dataId);
    console.log(projects);
    refreshProjects();
}

export { deleteProjects };