// import {test,expect} from '@playwright/test'
// // test.beforeEach(async ({ page }) => {
// //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// //     await page.locator('[name="username"]').fill("Admin")
// //     await page.locator('[name="password"]').fill('admin123')
// //     await page.locator('[type="submit"]').click()
// //     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// // })

// test.beforeEach(async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('[name="username"]').fill("Admisn")
//     await page.locator('[name="password"]').fill('admin123')
//     await page.locator('[type="submit"]').click()
//     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
// })
// test("Sample To Automate The Script inValid password Data",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('[name="username"]').fill("Admin")
//     await page.locator('[name="password"]').fill('admin1023')
//     await page.locator('[type="submit"]').click()
//     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
// })
// test("Sample To Automate The Script inValid password Data1",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('[name="username"]').fill("Admin")
//     await page.locator('[name="password"]').fill('admin1023')
//     await page.locator('[type="submit"]').click()
//     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
// })
// test.afterEach(async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('[name="username"]').fill("Admisn")
//     await page.locator('[name="password"]').fill('admin1tr23')
//     await page.locator('[type="submit"]').click()
//     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
// })

import { expect,test } from "@playwright/test";
test("Demo " ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('input[placeholder="Enter Name"]').fill("anill")
})