import {test,expect } from "@playwright/test";
import { request } from "http";
test("api testing",async({request})=>{
    const header={
        "cookie":"orangehrm=o3am4sjfsohf82r6n1g2k5d7rj",
       "host":"opensource-demo.orangehrmlive.com",
       "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    }
      const response=await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&username=ashwin&sortField=u.userName&sortOrder=ASC',{headers:header})
       await expect(response.status()).toBe(200)
      const user=await response.json()
       console.log(user)
       await expect(user.data[0].userName).toBe('Ashwin')

    })
test("api testing post",async({request})=>{
    const header={
        "cookie":"orangehrm=o3am4sjfsohf82r6n1g2k5d7rj",
       "host":"opensource-demo.orangehrmlive.com",
       "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    }
    const payload={
        "username": "mmmm", "password": "mmmmmmmmmm1", "status": true, "userRoleId": 2, "empNumber": 69

    }
     const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users'
      const response=await request.post(url,{headers:header,data:payload})
       await expect(response.status()).toBe(200)
       const user=await response.json()
       console.log(user)
})

test("api testing delete",async({request})=>{
    const header={
        "cookie":"orangehrm=o3am4sjfsohf82r6n1g2k5d7rj",
       "host":"opensource-demo.orangehrmlive.com",
       "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    }
    const payload={"ids": [92]}

     const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users'
     //https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users

      const response=await request.delete(url,{headers:header,data:payload})
       await expect(response.status()).toBe(200)
       const user=await response.json()
       console.log(user)
})