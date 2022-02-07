"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ActionItems {
    constructor() {
        this.sidebarActionItem = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Action Items')]"));
        this.btnMarkAsDone = protractor_1.element(protractor_1.by.xpath(`//span[contains(text(),'"${this.TalentName}"')]/../../..//button[@id="action-items-mark-done-btn"]`));
    }
}
exports.ActionItems = ActionItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uSXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9BY3Rpb25JdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFdBQVc7SUFLcEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsSUFBSSxDQUFDLFVBQVUseURBQXlELENBQUMsQ0FBQyxDQUFDO0lBQ2pKLENBQUM7Q0FDSjtBQVRELGtDQVNDIn0=