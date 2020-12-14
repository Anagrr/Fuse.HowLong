import { store } from "./DataStore";
import { KEYS } from "./Constants";
import Task from "../Models/Task";

export default class TaskStore {
    constructor() {
        let stored = store.getItemJson(KEYS.ALL_TASKS) || [];
        this.tasks = stored.length > 0 ? stored.map(t => new Task().fromJson(t)) : stored;
    }

    get allTasks() {
        return this.tasks;
    }

    get activeTask() {
        return this.tasks.find(t => t.isActive);
    }

    get activeTaskName() {
        return this.activeTask ? this.activeTask.name : "";
    }

    get totalSpent() {
        let sum = 0;
        const getFormatedTime = (val) => val < 10 ? "0" + val : val;
        
        this.tasks.map(t => sum += t.spentMilliseconds);

        let date = new Date(sum);
        return  getFormatedTime(date.getUTCHours())
                + " : " + getFormatedTime(date.getMinutes())
                + " : " + getFormatedTime(date.getSeconds());
    }
   
    add(taskName) {
        this.tasks = [...this.tasks, new Task(store.uuidv4(), taskName)];
        this.saveChanges();
    }

    remove(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.saveChanges();
    }

    clearAll() {
        store.clear();
    }

    resetTime() {
        this.tasks.map(t => t.reset());
    }

    activate(id) {
        if(this.activeTask) {
            this.activeTask.activate(false);
        }
        
        this.tasks.find(x => x.id == id).activate(true);        
        this.saveChanges();
    }

    // ----- private methods ----

    saveChanges() {
        store.setItemJson(KEYS.ALL_TASKS, this.tasks);
    }
}

export let taskStore = new TaskStore();