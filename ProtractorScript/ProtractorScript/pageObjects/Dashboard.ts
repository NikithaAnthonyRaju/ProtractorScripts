import { ElementFinder, element, by } from "protractor";

export class Dashboard {
    btnAddEmployee: ElementFinder;
    btnCreateNew: ElementFinder;

    constructor() {
        this.btnAddEmployee = element(by.xpath("//button[contains(text(), 'Add employee')]"));
        this.btnCreateNew = element(by.xpath("//li[contains(text(),'CREATE NEW')]"));
    }
}