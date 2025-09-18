
import { test, expect } from '@playwright/test'
class report {
    constructor(page) {
        this.page = page
        this.clickonPim = page.locator("//span[text()='PIM']")
        this.clickonConfig = page.locator('[class="oxd-icon bi-chevron-down"]')
        this.clickonReport = page.locator("//a[text()='Reporting Methods']")
        this.clickonAddBtn = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.enterName = page.locator('[class="oxd-input oxd-input--focus"]')//[class="oxd-input oxd-input--focus"]
        this.saveBtn = page.locator('[type="submit"]')



    }
    async forReport() {
        await this.clickonPim.click()
        await this.clickonConfig.click()
        await this.clickonReport.click()
        await this.clickonAddBtn.click()
        const random5Char = Math.random().toString(36).substring(2, 7);

        await this.enterName.type(random5Char + 'kumar')
        await this.saveBtn.click()
    }

}
export default report;