import { completeTask, deleteProjectTask, editProjectTask } from "../data/data";


export function taskButtonsEvents() {
    const taskBtns = document.querySelector('.added-tasks-container');

    taskBtns.addEventListener('click', (e) => {
        if(e.target.closest('.delete-task-btn')) {
            const currentProject = e.target.closest('.task-container').dataset.projectId;
            const currentTask = e.target.closest('.task-container').dataset.id;
            deleteProjectTask(currentProject, currentTask);
        }

        // debugger
        if(e.target.closest('.edit-task')) {
            const currentProject = e.target.closest('.task-container').dataset.projectId;
            const currentTask = e.target.closest('.task-container').dataset.id;
            editProjectTask(currentProject, currentTask);
        }

        if(e.target.closest('.task-complete')) {
            const currentProject = e.target.closest('.task-container').dataset.projectId;
            const currentTask = e.target.closest('.task-container').dataset.id;
            completeTask(currentProject, currentTask);
            
        }
    })
    
}