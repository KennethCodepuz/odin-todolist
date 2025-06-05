import { handleDom } from "./scripts/createDom.js";
import { deleteProjects } from "./scripts/components/deleteProject.js";
import { taskButtonsEvents } from "./scripts/components/tasksEvents.js";
import { loadAllProjectsAndTask, saveToLocalStorage } from "./scripts/data/data.js";

handleDom();
deleteProjects();

taskButtonsEvents();

loadAllProjectsAndTask();
