import { ElementFinder, element, by } from "protractor";

export class SalaryCalculator {
    inputSalaryMonth: ElementFinder;
    radioOvertime: ElementFinder;
    btnContinue: ElementFinder;

    constructor() {
        this.inputSalaryMonth = element(by.xpath("//input[@id='cf5d6024-3f7c-35d8-aa5d-1649592a1d23']"));
        this.radioOvertime = element(by.xpath("//input[contains(@value,'Deemed overtime payment in base salary')]"))
        this.btnContinue = element(by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}