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
        // let id = this.uniqueValue();
        newTasksObj[id] = { 'id': id, 'task': value, 'status': false };
    },
    updateObjValue(key) {
        // const objId = newTasksObj[id];
        if (newTasksObj[key].status) {
            newTasksObj[key].status = false;
            // counterTasks.pending += 1;
        } else {
            newTasksObj[key].status = true;
            // counterTasks.completed += 1;
        }
    },
    deleteObjValue(key) {
        delete newTasksObj[key];
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