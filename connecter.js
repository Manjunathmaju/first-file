import { localStorageOfUser, setvalueToObject } from './storage.js';
import { prepareTask,insertTaskIntoDOM,domElements } from './app.js';


export let newTasksObj = {};

export const getObjectIdValue = {
    getNewTask() {
        return domElements.getnewText.value;
    },
    getTaskId() {
        const id = Object.keys(newTasksObj);
        return id[id.length - 1];
    }
};


export function prepareObject(){
    setvalueToObject.prepareObjectForLocal(getObjectIdValue.getNewTask,newTasksObj);

}

export function addTaskOnUi(){
    const task=getObjectIdValue.getNewTask();
    const id=getObjectIdValue.getTaskId();
const taskElement= prepareTask(task,id,false);
insertTaskIntoDOM(taskElement);
}

export function addTaskOnStorage(){
    localStorageOfUser.setData('user1',newTasksObj)
}