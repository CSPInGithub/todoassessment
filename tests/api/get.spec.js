import { test, expect } from '@playwright/test';

import { saveApiResponse } from '../../utils/saveResponsehelper.js'

test('API Test - Get Users', async ({ request }, testInfo) => {
  const response = await request.get('https://reqres.in/api/users?page=1');
  expect(response.status()).toBe(200); // Check status



  const body = await response.json() // Convert response to JSON


  saveApiResponse(body, testInfo)



  const emails1 = body.data.map(u => u.email)

  // console.log(emails1)

  emails1.forEach(email => {
    expect(email).toContain('@')
  })

  const supporturl = body.support.url

  expect(supporturl).toContain("=referral")









  //JSONPath doesnt support


});
