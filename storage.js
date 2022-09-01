// (()=>{
export const setvalueToObject={//not in storage layer
    uniqueValue() { return Date.now() },

    prepareObjectForLocal(value,obj) {
        let id = this.uniqueValue();
        obj[id] = { 'id': id, 'task':value, 'status': false };
        console.log(obj);
    },
}


export const localStorageHandler={
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
// })();