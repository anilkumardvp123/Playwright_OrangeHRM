import { expect } from "@playwright/test"

class dataImport {
    constructor(page) {
        this.page = page
             this.clickonPim=page.locator("//span[text()='PIM']")
        this.clickonConfig=page.locator('[class="oxd-icon bi-chevron-down"]')
        this.clickonDataimport=page.locator("//a[text()='Data Import']")
        this.clickonBrowseBtn=page.locator('[class="oxd-file-input"]')
        this.clickonUpload=page.locator('[type="submit"]')
    }
    async gototheDataImport(){
        await this.clickonPim.click()
        await this.clickonConfig.click()
        await this.clickonDataimport.click()
        var files=['testData/1mb.pdf']
        await this.clickonBrowseBtn.setInputFiles('testData/addresses.csv')
        await this.page.waitForTimeout(2000)
        await this.clickonUpload.click()
      //  await expect(this.successMsg).toHaveText('')
    }
}
export default dataImport;