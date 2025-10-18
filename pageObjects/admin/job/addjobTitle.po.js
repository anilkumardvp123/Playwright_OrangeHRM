import { expect } from "@playwright/test";

class addjobtitle{
    constructor(page){
        this.page=page;
        this.admin=page.locator("//span[text()='Admin']")
        this.job=page.locator("//span[text()='Job ']")
        this.jobTitle=page.locator("//a[text()='Job Titles']")
        this.add=page.locator("//button[text()=' Add ']")
        this.jobTitleName=page.locator('[class="oxd-input oxd-input--active"]').nth(1)
        this.save=page.locator('[type="submit"]')
        this.successMsg=page.locator("//p[text()='Successfully Saved']")
    }
    async createJobTitle(){
        await this.admin.click()
        await this.job.click()
        await this.jobTitle.click()
        await this.add.click()
        let random5Char= Math.random().toString(36).substring(2,7)
        await this.jobTitleName.fill(random5Char)
        await this.save.click()
        await this.page.waitForTimeout(15000)
        console.log(await this.page.content());
        expect(this.successMsg).toBeVisible()
    }
}
export default addjobtitle