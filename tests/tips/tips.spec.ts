import { test, expect } from '@playwright/test'


test.describe.only('Tips & Tricks Section', () => {
    test('TestInfo Object', async ( { page }, testInfo) => {
        await page.goto('https://www.example.com')
        // console.log(testInfo);
        
    })

    test("Test Skip Browser", async ({ page, browserName}) => {
        test.skip(browserName === "chromium","Feature not ready in chrome browser")
        await page.goto('https://www.example.com')
    })

    test("Test Fixme Annotation", async ({ page, browserName}) => {
        test.fixme(browserName === "chromium","Test is not stable, needs revision")
        await page.goto('https://www.example.com')
    })

    const people = ['Mike', 'Judy', 'Peter', 'Elon', 'Radhe']
    for (const name of people) {
        test.only(`Running test for ${name}`, async ({page}) => {
            await page.goto('http://zero.webappsecurity.com/index.html')
            await page.type('#searchTerm', `${name}`)
            await page.waitForTimeout(3000)
        })
    }
})