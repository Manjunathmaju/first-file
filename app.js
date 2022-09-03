import { deleteTaskHandler, updateTaskStatusHandler } from './connecter.js';

// export const domElements = {
//     textBtn: app.querySelector('.addBtn'),
//     newTask: app.querySelector('.newTask'),
//     taskHistory: app.querySelector('.getHistoryTask'),
//     taskLists: app.querySelector('.taskList'),
//     totalCount: app.querySelector('.totalCount'),
//     completedCount: app.querySelector('.completedCount'),
//     pendingCount: app.querySelector('.pendingCount'),
//     taskHistory: app.querySelector('.taskHistory'),
//     get getTextBtn() { return this.textBtn },
//     get getnewText() { return this.newTask },
//     get gettaskHistory() { return this.taskHistory },
//     get getTaskLists() { return this.taskLists },
//     get getTotalCount() { return this.totalCount },
//     get getCompletedCount() { return this.completedCount },
//     get getPendingCount() { return this.pendingCount },
//     get getTaskHistory() { return this.taskHistory }
// };

//------------------------------------------------------------- prepare task-----------
// export function insertTaskIntoDOM(node) {
//     domElements.getTaskLists.appendChild(node);
// }

// export function prepareTask(value, id, status) {
//     // const id = Object.keys(newTasksObj)
//     const task = document.createTextNode(value);
//     const liElement = createEleme('li', { 'class': 'task', 'id': id });
//     const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete', 'id': id / 1000 });
//     let taskcheckbox;
//     status ? taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100, 'checked': '' }) : '';
//     status ? '' : taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100 });
//     taskcheckbox.addEventListener('click', (e) => { updateTaskStatusHandler(e) });
//     taskDelBtn.addEventListener('click', (e) => { deleteTaskHandler(e) });
//     appendElements(liElement, task, taskcheckbox, taskDelBtn);
//     return liElement;
// }

// function createEleme(value, addAtt) {
//     const element = document.createElement(value);//
//     return addAttributes(element, addAtt);//here have to check addAtt identifier is object
// }

// function addAttributes(mainElement, setAtt) {
//     const key = Object.keys(setAtt);
//     const value = Object.values(setAtt);
//     for (let i = key.length - 1; i >= 0; i--) {
//         mainElement.setAttribute(`${key[i]}`, `${value[i]}`);
//     }
//     return mainElement;
// }

// function appendElements(parentNode, ...appChild) {
//     for (let i = appChild.length - 1; i >= 0; i--) {
//         parentNode.appendChild(appChild[i]);
//     }
// }
//----------------------------------------------------------END prepare task------------------

//------------------------------------------------------------ delete task---------------------------
export function deleteTaskInUI(element) {
    element.remove()
}

export function deleteTaskInObject(obj, id) {
    delete obj[id];
}


//------------------------------------------------------task status update----------------------
export function updateTaskStatus(obj, id) {
    if (obj[id].status) {
        obj[id].status = false;
    } else {
        obj[id].status = true;
    }
}


 //-----------------------------------------counter update------------------------




