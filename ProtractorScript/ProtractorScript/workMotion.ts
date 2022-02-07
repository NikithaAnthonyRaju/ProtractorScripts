import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

import { Login } from "./pageObjects/Login";
import { Dashboard } from "./pageObjects/Dashboard";
import { StartOnboarding } from "./pageObjects/StartOnboarding";
import { ContractDetails } from "./pageObjects/ContractDetails";
import { ContractClauses } from "./pageObjects/ContractClauses";
import { SalaryCalculator } from "./pageObjects/SalaryCalculator";
import { InviteEmployee } from "./pageObjects/InviteEmployee";
import { SummaryReview } from "./pageObjects/SummaryReview";
import { ActionItems } from "./pageObjects/ActionItems";

describe('Complete HR Onboarding process', () => {

    let talentName:string = "TestingDataFeb22";

    it('Access and login to application', async () => {
        let login = new Login();
        await browser.get('https://beta.workmotion.com/login');
        await login.inputEmail.sendKeys("aliaa+qahrmanager@workmotion.com");
        await login.inputPassword.sendKeys("Test1234");
        await login.btnLogin.click();
    })

    it('Create new Onboarding resource list', async () => {
        let dboard = new Dashboard();
        await dboard.btnAddEmployee.click();
        await dboard.btnCreateNew.click();
        expect("99").toEqual("99");
        //await expect(greeting.getText()).toEqual('Hello Julie!');
    })

    it('Start the onboarding process for the specific country', async ()=>{
        let onboard = new StartOnboarding();
        let countryVal:string = "India";
        onboard.countryValue = countryVal;
        await onboard.inputSelectCountry.sendKeys(countryVal);
        await onboard.imgSearchButton.click();
        await onboard.dpSelectCountry.click();
        await onboard.btnGetStarted.click();
    })


    it('Complete section - Contract Details', async ()=>{
        let cd = new ContractDetails();
        expect(cd.txtContractDetailsPage.getText()).toEqual("Employment agreement details");
        let option:string = "Yes";
        let workScheduleOption = "Fixed Hour";
        cd.talentEligible = option;
        cd.talentExecutive = option;
        cd.selectWorkSchedule = workScheduleOption;
        await cd.inputTalentFirstName.sendKeys(talentName);
        await cd.inputTalentLastName.sendKeys("0001");
        await cd.radioTalentEligible.click();
        await cd.radioTalentExecutive.click();
        await cd.inputJobTitle.sendKeys("Job Title");
        await cd.inputJobDescription.sendKeys("Job Description");
        await cd.inputDirectManager.sendKeys("Direct Manager");
        await cd.inputDirectManagerTitle.sendKeys("Mr");
        await cd.radioEmployeeType.click();
        await cd.dpWorkSchedule.click();
        await cd.workScheduleOption.click();
        await cd.inputContractStartDate.sendKeys("12-12-2022");
        await cd.btnContinue.click();
    })

    it('Complete Section - Contract Clause', async ()=>{
        let cc = new ContractClauses();
        await cc.inputPaidTimeOff.clear();
        await cc.inputPaidTimeOff.sendKeys("33");
        await cc.btnContinue.click();
    })

    it('Complete Section - Salary Calculator', async ()=>{
        let sc = new SalaryCalculator();
        await sc.inputSalaryMonth.sendKeys("200000");
        await sc.radioOvertime.click()
        await sc.btnContinue.click();
    })

    it('Complete Section - Invite Employee', async ()=>{
        let ie = new InviteEmployee();
        await ie.inputTalentEmail.sendKeys("test@gmail.com");
        await ie.btnContinue.click();
    })

    it('Complete Section - Summary Review', async ()=>{
        let sr = new SummaryReview();
        await sr.checkboxAgree.click();
        await sr.btnFinish.click();
    })

    it('Mark Onboarding application as Done', async ()=>{
        let ac = new ActionItems();
        ac.TalentName = talentName;
        await ac.sidebarActionItem.click();
        await ac.btnMarkAsDone.click();
    })
})
