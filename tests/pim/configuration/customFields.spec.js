import {test,expect}from '@playwright/test'
import login from '../../../pageObjects/login/login.po'
import data from '../../../testData/login.json'
import customFields from '../../../pageObjects/pim/configuration/customFields.po'
test("Verify the Pim Module CustomFields",async({page})=>{
    var log=new login(page)
    await log.gotourl(data.username,data.password)
    var custom=new customFields(page)
    await custom.gototheCustomFiled()
})