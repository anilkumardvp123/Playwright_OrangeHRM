import { expect } from "@playwright/test"

class mytimeSheet {
    constructor(page) {
        this.page = page
        this.clickonTime = page.locator("//span[text()='Time']")
        this.clickonTimesheet = page.locator("//h6[text()='Timesheets']")
        this.clickonMytimesheet = page.locator("//a[text()='My Timesheets']")
        this.clickonDate = page.locator('[class="oxd-icon bi-calendar oxd-date-input-icon"]')



        this.clickonEmployeetimesheet = page.locator("//a[text()='Employee Timesheets']")
        this.typeEmpName = page.locator('input[placeholder="Type for hints..."]')
        this.clickonUser = page.locator("//span[text()='Admin Sayed TestL']")////span[text()='Admin  TestL']
        this.clickonview = page.locator('button[type="submit"]')
        this.clickonEditBtn = page.locator('[class="oxd-button oxd-button--medium oxd-button--ghost"]')
        this.clickonDeleteBtn = page.locator('[class="oxd-icon-button orangehrm-timesheet-icon"]').nth(0)
        this.enterProjectname = page.locator('[placeholder="Type for hints..."]')
        this.clickonProject = page.locator("//span[text()='The Coca-Cola Company - Coke - Phase 1']")
        this.clickonSelectActivity = page.locator('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]')
        this.clickOnSelectoptions=page.locator("//span[text()='Bug Fixes']")
        this.enterMondayTime = page.locator('[class="oxd-input oxd-input--active"]').nth(1)

        this.enterTueTime = page.locator('[class="oxd-input oxd-input--active"]').nth(2)

        this.enterWedTime = page.locator('[class="oxd-input oxd-input--active"]').nth(3)

        this.enterThurTime = page.locator('[class="oxd-input oxd-input--active"]').nth(4)

        this.enterFriTime = page.locator('[class="oxd-input oxd-input--active"]').nth(5)
        this.clickonSaveBtn=page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')

      this.succesMsg=page.locator("//p[text()='Successfully Saved']")


    }
    async employeeTimeSheet(){
        await this.clickonTime.click()
        await this.typeEmpName.fill('test')
        await this.page.waitForTimeout(1000)
        await this.clickonUser.click()
        await this.clickonview.click()
        await this.clickonEditBtn.click()
        await this.clickonDeleteBtn.click()
        await this.enterProjectname.fill('s')
        await this.clickonProject.click()
        await this.clickonSelectActivity.click()
        await this.clickOnSelectoptions.click()
        await this.enterMondayTime.fill('8')
        await this.enterTueTime.fill('8')
        await this.enterWedTime.fill('8')
        await this.enterThurTime.fill('9')
        await this.enterFriTime.fill('8')
        await this.clickonSaveBtn.click()
        await expect(this.succesMsg).toBeVisible()
    }
}
export default mytimeSheet;