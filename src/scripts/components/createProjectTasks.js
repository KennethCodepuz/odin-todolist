import { createTaskForProject } from "../data/data";
import { projects } from "../data/data";
import { createTaskDom } from "../domElements/TaskCards";
import { refreshProjectTask } from "./refreshDom";

let currentTaskHandler = null;

export function createTaskEvent(project) {
    const addBtn = document.querySelector('.add-task');
    createTaskDom(project);

    // Remove the old handler (if it exists)
    if (currentTaskHandler) {
        addBtn.removeEventListener('click', currentTaskHandler);
    }

    // Create and store the new handler
    currentTaskHandler = () => {
        createTaskForProject(project);
        const taskInput = document.querySelector('.task-name-input');
        taskInput.value = '';
    };

    addBtn.addEventListener('click', currentTaskHandler);
    
}

