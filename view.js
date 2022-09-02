// function previous(){// (()=>{
// import { prepareObject, addTaskOnStorage, addNewTaskOnUi, getDataFromDB, addDbTaskOnUI } from './connecter.js'
// import { domElements } from './app.js'

// function init() {
//     registerEventHandlers();
// }

// function registerEventHandlers() {
//     onLodeStoredTasks();
//     buttonsEventHandel();
// }

// function onLodeStoredTasks() {
//     getDataFromDB();
//     addDbTaskOnUI();
// }

// function buttonsEventHandel() {

//     domElements.getTextBtn.addEventListener('click', addTaskActions);
//     // domElements.getTaskHistory.addEventListener('click', updateCounter);

// }
// function addTaskActions() {
//     prepareObject();
//     addTaskOnStorage();
//     addNewTaskOnUi();
// }

// init();
// }

class ToDoList {
    constructor() {
        console.log(typeof this.domPropValue.newTask)
        this.init();
    }

    app = document.querySelector('#app');
    domPropValue = {
        newTask: '.newTask',
        taskList: '.taskList',
        addBtn: '.addBtn',
        totalTask: '.totalCount',
        completedTask: '.completedCount',
        pendingTask: '.pendingCount',

        getAddBtnRef: () => {
            return this.app.querySelector(this.domPropValue.addBtn);
        },
        getNewTaskRef: () => {
            return this.app.querySelector(this.domPropValue.newTask);
        },
        getTaskListRef: () => {
            return this.app.querySelector(this.domPropValue.taskList);
        },
        getTotalTaskRef: () => {
            return this.app.querySelector(this.domPropValue.totalTask);
        },
        getCompletedTaskRef: () => {
            return this.app.querySelector(this.domPropValue.completedTask);
        },
        getPendingTaskRef: () => {
            return this.app.querySelector(this.domPropValue.pendingTask);
        },
    };
    init() {
        this.registerHandlers();
    }
    registerHandlers() {
        this.addBtnEventHandler();
    }

    addBtnEventHandler() {
        this.domPropValue.getAddBtnRef().addEventListener('click', this.addTaskToList);
    }
    addTaskToList() {
        // const v=this.domPropValue.getNewTaskRef().value;
        // const id= Date.now()
        this.prepareTask(this.domPropValue.getNewTaskRef.value, Date.now(), false)
        // this.domPropValue.getTaskListRef().innerHTML='hello !!';
    }
    insertTaskIntoDOM(node) {
        domElements.getTaskLists.appendChild(node);
    }

    prepareTask(value, id, status) {
        const task = document.createTextNode(value);
        const liElement = createEleme('li', { 'class': 'task', 'id': id });
        const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete', 'id': id / 1000 });
        let taskcheckbox;
        status ? taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100, 'checked': '' }) : '';
        status ? '' : taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100 });
        taskcheckbox.addEventListener('click', (e) => { updateTaskStatusHandler(e) });
        taskDelBtn.addEventListener('click', (e) => { deleteTaskHandler(e) });
        appendElements(liElement, task, taskcheckbox, taskDelBtn);
        return liElement;
    }

    createEleme(value, addAtt) {
        const element = document.createElement(value);//
        return addAttributes(element, addAtt);//here have to check addAtt identifier is object
    }

    addAttributes(mainElement, setAtt) {
        const key = Object.keys(setAtt);
        const value = Object.values(setAtt);
        for (let i = key.length - 1; i >= 0; i--) {
            mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
        }
        return mainElement;
    }

    appendElements(parentNode, ...appChild) {
        for (let i = appChild.length - 1; i >= 0; i--) {
            parentNode.appendChild(appChild[i]);
        }
    }

}
new toDoList()