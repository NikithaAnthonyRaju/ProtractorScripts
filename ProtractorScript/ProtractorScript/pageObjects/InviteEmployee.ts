import { ElementFinder, element, by } from "protractor";

export class InviteEmployee {
    inputTalentEmail: ElementFinder;
    btnContinue: ElementFinder;

    constructor() {
        this.inputTalentEmail = element(by.xpath("//input[@id='0d728b03-35e9-3265-b6b1-d7f09773a165']"));
        this.btnContinue = element(by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}