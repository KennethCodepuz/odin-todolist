

function mainContent(container) {
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projects-container');

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    sideBar(projectContainer);
    tasksContent(tasksContainer);
    
    container.appendChild(projectContainer);
    container.appendChild(tasksContainer);
}


const sideBar = (container) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container')
    
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-button');

    const addedProjects = document.createElement('div');
    addedProjects.classList.add('added-projects');

    projectTitle.innerText = 'Projects';
    addProjectBtn.innerText = '+';

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(addProjectBtn);
    
    
    container.appendChild(projectContainer);
    container.appendChild(addedProjects);
}

const tasksContent = (container) => {
    const titleHeader = document.createElement('div');
    titleHeader.classList.add('title-header');

    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');

    const firstContainer = document.createElement('div');
    firstContainer.classList.add('first-container');

    const taskNameInput = document.createElement('input');
    taskNameInput.classList.add('task-name-input');
    taskNameInput.placeholder = 'Add new task';

    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('due-date-container');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due: '
    const taskDueDate = document.createElement('input');
    taskDueDate.classList.add('task-due-date');
    taskDueDate.type = 'date';

    const priorityList = ['None', 'Low', 'Medium', 'High']
    const secondContainer = document.createElement('div');
    secondContainer.classList.add('second-container');
    const priorityLabel = document.createElement('label');
    priorityLabel.classList.add('priority-label');
    priorityLabel.innerText = 'Priority: '
    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('id', 'task-priority');
    priorityInput.name = 'priority';
    priorityList.forEach(element => {
        const options = document.createElement('option');
        options.value = element;
        options.innerText = element;
        priorityInput.appendChild(options);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task');
    addTaskButton.innerText = 'Add Task';
    
    secondContainer.appendChild(priorityLabel);
    secondContainer.appendChild(priorityInput);
    secondContainer.appendChild(addTaskButton);

    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(taskDueDate);
    
    firstContainer.appendChild(taskNameInput);
    firstContainer.appendChild(dueDateContainer);
    addTaskContainer.appendChild(firstContainer);
    addTaskContainer.appendChild(secondContainer);
    

    const tasksTitle = document.createElement('h1');
    tasksTitle.classList.add('tasks-title');

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('added-tasks-container');

    tasksTitle.innerText = 'All Tasks';

    titleHeader.appendChild(tasksTitle);

    container.appendChild(titleHeader);
    container.appendChild(addTaskContainer);
    container.appendChild(tasksContainer);
    
}


export default mainContent;