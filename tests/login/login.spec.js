import {test,expect} from '@playwright/test'
import login from '../../pageObjects/login/login.po'
import data from '../../testData/login.json'
test("Verify login Functionality ",async({page})=>{
    const log=new login(page)
    await log.gotourl(data.username,data.password)
})