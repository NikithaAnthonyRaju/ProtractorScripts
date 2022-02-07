import { ElementFinder, element, by } from "protractor";

export class SummaryReview {
    checkboxAgree: ElementFinder;
    btnFinish: ElementFinder;

    constructor() {
        this.checkboxAgree = element(by.xpath("//input[@id='serviceAgreement']"));
        this.btnFinish = element(by.xpath("//button[@id='onboarding-finish-btn']"));
    }
}