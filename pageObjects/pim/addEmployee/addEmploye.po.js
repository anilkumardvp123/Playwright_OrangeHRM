import { expect } from "@playwright/test"

class addEmployee {
    constructor(page) {
        this.page = page
             this.clickonPim=page.locator("//span[text()='PIM']")
             this.clickonaddEmployee=page.locator("//a[text()='Add Employee']")
             this.firstName=page.locator('input[name="firstName"]')
             this.lastName=page.locator('input[name="lastName"]')
             this.empId=page.locator('input[class="oxd-input oxd-input--active"]').nth(1)
             this.clickonSaveBtn=page.locator('button[type="submit"]')
             this.succesMsg=page.locator('p[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')

             this.clickonempList=page.locator("//a[text()='Employee List']")
             this.clickoncheckBox=page.locator('(//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"])[1]')
             this.clickonDelete=page.locator("//button[text()=' Delete Selected ']")
             this.clickonyesDelete=page.locator('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]')
             this.succesMsg=page.locator('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
     
             this.clickonupdateBtn=page.locator('[class="oxd-icon-button oxd-table-cell-action-space"]').nth(0)
             this.name=page.locator('[name="firstName"]')
             this.lastname=page.locator('[name="lastName"]')
             this.empId=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
             this.clickonSaveBtn=page.locator('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').nth(0)
    
    
            }
    async addEmployee(firstName,lastName,empId){
        await this.clickonPim.click()
        await this.clickonaddEmployee.click()
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.empId.fill(empId)
        await this.clickonSaveBtn.click()
        await expect(this.succesMsg).toHaveText('Successfully Saved')
       // await this.page.close()
    }
    async deleteEmployee(){
        await this.clickonPim.click()
        await this.clickonempList.click()
        await this.clickoncheckBox.click()
        await this.clickonDelete.click()
        await this.clickonyesDelete.click()
        await expect(this.succesMsg).toHaveText('Successfully Deleted')
    }
    async updateEmployee(){
     await this.clickonPim.click()  
     await this.clickonempList.click()
     await this.clickonupdateBtn.click()
    await expect(this.page.locator('h6:has-text("Personal Details")')).toBeVisible();
    await this.page.waitForTimeout(1000)
     await this.firstName.fill('naraynaBMW')
     await this.page.waitForTimeout(1000)
     await this.lastName.fill("narayanaBMW")
     await this.page.waitForTimeout(1000)
     //  const random5Char = Math.random().toString(36).substring(2, 7);
    // await this.empId.fill(random5Char+'9')
     await this.clickonSaveBtn.click()
    // console.log(random5Char)
    await this.page.waitForTimeout(1000)



    }
}

export default addEmployee;