import {test,expect} from '@playwright/test'
class optionalFields{
    constructor(page){
        this.page=page
        this.clickonPim=page.locator("//span[text()='PIM']")
        this.clickonConfig=page.locator('[class="oxd-icon bi-chevron-down"]')
        this.clickonOptField=page.locator("//a[text()='Optional Fields']")
        this.clickonDisableBtn=page.locator('(//span[@class="oxd-switch-input oxd-switch-input--active --label-right"])[1]')
        this.clionSSNField=page.locator('(//span[@class="oxd-switch-input oxd-switch-input--active --label-right"])[2]')
        
        this.clickonSSIField=page.locator('span[class="oxd-switch-input oxd-switch-input--active --label-right"]')
        this.clickonTaxField=page.locator('(//span[@class="oxd-switch-input oxd-switch-input--active --label-right"])[4]')
        this.clickonSaveBtn=page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
        this.successMsg=page.locator('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    }
    async gotoPIMModule(){
        await this.clickonPim.click()
        await this.clickonConfig.click()
        await this.clickonOptField.click()
        await this.clickonDisableBtn.click()
        await this.clickonSSIField.nth(2).click()
        await this.page.waitForTimeout(2000)
       // await this.clionSSNField.check()
        //await this.clickonTaxField.check()
        await this.clickonSaveBtn.click()
        await expect(this.successMsg).toHaveText('Successfully Saved')
    }
}
export default optionalFields;