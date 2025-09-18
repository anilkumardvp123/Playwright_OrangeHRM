import {test,expect} from '@playwright/test'
import optinField from '../../pageObjects/pim/optionalFields.po'
import data from '../../../testData/login.json'
import login from '../../../pageObjects/login/login.po'
test("verify the Pim Module OptionalFields",async({page})=>{
    let logindetail=new login(page)
    await logindetail.gotourl(data.username,data.password)
    let pimdetail=new optinField(page)
    await pimdetail.gotoPIMModule()

})