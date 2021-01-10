import { taskStore } from "../Shared/TaskStore";

export default class HomePage {
    taskStore = taskStore;

    setActive(args) {
        this.taskStore.activate(args.data.id);
    }
}