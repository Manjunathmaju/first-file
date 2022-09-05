import { localStorageHandler, setvalueToObject, getobject, counterTaskHandler } from './storage.js';

export function taskStatus() {
    const setCount = counterTaskHandler.setCounter;
    const obj = getobject();
    const keys = Object.keys(obj);
    keys.forEach(element => {
        if (obj[element].status) {
            setCount.totalTask();
            setCount.completedTask();
        } else {
            setCount.totalTask();
            setCount.pendingTask();
        }
    });
    return counterTaskHandler.getCounter;
}

export let handleObject = {
    prepareObject(value, id) {
        setvalueToObject.saveNewObj(value, id);
    },
    lodeTasksToObj(obj) {
        setvalueToObject.saveOldObj(obj);
    },
    deleteTaskOnObj(id) {
        setvalueToObject.deleteObjValue(id);
    },
    updateTaskOnOnbect(id) {
        setvalueToObject.updateObjValue(id)
    },
    getTaskOnObject(id){
        return setvalueToObject.getTask(id)
    }

}

export function addTaskOnStorage(name, wantToStore) {
    if (wantToStore) {
        localStorageHandler.setData(name)
    }
}

export function getDataFromDB() {
    if (localStorage.hasOwnProperty('user1')) {
        return JSON.parse(localStorageHandler.getData('user1'));
    } else {
        return false;
    }
}

