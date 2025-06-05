import { createProjectDom } from "../components/createProject";
import { refreshProjectTask } from "../components/refreshDom";
import { editTaskDom } from "../domElements/editTaskDom";
import { createTaskDom } from "../domElements/TaskCards";

export let projects = !JSON.parse(localStorage.getItem('projects')) ? [] : JSON.parse(localStorage.getItem('projects'));

class Task {
    
    constructor(name, dueDate, priority) {
        this.id = crypto.randomUUID(),
        this.complete = false;
        this.name = name,
        this.dueDate = dueDate,
        this.priority = priority
    }
}

// export function getProjectsFromLocalStorage() {
//     const storedProjects = JSON.parse(localStorage.getItem('projects'));

//     return storedProjects;
// }

export function saveToLocalStorage(projectArr) {
    localStorage.setItem('projects', JSON.stringify(projectArr));
}

export function loadAllProjectsAndTask() {
    const allTask = document.querySelector('.tasks-title');
    const allTaskString = allTask.innerText;
    // const storedProjects = getProjectsFromLocalStorage();
    // console.log(storedProjects);
    // if(storedProjects.length === 0) {
    //     console.log('Empty');
    //     return;
    // }
    console.log(projects);
    projects.forEach(proj => {
        const projectContainer = document.querySelector('.added-projects');
        createProjectDom(projects, projectContainer);
        proj.tasks.forEach(task => {
            if(allTaskString == 'All Tasks') {
                createTaskDom(proj.id);
            }
        })
    })
}

export function removeProject(idToRemove) {
    const index = projects.findIndex(project => project.id === idToRemove);
    if (index !== -1) {
        projects.splice(index, 1);
    }
    saveToLocalStorage(projects);
    return projects;
}

export function createTaskForProject(project) {
    const taskName = document.querySelector('.task-name-input');
    const taskDueDate = document.querySelector('.task-due-date');
    const taskPriority = document.getElementById('task-priority');

    const date = new Date();
    
    const taskNameValue = !taskName.value ? 'Task Name': taskName.value;
    const taskDueDateValue = !taskDueDate.value ? `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`: taskName.value;
    const taskPriorityValue = taskPriority.value;

    const task = new Task(taskNameValue, taskDueDateValue, taskPriorityValue);
    console.log(project);
    projects.forEach(element => {
        if(element.id === project) {
            element.tasks.push(task);
        }
        saveToLocalStorage(projects);
    });
    createTaskDom(project);
}

export function deleteProjectTask(project, currentTask) {

    for(let proj of projects) {
        if(proj.id === project) {
            if(proj.tasks.length === 0) {
                break;
            }

            for(let task of proj.tasks) {
                if(task.id === currentTask) {
                    proj.tasks = proj.tasks.filter((item) => item.id !== currentTask);
                    refreshProjectTask();
                    createTaskDom(proj.projectTitle);
                }
            }
        }
    }
    saveToLocalStorage(projects);
}

export function editProjectTask(project, currentTask) {
    for(let proj of projects) {
        if(proj.id === project) {
            if(proj.tasks.length === 0) {
                break;
            }
        
        for(let task of proj.tasks) {
            if(task.id === currentTask) {
                editTaskDom(task.id);
                const saveBtn = document.querySelector('.save-button');

                saveBtn.addEventListener('click', () => {
                    const date = new Date();
                    const newTaskTitle = document.querySelector('.edited-task-name');
                    const newTaskTitleValue = !newTaskTitle.value ? 'Task Name': newTaskTitle.value;

                    const newTaskDue = document.querySelector('.new-due-date');
                    const newTaskDueValue = !newTaskDue.value ? `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`: newTaskDue.value;

                    const newTaskPriority = document.querySelector('.new-priority');
                    const newTaskPriorityValue = newTaskPriority.value;

                    task.name = newTaskTitleValue;
                    task.dueDate = newTaskDueValue;
                    task.priority = newTaskPriorityValue;

                    // refreshProjectTask();
                    console.log(task);
                    createTaskDom(project);
                    saveToLocalStorage(projects);
                });
                
            }
        }
        }
    }
    
}

export function completeTask(project, currentTask) {
    for(let proj of projects) {
        if(proj.id === project) {
            if(proj.tasks.length === 0) {
                break;
            }

            for(let task of proj.tasks) {
                if(task.id === currentTask) {
                    changeComplete(task);
                    const taskContainer = document.getElementById(`${currentTask}`);
                    const taskEdit = document.querySelector('.edit-task');
                    if(task.complete) {
                        taskContainer.classList.add('completed-task');
                        taskEdit.disabled = true;
                        taskEdit.style.opacity = '0.3';
                    }else {
                        taskContainer.classList.remove('completed-task');
                        taskEdit.disabled = false;
                        taskEdit.style.opacity = '1';
                    }
                    saveToLocalStorage(projects);
                }
            }
        }
    }
    
}

function changeComplete(task) {
    task.complete = !task.complete;
}