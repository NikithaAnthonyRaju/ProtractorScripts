"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ContractDetails {
    constructor() {
        this.inputTalentFirstName = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 's first name')]/../..//input"));
        this.inputTalentLastName = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 's last name')]/../..//input"));
        this.radioTalentEligible = protractor_1.element(protractor_1.by.xpath(`//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='${this.talentEligible}']/..`));
        this.radioTalentEligibleYes = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='Yes']/.."));
        this.radioTalentEligibleNo = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 'The talent is eligible')]/../..//input[@value='No']/.."));
        this.radioTalentExecutive = protractor_1.element(protractor_1.by.xpath(`//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='${this.talentExecutive}']/..`));
        this.radioTalentExecutiveYes = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='Yes']/.."));
        this.radioTalentExecutiveNo = protractor_1.element(protractor_1.by.xpath("//label/span[contains(text(), 'Is the talent an')]/../..//input[@value='No']/.."));
        this.inputJobTitle = protractor_1.element(protractor_1.by.xpath("//input[@id='3c16f67a-bbfd-3e19-9884-cbf4da774e45']"));
        this.inputJobDescription = protractor_1.element(protractor_1.by.xpath("//textarea[@id='213b8164-ffc1-3995-9b25-2906731970b7']"));
        this.inputDirectManager = protractor_1.element(protractor_1.by.xpath("//input[@id='0b1c41dd-9084-3a30-822d-94137ec14b24']"));
        this.inputDirectManagerTitle = protractor_1.element(protractor_1.by.xpath("//input[@id='fdda62c2-17ba-371e-90f5-cee67b4164af']"));
        this.radioEmployeeType = protractor_1.element(protractor_1.by.xpath("//input[contains(@value,'full-time')]"));
        this.dpWorkSchedule = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Working Schedule')]/..//following::div[contains(text(), 'Select')]"));
        this.workScheduleOption = protractor_1.element(protractor_1.by.xpath(`//*[contains(text(),'${this.selectWorkSchedule}']/..`));
        this.inputContractStartDate = protractor_1.element(protractor_1.by.xpath("//input[@id='bdbdbea9-3025-3dcd-96c4-677e61232141']"));
        this.btnContinue = protractor_1.element(protractor_1.by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}
exports.ContractDetails = ContractDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3REZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvQ29udHJhY3REZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQXNCeEI7UUFDSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlGQUFpRixJQUFJLENBQUMsY0FBYyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFKLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0ZBQXdGLENBQUMsQ0FBQyxDQUFDO1FBQzFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUZBQXVGLENBQUMsQ0FBQyxDQUFDO1FBQ3hJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkVBQTJFLElBQUksQ0FBQyxlQUFlLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdEosSUFBSSxDQUFDLHVCQUF1QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUMsQ0FBQTtRQUNySSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixJQUFJLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDSjtBQXpDRCwwQ0F5Q0MifQ==