import {test,expect} from '@playwright/test'
test.describe("Group1",async()=>{
test("Sample To Automate The Script inValid password Data",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
test("Sample To Automate The Script inValid password Data1",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
test.skip("Sample To Automate The Script inValid password Data2",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
test("Sample To Automate The Script inValid password Data3",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
})

test.describe.only("grouping2",async()=>{
test("launch the browser",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
test.only("launch the browser1",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill('admin1023')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
})
})