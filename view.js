
import { addTaskOnStorage, handleObject, getDataFromDB, taskStatus } from './connecter.js'

const app = document.querySelector('.app');
const counterTasks = {//just to complete counter i placed counter object here and i have to comeup with new solution 
    total: 0,
    completed: 0,
    pending: 0,
}

let domElements = {
    textBtn: app.querySelector('.addBtn'),
    newTaskD: app.querySelector('.newTask'),
    taskHistory: app.querySelector('.getHistoryTask'),
    taskListss: app.querySelector('.taskListAll'),
    totalCount: app.querySelector('.totalCount'),
    completedCount: app.querySelector('.completedCount'),
    pendingCount: app.querySelector('.pendingCount'),
    taskHistory: app.querySelector('.taskHistory'),
    get getTextBtn() { return this.textBtn },
    get getNewText() { return this.newTaskD },
    get getTaskHistory() { return this.taskHistory },
    get getTaskLists() { return this.taskListss },
    get getTotalCount() { return this.totalCount },
    get getCompletedCount() { return this.completedCount },
    get getPendingCount() { return this.pendingCount },
    get getTaskHistory() { return this.taskHistory }

};

// console.log(domElements);

function init() {
    // console.log(domElements.getNewText() + 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    // console.log(domElements.getTaskLists());
    registerEventHandlers();
}

function registerEventHandlers() {
    onLodeStoredTasks();
    buttonsEventHandeler();
    counterHandeler();
}

function onLodeStoredTasks() {
    const obj = getDataFromDB()
    if (obj) {
        handleObject.lodeTasksToObj(obj);
        addDbTaskOnUI(obj);
    }
}

function addDbTaskOnUI(obj) {
    const arr = getObjID(obj)
    arr.forEach(key => {
        const selectedObj = obj[key];
        prepareTask(selectedObj.task, selectedObj.id, selectedObj.status)
    })
}

function getObjID(obj) {
    return Object.keys(obj);
}
function counterHandeler() {
    const counter = taskStatus();//this is wrong approuch, every time all N tasks are looping 
    domElements.getTotalCount.innerHTML = counter.totalCount();
    domElements.getCompletedCount.innerHTML = counter.completedCount();
    domElements.getPendingCount.innerHTML = counter.pendingCount();

}

function buttonsEventHandeler() {

    domElements.getTextBtn.addEventListener('click', addTaskActions);
    // domElements.getTaskHistory.addEventListener('click', updateCounter);

}
function getNewTask() {
    // const ref = domElements.getNewText();
    console.log(app.querySelector('.newTask').value)
    return app.querySelector('.newTask').value;
}
function uniqueValue() {
    return Date.now()
}
const getValueId = {
    text: getNewTask(),
    id: uniqueValue()
}

function addTaskActions() {
    const task = getNewTask();
    const id = uniqueValue();
    handleObject.prepareObject(task, id);
    addTaskOnStorage('user1', true);
    prepareTask(task, id, false);
}
const getElemProp = {
    id(event) {
        return event.target.parentNode.id;
    }
}
function updateTaskStatusHandler(e) {
    const id = getElemProp.id(e);
    handleObject.updateTaskOnOnbect(id);
    addTaskOnStorage('user1', true);
}

function deleteTaskHandler(e) {
    const id = getElemProp.id(e);
    handleObject.deleteTaskOnObj(id);
    addTaskOnStorage('user1', true)
    deleteTaskOnUI(id)
}

function deleteTaskOnUI(id) {
    document.getElementById(id).remove();
}


function prepareTask(value, id, status) {

    const task = document.createTextNode(value);
    const liElement = createEleme('li', { 'class': 'task', 'id': id });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete', 'id': id / 1000 });
    let taskcheckbox;
    status ? taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100, 'checked': '' }) : '';
    status ? '' : taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100 });
    taskcheckbox.addEventListener('click', (e) => { updateTaskStatusHandler(e) });
    taskDelBtn.addEventListener('click', (e) => { deleteTaskHandler(e) });
    appendElements(liElement, task, taskcheckbox, taskDelBtn);
    insertTaskIntoDOM(liElement);
}

function createEleme(value, addAtt) {
    const element = document.createElement(value);//
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object
}

function addAttributes(mainElement, setAtt) {
    const key = Object.keys(setAtt);
    const value = Object.values(setAtt);
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(key[i], value[i]);
    }
    return mainElement;
}

function appendElements(parentNode, ...appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i]);
    }
}


export function insertTaskIntoDOM(node) {
    const element = domElements.getTaskLists;
    element.appendChild(node);
}

init();
