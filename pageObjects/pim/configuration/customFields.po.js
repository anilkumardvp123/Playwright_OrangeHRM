import { expect } from "@playwright/test"

class customFields {
    constructor(page) {
        this.page = page
        this.clickonPim = page.locator("//span[text()='PIM']")
        this.clickonConfig = page.locator('[class="oxd-icon bi-chevron-down"]')
        this.clickonCustomField = page.locator("//a[text()='Custom Fields']")
        this.clickonAdd = page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.name = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.screen = page.locator('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]')
        var screenvalues = ['Personal Details', 'Contact Details', 'Emergency Contacts', 'Dependents', 'Immigration', 'Job', 'Salary', 'Tax Exemptions', 'Report-to', 'Qualifications', 'Memberships']
        var typevalues = ['Text or Number', 'Drop Down']
        this.selectScreenOptions = page.locator(`//span[contains(.,"${screenvalues[8]}")]`)
        this.type = page.locator('[class="oxd-select-text-input"]')
        this.selectTypeOptions = page.locator(`//span[text()="${typevalues[0]}"]`)
        this.clickonSaveBtn = page.locator('[type="submit"]')
        this.successMsg = page.locator('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')

    }
    async gototheCustomFiled() {
        // var screenvalues=['Personal Details','Contact Details','Emergency Contacts','Dependents','Immigration','Job','Salary','Tax Exemptions','Report-to','Qualifications','Memberships']
        // var typevalues=['Text or Number','Drop Down']
        await this.clickonPim.click()
        await this.clickonConfig.click()
        await this.clickonCustomField.click()
        await this.clickonAdd.click()
                const random5Char = Math.random().toString(36).substring(2, 7);
        await this.name.fill('emp'+random5Char)
        await this.screen.nth(0).click()
        await this.selectScreenOptions.click({ force: true })//{Timeout:2000}
        await this.type.nth(1).click()
        await this.selectTypeOptions.click()
        await this.clickonSaveBtn.click()

        await expect(this.successMsg).toHaveText('Successfully Saved')

    }
}
export default customFields;