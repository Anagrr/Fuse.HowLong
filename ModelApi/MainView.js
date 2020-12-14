import { loader } from './Shared/Loader';
import { modalService } from './Shared/ModalsService';

export default class MainView {
    constructor() {
        this.modalService = modalService;
        this.loader = loader;
        this.tabs = [
            {title:"Home", icon:"\uf015"},
            {title:"Time", icon:"\uf017"},
            {title:"Tasks", icon:"\uf03a"},
        ];
        this.pageIndex = 0;
    }

    get activePage() {
        return this.tabs[this.pageIndex];
    }

    get tabsCount() {
        return this.tabs.length;
    }

    onTabClicked(ctx) {
        this.pageIndex = this.tabs.indexOf(ctx.data);
    }
}