import { test, expect } from '@playwright/test';
import { readJsonFile } from '../../utils/readjsonData.js';
import { saveApiResponse } from '../../utils/saveResponsehelper.js';

test('POST Request - Create User', async ({ request }, testInfo) => {

  let requestBody;
  let responseBody;

  await test.step('Read JSON file from external source', async () => {
    try {
      requestBody = readJsonFile('createUser.json');
      expect(requestBody).toBeTruthy(); // Ensure JSON data is not empty
    } catch (error) {
      throw new Error(`Failed to read JSON file: ${error.message}`);
    }
  });

  await test.step('Assert Response body', async () => {
    const response = await request.post('https://reqres.in/api/users', {
      data: requestBody,
    });
    expect(response.status()).toBe(201); // Expect Created status
     responseBody = await response.json();

    saveApiResponse(responseBody, testInfo);
  })




});
