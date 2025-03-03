import { test, expect } from '@playwright/test'


import constants from '../../frameworkconstants/loginlocatorconstant.js'

test.only('just for practice', async ({ page }) => {

    await page.goto(constants.url.base_url)

    const newTab = page.waitForEvent('popup')

    await page.locator(constants.locators.link).click()
    //page.getByText('Open Example.com')

    const newpage = await newTab

    await newpage.waitForURL(constants.url.newtab_url)

    expect(newpage.getByText(constants.locators.moreInfolink)).toBeVisible()

    await page.bringToFront(); // Switch back to the original window
    console.log('Switched back to the main window');



    // await page.goto('https://www.saucedemo.com/')

    // await page.locator('[placeholder="Username"]').fill('standard_user')

    // await page.locator('[placeholder="Password"]').fill('secret_sauce')

    // await page.locator('#login-button').click()


    // await page.waitForURL('https://www.saucedemo.com/inventory.html')


    // const productnamelist = await page.locator('[data-test="inventory-item-name"]').allTextContents()

    // productnamelist.forEach((name) => { console.log(name) })



})