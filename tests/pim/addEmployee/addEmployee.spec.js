import {test,expect} from '@playwright/test'
import data from '../../../testData/login.json'
import login from '../../../pageObjects/login/login.po'
import addEmployee from '../../../pageObjects/pim/addEmployee/addEmploye.po'
//const random5Charname = Math.random().toString(36).substring(2, 7);
//const name = Date.now();
test(`verify the Pim Module Add Employee`,async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
     var addemployee=new addEmployee(page)
    //for(let i=0;i<30;i++){
   // var addemployee=new addEmployee(page)
  const random5Char = Math.random().toString(36).substring(2, 7);
    const random5Char1 = Math.random().toString(36).substring(2, 7);
      const random5CharforEMPID = Math.random().toString(36).substring(2, 7);
    await addemployee.addEmployee('narayan'+random5Char,random5Char1+'nani',random5CharforEMPID+'07')

// }
})

test(`verify the Pim Module delete Employee`,async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    //for(let i=0;i<2;i++){
    var addemployee=new addEmployee(page)
    await addemployee.deleteEmployee()

    //}
})

test.only(`verify the Pim Module update Employee`,async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    var addemployee=new addEmployee(page)
    await addemployee.updateEmployee()


})