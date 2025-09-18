import {test,expect} from '@playwright/test'
import data from '../../../testData/login.json'
import login from '../../../pageObjects/login/login.po'
import dataImport from '../../../pageObjects/pim/configuration/dataImport.po'
test("verify the Pim Module DataImport",async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    var dataimport=new dataImport(page)
    await dataimport.gototheDataImport()


})