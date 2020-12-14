export default class Loader {
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