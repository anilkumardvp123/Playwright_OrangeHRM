import {test,expect} from '@playwright/test'
import data from '../../testData/login.json'
import login from '../../pageObjects/login/login.po'
import timeSheet from '../../pageObjects/time/mytimeSheet.po'
test("verify the Time Module Mytime sheet",async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    var timesheet=new timeSheet(page);
    await timesheet.employeeTimeSheet()

})
