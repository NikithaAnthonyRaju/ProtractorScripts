"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Login_1 = require("./pageObjects/Login");
const Dashboard_1 = require("./pageObjects/Dashboard");
const StartOnboarding_1 = require("./pageObjects/StartOnboarding");
const ContractDetails_1 = require("./pageObjects/ContractDetails");
const ContractClauses_1 = require("./pageObjects/ContractClauses");
const SalaryCalculator_1 = require("./pageObjects/SalaryCalculator");
const InviteEmployee_1 = require("./pageObjects/InviteEmployee");
const SummaryReview_1 = require("./pageObjects/SummaryReview");
const ActionItems_1 = require("./pageObjects/ActionItems");
describe('Complete HR Onboarding process', () => {
    let talentName = "TestingDataFeb22";
    it('Access and login to application', () => __awaiter(this, void 0, void 0, function* () {
        let login = new Login_1.Login();
        yield protractor_1.browser.get('https://beta.workmotion.com/login');
        yield login.inputEmail.sendKeys("aliaa+qahrmanager@workmotion.com");
        yield login.inputPassword.sendKeys("Test1234");
        yield login.btnLogin.click();
    }));
    it('Create new Onboarding resource list', () => __awaiter(this, void 0, void 0, function* () {
        let dboard = new Dashboard_1.Dashboard();
        yield dboard.btnAddEmployee.click();
        yield dboard.btnCreateNew.click();
    }));
    it('Start the onboarding process for the specific country', () => __awaiter(this, void 0, void 0, function* () {
        let onboard = new StartOnboarding_1.StartOnboarding();
        let countryVal = "India";
        onboard.countryValue = countryVal;
        yield onboard.inputSelectCountry.sendKeys(countryVal);
        yield onboard.imgSearchButton.click();
        yield onboard.dpSelectCountry.click();
        yield onboard.btnGetStarted.click();
    }));
    it('Complete section - Contract Details', () => __awaiter(this, void 0, void 0, function* () {
        let cd = new ContractDetails_1.ContractDetails();
        let option = "Yes";
        let workScheduleOption = "Fixed Hour";
        cd.talentEligible = option;
        cd.talentExecutive = option;
        cd.selectWorkSchedule = workScheduleOption;
        yield cd.inputTalentFirstName.sendKeys(talentName);
        yield cd.inputTalentLastName.sendKeys("0001");
        yield cd.radioTalentEligible.click();
        yield cd.radioTalentExecutive.click();
        yield cd.inputJobTitle.sendKeys("Job Title");
        yield cd.inputJobDescription.sendKeys("Job Description");
        yield cd.inputDirectManager.sendKeys("Direct Manager");
        yield cd.inputDirectManagerTitle.sendKeys("Mr");
        yield cd.radioEmployeeType.click();
        yield cd.dpWorkSchedule.click();
        yield cd.workScheduleOption.click();
        yield cd.inputContractStartDate.sendKeys("12-12-2022");
        yield cd.btnContinue.click();
    }));
    it('Complete Section - Contract Clause', () => __awaiter(this, void 0, void 0, function* () {
        let cc = new ContractClauses_1.ContractClauses();
        yield cc.inputPaidTimeOff.clear();
        yield cc.inputPaidTimeOff.sendKeys("33");
        yield cc.btnContinue.click();
    }));
    it('Complete Section - Salary Calculator', () => __awaiter(this, void 0, void 0, function* () {
        let sc = new SalaryCalculator_1.SalaryCalculator();
        yield sc.inputSalaryMonth.sendKeys("200000");
        yield sc.radioOvertime.click();
        yield sc.btnContinue.click();
    }));
    it('Complete Section - Invite Employee', () => __awaiter(this, void 0, void 0, function* () {
        let ie = new InviteEmployee_1.InviteEmployee();
        yield ie.inputTalentEmail.sendKeys("test@gmail.com");
        yield ie.btnContinue.click();
    }));
    it('Complete Section - Summary Review', () => __awaiter(this, void 0, void 0, function* () {
        let sr = new SummaryReview_1.SummaryReview();
        yield sr.checkboxAgree.click();
        yield sr.btnFinish.click();
    }));
    it('Mark Onboarding application as Done', () => __awaiter(this, void 0, void 0, function* () {
        let ac = new ActionItems_1.ActionItems();
        ac.TalentName = talentName;
        yield ac.sidebarActionItem.click();
        yield ac.btnMarkAsDone.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya01vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3dvcmtNb3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUlyQywrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELG1FQUFnRTtBQUNoRSxtRUFBZ0U7QUFDaEUsbUVBQWdFO0FBQ2hFLHFFQUFrRTtBQUNsRSxpRUFBOEQ7QUFDOUQsK0RBQTREO0FBQzVELDJEQUF3RDtBQUV4RCxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO0lBRTVDLElBQUksVUFBVSxHQUFVLGtCQUFrQixDQUFDO0lBRTNDLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ2pELElBQUksTUFBTSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQiwyREFBMkQ7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVG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