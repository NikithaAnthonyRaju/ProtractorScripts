"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SalaryCalculator {
    constructor() {
        this.inputSalaryMonth = protractor_1.element(protractor_1.by.xpath("//input[@id='cf5d6024-3f7c-35d8-aa5d-1649592a1d23']"));
        this.radioOvertime = protractor_1.element(protractor_1.by.xpath("//input[contains(@value,'Deemed overtime payment in base salary')]"));
        this.btnContinue = protractor_1.element(protractor_1.by.xpath("//button[@id='onboarding-continue-btn']"));
    }
}
exports.SalaryCalculator = SalaryCalculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsYXJ5Q2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1NhbGFyeUNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxnQkFBZ0I7SUFLekI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUE7UUFDNUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDSjtBQVZELDRDQVVDIn0=