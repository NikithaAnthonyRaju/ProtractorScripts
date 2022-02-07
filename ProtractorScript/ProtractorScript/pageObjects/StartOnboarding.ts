import { ElementFinder, element, by } from "protractor";

export class StartOnboarding {
    txtWhrToHire: ElementFinder;
    inputSelectCountry: ElementFinder;
    imgSearchButton: ElementFinder;
    countryValue: String;
    dpSelectCountry: ElementFinder;
    btnGetStarted: ElementFinder;

    constructor() {
        this.txtWhrToHire = element(by.xpath("//h1[contains(text(),'Where do you want to hire?')]"));
        this.inputSelectCountry = element(by.xpath("//input[@id='react-select-3-input']"));
        this.imgSearchButton = element(by.xpath("//div[contains(@class, 'css-tlfecz-indicatorContainer')]//*"));
        this.dpSelectCountry = element(by.xpath(`//*[contains(text(),'${this.countryValue}')]`))
        this.btnGetStarted = element(by.xpath("//span[contains(text(),'Get started')]"))
    }
}