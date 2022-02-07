import { ElementFinder, element, by } from "protractor";

export class ContractDetails {
    txtContractDetailsPage: ElementFinder;
    inputTalentFirstName: ElementFinder;
    inputTalentLastName: ElementFinder;
    radioTalentEligible: ElementFinder;
    talentEligible: String;
    radioTalentEligibleYes: ElementFinder;
    radioTalentEligibleNo: ElementFinder;
    talentExecutive: String;
    radioTalentExecutive: ElementFinder;
    radioTalentExecutiveYes: ElementFinder;
    radioTalentExecutiveNo: ElementFinder;
    inputJobTitle: ElementFinder;
    inputJobDescription: ElementFinder;
    inputDirectManager: ElementFinder;
    inputDirectManagerTitle: ElementFinder;
    radioEmployeeType: ElementFinder;
    dpWorkSchedule: ElementFinder;
    selectWorkSchedule: String;
    workScheduleOption: ElementFinder;
    inputContractStartDate: ElementFinder;
    btnContinue: ElementFinder;

    constructor() {
        this.txtContractDetailsPage = element(by.xpath("//h1[contains(text(), 'details')]"));
        this.inputTalentFirstName = element(by.xpath("//label/span[contains(text(), 's first name')]/../..//input"));
        this.inputTalentLastName = element(by.xpath("//label/span[contains(text(), 's last name')]/../..//input"));
        this.radioTalentEligible = element(by.xpath(`//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='${this.talentEligible}']/..`));
        this.radioTalentEligibleYes = element(by.xpath("//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='Yes']/.."));
        this.radioTalentEligibleNo = element(by.xpath("//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='No']/.."));
        this.radioTalentExecutive = element(by.xpath(`//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='${this.talentExecutive}']/..`));
        this.radioTalentExecutiveYes = element(by.xpath("//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='Yes']/.."));
        this.radioTalentExecutiveNo = element(by.xpath("//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='No']/.."));
        this.inputJobTitle = element(by.xpath("//input[@id='3c16f67a-bbfd-3e19-9884-cbf4da774e45']"));
        this.inputJobDescription = element(by.xpath("//textarea[@id='213b8164-ffc1-3995-9b25-2906731970b7']"));
        this.inputDirectManager = element(by.xpath("//input[@id='0b1c41dd-9084-3a30-822d-94137ec14b24']"));
        this.inputDirectManagerTitle = element(by.xpath("//input[@id='fdda62c2-17ba-371e-90f5-cee67b4164af']"));
        this.radioEmployeeType = element(by.xpath("//input[contains(@value,'full-time')]"));
        this.dpWorkSchedule = element(by.xpath("//span[contains(text(),'Working Schedule')]/..//following::div[contains(text(), 'Select')]"))
        this.workScheduleOption = element(by.xpath(`//*[contains(text(),'${this.selectWorkSchedule}']/..`));
        this.inputContractStartDate = element(by.xpath("//input[@id='bdbdbea9-3025-3dcd-96c4-677e61232141']"));
        this.btnContinue = element(by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}