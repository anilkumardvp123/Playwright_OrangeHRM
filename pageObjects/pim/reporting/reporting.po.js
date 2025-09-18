import { expect } from "@playwright/test"

class reporting{
    constructor(page) {
        this.page = page
        this.clickonPim = page.locator("//span[text()='PIM']")
        this.clickonReport=page.locator("//a[text()='Reports']")
        this.search=page.locator('input[placeholder="Type for hints..."]')
        this.selectOptions=page.locator("//span[text()='Employee Contact info report']")
        this.clickonSearch=page.locator('button[type="submit"]')
       this.verifyDisplaymsg=page.locator("//div[text()='Employee Contact info report']")
       this.clickonAddBtn=page.locator('[class="oxd-icon bi-plus oxd-button-icon"]')
       //this.

    }
    async reportingToManager()
    {
        await this.clickonPim.click()
        await this.clickonReport.click()
        await this.search.fill('employee')
        await this.selectOptions.click()
        await this.clickonSearch.click()
        await expect(this.verifyDisplaymsg).toBeVisible()
    }
    async addReporting()
    {
        //await
    }
}
export default reporting;