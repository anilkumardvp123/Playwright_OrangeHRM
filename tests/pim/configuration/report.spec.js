import {test,expect}from '@playwright/test'
import login from '../../../pageObjects/login/login.po'
import data from '../../../testData/login.json'
import report1 from '../../../pageObjects/pim/configuration/report.po'
test("Verify the Pim Module Report",async({page})=>{
    var log=new login(page)
    await log.gotourl(data.username,data.password)
    var report=new report1(page)
    await report.forReport()

})

