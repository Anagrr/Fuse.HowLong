import { loader } from './Shared/Loader';
import { modalService } from './Shared/ModalsService';

export default class MainView {
    modalService = modalService;
    loader = loader;
    tabs = [
        {title: "Home", icon: "\uf015"},
        {title: "Time", icon: "\uf017"},
        {title: "Tasks", icon: "\uf03a"},
    ];
    pageIndex = 0;

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