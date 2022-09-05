// (()=>{

let newTasksObj = {};
const counterTasks = {
    total: 0,
    completed: 0,
    pending: 0,
}

export function getobject() {
    return newTasksObj;
}
export const counterTaskHandler = {
    setCounter: {
        completedTask(num = 1) {
            counterTasks.completed += num;
        },
        pendingTask(num = 1) {
            counterTasks.pending += num;
        },
        totalTask(num = 1) {
            counterTasks.total += num;
        }
    },
    getCounter: {
        completedCount() {
            return counterTasks.completed;
        },
        pendingCount() {
            return counterTasks.pending;
        },
        totalCount() {
            return counterTasks.total;
        }
    }
}

export const setvalueToObject = {//not in storage layer
    saveOldObj(obj) {
        newTasksObj = obj;
    },
    saveNewObj(value, id) {
        newTasksObj[id] = { 'id': id, 'task': value, 'status': false };
    },
    updateObjValue(key) {
        const objTask=newTasksObj[key];
        objTask.status?objTask.status = false:objTask.status = true;
    },
    deleteObjValue(key) {
        delete newTasksObj[key];
    },
    getTask(id){
        return newTasksObj[id];
    }
}

export const localStorageHandler = {
    getData(key) {
        return localStorage.getItem(key);
    },
    setData(key) {
        localStorage.setItem(key, JSON.stringify(newTasksObj));
    },
    clearData() {
        localStorage.clear();
    }
}
// })();