import { ElementFinder, element, by } from "protractor";

export class ContractClauses {
    txtContractClausePage: ElementFinder;
    inputPaidTimeOff: ElementFinder;
    btnContinue: ElementFinder;

    constructor() {
        this.txtContractClausePage = element(by.xpath("//h1[contains(text(), 'Contract Clauses')]"));
        this.inputPaidTimeOff = element(by.xpath("//input[@id='38e830e0-ee1d-37f9-a7c6-aeeeb75b88a0']"));
        this.btnContinue = element(by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}