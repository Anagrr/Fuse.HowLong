import { taskStore } from "../Shared/TaskStore";
import { APPEARANCE } from "../Shared/Constants";
import Task from "../Models/Task";
import { modalService } from '../Shared/ModalsService';

export default class TasksPage {
    newTaskName = "";
    taskStore = taskStore;
    selectedTask: Task

    constructor() {
        this.onDeleteCanceled();
    }
    
    addNewTask() {
        if(this.newTaskName == '') return;

        taskStore.add(this.newTaskName);
        this.newTaskName = "";
    }

    remove(args) {
        this.selectedTask = args.data;
        modalService.showConfirmationModal(
            `Are you sure you want to delete '${this.selectedTask.name}' ? If so, all spent time will be lost.`,
            () => this.onDeleteConfirmed(),
            () => this.onDeleteCanceled());
    }

    onDeleteConfirmed() {
        this.taskStore.remove(this.selectedTask);
        this.onDeleteCanceled();
    }

    onDeleteCanceled() {
        this.selectedTask = new Task();
    }
}