import {test,expect} from '@playwright/test'
import login from '../../../pageObjects/login/login.po'
import addjobtitle from '../../../pageObjects/admin/job/addjobTitle.po'
import data from '../../../testData/login.json'
test("addJobTitle",async({page})=>{
    var logi=new login(page) 
    var addjob=new addjobtitle(page)
    await logi.gotourl(data.username,data.password)
    await addjob.createJobTitle()
   // await page.waitForTimeout(5000)

})