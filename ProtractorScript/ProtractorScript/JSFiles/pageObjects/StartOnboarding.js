"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class StartOnboarding {
    constructor() {
        this.txtWhrToHire = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Where do you want to hire?')]"));
        this.inputSelectCountry = protractor_1.element(protractor_1.by.xpath("//input[@id='react-select-3-input']"));
        this.imgSearchButton = protractor_1.element(protractor_1.by.xpath("//div[contains(@class, 'css-tlfecz-indicatorContainer')]//*"));
        this.dpSelectCountry = protractor_1.element(protractor_1.by.xpath(`//*[contains(text(),'${this.countryValue}')]`));
        this.btnGetStarted = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Get started')]"));
    }
}
exports.StartOnboarding = StartOnboarding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnRPbmJvYXJkaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvU3RhcnRPbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQVF4QjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO0lBQ3BGLENBQUM7Q0FDSjtBQWZELDBDQWVDIn0=