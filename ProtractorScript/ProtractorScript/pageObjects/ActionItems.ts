import { ElementFinder, element, by } from "protractor";

export class ActionItems {
    sidebarActionItem: ElementFinder;
    TalentName: String;
    btnMarkAsDone: ElementFinder;

    constructor() {
        this.sidebarActionItem = element(by.xpath("//span[contains(text(),'Action Items')]"));
        this.btnMarkAsDone = element(by.xpath(`//span[contains(text(),'"${this.TalentName}"')]/../../..//button[@id="action-items-mark-done-btn"]`));
    }
}