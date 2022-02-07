"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SummaryReview {
    constructor() {
        this.checkboxAgree = protractor_1.element(protractor_1.by.xpath("//input[@id='serviceAgreement']"));
        this.btnFinish = protractor_1.element(protractor_1.by.xpath("//button[@id='onboarding-finish-btn']"));
    }
}
exports.SummaryReview = SummaryReview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VtbWFyeVJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1N1bW1hcnlSZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBQ0o7QUFSRCxzQ0FRQyJ9