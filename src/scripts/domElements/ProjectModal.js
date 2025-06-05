
const showProjectModal = () => {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    const projectInput = document.createElement('input');
    projectInput.classList.add('project-input');
    projectInput.placeholder = 'Project Name';

    const addButton = document.createElement('button');
    addButton.classList.add('modal-add-btn');
    addButton.innerText = 'Add';

    modalContainer.appendChild(projectInput);
    modalContainer.appendChild(addButton);

    document.body.appendChild(modalContainer);
}

export default showProjectModal;