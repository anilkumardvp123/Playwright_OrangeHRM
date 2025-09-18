import{test,expect}from '@playwright/test'
class login{
    constructor(page){
        this.page=page;
        this.url=page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        this.username=page.locator('input[placeholder="Username"]')
        this.password=page.locator('input[placeholder="Password"]')
        this.loginBtn=page.locator('button[type="submit"]')

    }
    async gotourl(username,password){
        await this.url
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
       await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}
export default login;