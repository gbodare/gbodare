import { test, expect } from '@playwright/test'
import { FeedbackPage } from '../../page-objects/Feedback-Page'
import { HomePage } from '../../page-objects/Home-Page'


test.describe.parallel.only('FeedBack Form', () => {

    let homePage: HomePage
    let feedBackPage: FeedbackPage
    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page)
        feedBackPage = new FeedbackPage(page)

        await homePage.visit()
        await homePage.clickOnFeedbackLink()

        // await page.goto("http://zero.webappsecurity.com/index.html")
        // await page.click('#feedback')
    })


    //Reset feedback form
    test("Reset feedback form", async ({page}) => {

        // await page.type('#name', 'Gaurav')
        // await page.type('#email', 'gbodare@yahoo.com')
        // await page.type('#subject', 'Login Error')
        // await page.type('#comment', 'Login is not working as expected')
        // await page.click("input[name='clear']")
        
        // const nameInput = await page.locator('#name')
        // const commentInput = await page.locator('#comment')
        // await expect(nameInput).toBeEmpty()
        // await expect(commentInput).toBeEmpty()
        
        
        await feedBackPage.resetForm()
        await feedBackPage.assertReset()
    })
    
    //Submit feedback form
    test("Submit feedback form", async ({page}) => {
        // await page.type('#name', 'Gaurav')
        // await page.type('#email', 'gbodare@yahoo.com')
        // await page.type('#subject', 'Login Error')
        // await page.type('#comment', 'Login is not working as expected')
        // await page.click("input[name='submit']")
        // await page.waitForSelector("#feedback-title")
        await feedBackPage.fillForm('Gaurav', 'gbodare@yahoo.com', 'Login Error', 'Login is not working as expected')
        await feedBackPage.submitForm()
        await feedBackPage.feedbackFormSent()
    })
})
