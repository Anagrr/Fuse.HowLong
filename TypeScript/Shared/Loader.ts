export default class Loader {
    visibility: string

    constructor() {
        this.hide();
    }

    show() {
        this.visibility = "Visible"; 
    }

    hide() {
        this.visibility = "Collapsed";
    }

    get state() {
        return this.visibility;
    }
}

export let loader = new Loader();