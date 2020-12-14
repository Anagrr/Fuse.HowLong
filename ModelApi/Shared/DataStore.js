export class DataStore {
        constructor() {}

    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    setItemJson(key, value) {
        var str = JSON.stringify(value);
        localStorage.setItem(key, str);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    getItemJson(key) {
        let str = localStorage.getItem(key);
        if(str != null) {
            return JSON.parse(str);
        } else {
            return str;
        }        
    }

    clear(){
        localStorage.clear();
    }

    itemsCount(){
        return localStorage.length;
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}

export let store = new DataStore();