import { test, expect } from '@playwright/test';
import { readJsonFile } from '../../utils/readjsonData.js';
import { saveApiResponse } from '../../utils/saveResponsehelper.js'; 

test.only('POST Request - Create User', async ({ request }, testInfo) => {

  const requestBody = readJsonFile('createUser.json');
  const response = await request.post('https://reqres.in/api/users', {
    data: requestBody,
  });
  expect(response.status()).toBe(201); // Expect Created status
  const responseBody = await response.json();
 
  saveApiResponse(responseBody, testInfo);


});
