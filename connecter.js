import { localStorageHandler, setvalueToObject } from './storage.js';
import { prepareTask, insertTaskIntoDOM, domElements, deleteTaskInUI, deleteTaskInObject, updateTaskStatus } from './app.js';


export let newTasksObj = {};

export const getObjectIdValue = {
    getNewTask() {
        return domElements.getnewText.value;
    },
    getTaskId() {
        const id = getObjectKeysAsArray(newTasksObj);
        return id[id.length - 1];
    }
};

function getObjectKeysAsArray(obj) {
    console.log(obj)
    if (Object.keys(obj)) {
        return Object.keys(obj);
    }
}


export function prepareObject() {
    setvalueToObject.prepareObjectForLocal(getObjectIdValue.getNewTask(), newTasksObj);

}

export function addNewTaskOnUi() {
    const task = getObjectIdValue.getNewTask();
    const id = getObjectIdValue.getTaskId();
    const taskElement = prepareTask(task, id, false);
    insertTaskIntoDOM(taskElement);
}

export function addTaskOnStorage() {
    localStorageHandler.setData('user1', newTasksObj)
}

export function getDataFromDB() {
    newTasksObj = JSON.parse(localStorageHandler.getData('user1'));
}

export function addDbTaskOnUI() {
    const idArray = getObjectKeysAsArray(newTasksObj);
    loadDbTaskOnUI(newTasksObj, idArray);
}

function loadDbTaskOnUI(object, arr) {
    arr.forEach(key => {
        let obj = object[key];
        const taskElement = prepareTask(obj.task, obj.id, obj.status)
        insertTaskIntoDOM(taskElement);
    })
}

export function updateTaskStatusHandler(e) {
    const id = getElementId.getParentelementID(e);
    updateTaskStatus(newTasksObj, id);
    localStorageHandler.setData(newTasksObj);

}



export function deleteTaskHandler(e) {
    const id = getElementId.getParentelementID(e);
    const domElement = element.getElement(id);
    deleteTaskInUI(domElement);
    deleteTaskInObject(newTasksObj, id);
    localStorageHandler.setData(newTasksObj);
}

const element = {
    getElement(id) {
        return document.getElementById(id)
    }
}

const getElementId = {
    getParentelementID(e) {
        return e.target.parentNode.id;
    }
}