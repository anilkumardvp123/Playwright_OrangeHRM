import {test,expect} from '@playwright/test'
import data from '../../../testData/login.json'
import login from '../../../pageObjects/login/login.po'
import reporting from '../../../pageObjects/pim/reporting/reporting.po'
test("verify the Pim Module EmployeeList",async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    var report=new reporting(page)
    await report.reportingToManager()


})