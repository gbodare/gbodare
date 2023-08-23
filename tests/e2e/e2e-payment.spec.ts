import { test, expect } from '@playwright/test'



test.describe('New Payment', () => {
    test.beforeEach(async ({page}) => {

        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')
        await page.goto("http://zero.webappsecurity.com/bank/account-activity.html")
        
    })


    test('Should send new payment', async ({page}) => {
        await page.click('#pay_bills_tab') 
        await page.selectOption('#sp_payee','apple')
        await page.click('#sp_get_payee_details') 
        await page.waitForSelector("#sp_get_payee_details")
        await page.selectOption('#sp_account','6')
        await page.type('#sp_amount','5000')
        await page.type('#sp_date', '2023-08-16')
        await page.type('#sp_description', 'some random message')
        await page.click('#pay_saved_payees')
        

        const paymentMsg = await page.locator('#alert_content > span')
        await expect(paymentMsg).toContainText('The payment was successfully submitted.')

    })
})