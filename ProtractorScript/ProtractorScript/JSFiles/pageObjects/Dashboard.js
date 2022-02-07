"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Dashboard {
    constructor() {
        this.btnAddEmployee = protractor_1.element(protractor_1.by.xpath("//button[contains(text(), 'Add employee')]"));
        this.btnCreateNew = protractor_1.element(protractor_1.by.xpath("//li[contains(text(),'CREATE NEW')]"));
    }
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvRGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsU0FBUztJQUlsQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNKO0FBUkQsOEJBUUMifQ==