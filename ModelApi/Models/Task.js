export default class Task {
    constructor(id, name) {
        this.id = id || "";
        this.name = name || this.id;
        this.spentMilliseconds = 0;
        this.startAt = Date.now();
        this.isActive = false;
    }

    get spentTime() {
        const getFormatedTime = (val) => val < 10 ? "0" + val : val;
        
        let date = new Date(this.spentMilliseconds);
        return  getFormatedTime(date.getUTCHours())
                + " : " + getFormatedTime(date.getMinutes())
                + " : " + getFormatedTime(date.getSeconds());
    }

    activate(isOn) {
        this.isActive = isOn;
        if(!isOn) {
            this.spentMilliseconds += Date.now() - this.startAt;
        }else {
            this.startAt = Date.now();
        }
    }

    reset() {
        this.spentMilliseconds = 0;
        if(this.isActive) {
            this.startAt = Date.now();
        }
    }

    fromJson(src) {
        this.id = src.id || "";
        this.name = src.name || src.id;
        this.spentMilliseconds = src.spentMilliseconds || 0;
        this.startAt = src.startAt || Date.now();
        this.isActive = src.isActive;
        return this;
    }
}