import { expect } from "@playwright/test"

class employeList {
    constructor(page) {
        this.page = page
             this.clickonPim=page.locator("//span[text()='PIM']")
             this.clickonEmployeList=page.locator("//a[text()='Employee List']")
            this.searchName=page.locator('[placeholder="Type for hints..."]')
            // this.searchName=page.locator('(//div[@class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"])[1]')//('(//input[@placeholder="Type for hints..."])[1]')
             this.clickonSearch=page.locator('[type="submit"]')
             this.verifyUser=page.locator("//div[text()='Patil']")


    }
    async searchEmploye(employename){

        await this.clickonPim.click()
        await this.clickonEmployeList.click()
        await this.searchName.nth(0).fill(employename)
        await this.page.waitForTimeout(2000)
        await this.clickonSearch.click()
        await expect(this.verifyUser).toBeVisible()
    }
}
export default employeList;