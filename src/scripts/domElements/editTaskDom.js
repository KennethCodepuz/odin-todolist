
export function editTaskDom(task) {
    const taskContainer = document.getElementById(`${task}`);
                taskContainer.innerHTML = '';

                const taskNewName = document.createElement('input');
                taskNewName.classList.add('edited-task-name');
                taskNewName.placeholder = 'Task Name';

                const taskNewDue = document.createElement('input');
                taskNewDue.classList.add('new-due-date');
                taskNewDue.type = 'date';

                const priorityList = ['None', 'Low', 'Medium', 'High']
                const taskNewPriority = document.createElement('select');
                taskNewPriority.classList.add('new-priority');
                taskNewPriority.name = 'new-priority'
                priorityList.forEach(element => {
                    const options = document.createElement('option');
                    options.value = element;
                    options.innerText = element;
                    taskNewPriority.appendChild(options);
                });

                const saveBtn = document.createElement('button');
                saveBtn.classList.add('save-button');
                saveBtn.innerText = 'Save Task';

                taskContainer.appendChild(taskNewName);
                taskContainer.appendChild(taskNewDue);
                taskContainer.appendChild(taskNewPriority);
                taskContainer.appendChild(saveBtn);
}