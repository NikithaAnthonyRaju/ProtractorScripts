import { ElementFinder, element, by } from "protractor";

export class Login {
    inputEmail: ElementFinder;
    inputPassword: ElementFinder;
    btnLogin: ElementFinder;

    constructor() {
        this.inputEmail = element(by.xpath("//input[@id='email']"));
        this.inputPassword = element(by.xpath("//input[@id='password']"));
        this.btnLogin = element(by.xpath("//div[contains(text(),'Login')]/.."));
    }
}