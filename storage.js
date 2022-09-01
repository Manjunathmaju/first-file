
export const setvalueToObject={
    uniqueValue() { return Date.now() },

    prepareObjectForLocal(obj,value) {
        let id = this.uniqueValue();
        obj[id] = { 'id': id, 'task':value, 'status': false };
    },
}


export const localStorageOfUser={
    getData(key){
        return localStorage.getItem(key);
    },
    setData(key,objValue){
        localStorage.setItem(key,JSON.stringify(objValue));
    },
    clearData(){
        localStorage.clear();
    }
}