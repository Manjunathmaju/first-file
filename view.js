// (()=>{
import { prepareObject, addTaskOnStorage, addNewTaskOnUi, getDataFromDB, addDbTaskOnUI } from './connecter.js'
import { domElements } from './app.js'

function init() {
    registerEventHandlers();
}

function registerEventHandlers() {
    onLodeStoredTasks();
    buttonsEventHandel();
}

function onLodeStoredTasks() {
    getDataFromDB();
    addDbTaskOnUI();
}

function buttonsEventHandel() {

    domElements.getTextBtn.addEventListener('click', addTaskActions);
    // domElements.getTaskHistory.addEventListener('click', updateCounter);

}
function addTaskActions() {
    prepareObject();
    addTaskOnStorage();
    addNewTaskOnUi();
}

init();
// })();