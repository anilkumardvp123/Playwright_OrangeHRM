import {test,expect} from '@playwright/test'
import data from '../../../testData/login.json'
import login from '../../../pageObjects/login/login.po'
import employeelist from '../../../pageObjects/pim/Employee/employeList.po'
test("verify the Pim Module EmployeeList",async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    let employee=new employeelist(page)
    await employee.searchEmploye('patil')

})
