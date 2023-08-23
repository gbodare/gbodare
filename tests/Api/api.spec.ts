import { test, expect} from '@playwright/test'


test.describe.parallel('API Testing', () => {
    const baseUrl = "https://regres.in/api"

    test("Simple API Test - Assert Response Status", async ({ request }) => {
        // const response = await request.get(`${baseUrl}/users/2`)
        const response = await request.get(`https://www.google.com/`)
        expect(response.status()).toBe(200)
    })

    test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
        // const response = await request.get(`${baseUrl}/users/2`)
        const response = await request.get(`https://www.google.com/users/lijfvchvkdfkj`)
        expect(response.status()).toBe(404)
    })
})