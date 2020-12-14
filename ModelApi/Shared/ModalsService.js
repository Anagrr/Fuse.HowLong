import { APPEARANCE } from "./Constants";

export default class ModalService {
    constructor() {
        this.confirmationVisibility = APPEARANCE.COLLAPSED;
        this.promptText = "Some default";
        this.promise = {};
        this.onConfirm = () => {};
        this.onCancel = () => {};
    }

    showConfirmationModal(text, onOk, onCancel) {
        this.confirmationVisibility = APPEARANCE.VISIBLE;
        this.promptText = text;
        this.onConfirm = onOk;
        this.onCancel = onCancel;
    }

    confirm() {
        this.onConfirm();
        this.cancel();
    }

    cancel() {
        this.confirmationVisibility = APPEARANCE.COLLAPSED;
    }
}

export let modalService = new ModalService();