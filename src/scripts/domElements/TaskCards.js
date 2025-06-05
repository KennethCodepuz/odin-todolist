import { projects } from "../data/data";
import trash from "../../icons/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import check from "../../icons//check_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import edit from "../../icons/edit_square_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import { refreshProjectTask } from "../components/refreshDom";

export function createTaskDom(project) {
    const tasksContainer = document.querySelector('.added-tasks-container');
    refreshProjectTask();
    for(let proj of projects) {
        if(proj.projectTitle === project || proj.id === project) {
            
            console.log(proj.tasks);
            for(let task of proj.tasks) {
                if(!proj.tasks.length) {
                    console.log('Please help');
                    return;
                }
                
                const taskContainer = document.createElement('div');
                taskContainer.classList.add('task-container');
                taskContainer.setAttribute('id', `${task.id}`);
                taskContainer.setAttribute('data-project-id', `${proj.id}`);
                if(task.complete) {
                    taskContainer.classList.add('completed-task');
                }else {
                    taskContainer.classList.remove('completed-task');
                }

                const taskTitle = document.createElement('input');
                taskTitle.classList.add('task-title');
                taskTitle.disabled = true;

                const taskDue = document.createElement('div');
                taskDue.classList.add('task-duedate');

                const taskPriority = document.createElement('div');
                taskPriority.classList.add('task-priority-level');
                
                taskContainer.setAttribute('data-id', `${task.id}`);
                taskTitle.value = task.name;
                taskDue.innerHTML = `Due: <div class="task-due">${task.dueDate}</div>`;
                taskPriority.innerText = task.priority;

                const taskBtns = document.createElement('div');
                taskBtns.classList.add('task-btns');

                const completeTask = document.createElement('button');
                completeTask.classList.add('task-complete');

                const deleteTask = document.createElement('button');
                deleteTask.classList.add('delete-task-btn');

                const editTask = document.createElement('button');
                editTask.classList.add('edit-task');

                completeTask.innerHTML = `<img src="${check}">`;
                deleteTask.innerHTML = `<img src="${trash}">`;
                editTask.innerHTML = `<img src="${edit}">`;

                taskBtns.appendChild(completeTask);
                taskBtns.appendChild(deleteTask);
                taskBtns.appendChild(editTask);

                taskContainer.appendChild(taskTitle);
                taskContainer.appendChild(taskDue);
                taskContainer.appendChild(taskPriority);
                taskContainer.appendChild(taskBtns);

                tasksContainer.appendChild(taskContainer); 
                
            }

            
        }
    }
    
}
