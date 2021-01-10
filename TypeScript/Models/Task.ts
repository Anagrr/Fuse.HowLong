export default class Task {
    id: string
    name: string
    spentMilliseconds = 0;
    startAt = Date.now();
    isActive = false;

    constructor(id?: string, name?: string) {
        this.id = id || "";
        this.name = name || this.id;
    }

    get spentTime() {
        const getFormatedTime = (val) => val < 10 ? "0" + val : val;
        
        let date = new Date(this.spentMilliseconds);
        return  getFormatedTime(date.getUTCHours())
                + " : " + getFormatedTime(date.getMinutes())
                + " : " + getFormatedTime(date.getSeconds());
    }

    activate(isOn: boolean) {
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

    fromJson(src: any) {
        this.id = src.id || "";
        this.name = src.name || src.id;
        this.spentMilliseconds = src.spentMilliseconds || 0;
        this.startAt = src.startAt || Date.now();
        this.isActive = src.isActive;
        return this;
    }
}