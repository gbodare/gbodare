import { expect, Locator, Page } from "@playwright/test"

export class FeedbackPage {

    readonly page: Page
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly subjectInput: Locator
    readonly commentInput: Locator
    readonly clearButton: Locator
    readonly submitButton: Locator
    readonly feedbackTitle: Locator
    

    constructor(page: Page) {
        this.page= page
        this.nameInput = this.page.locator('#name')
        this.emailInput = this.page.locator('#email')
        this.subjectInput = this.page.locator('#subject')
        this.commentInput = this.page.locator('#comment')
        this.clearButton = this.page.locator("input[name='clear']")
        this.submitButton = this.page.locator("input[name='submit']")
        this.feedbackTitle = this.page.locator("#feedback-title")
        

    }

    async fillForm(name: string, email: string, subject: string, comment: string) {
        await this.nameInput.type(name)
        await this.emailInput.type(email)
        await this.subjectInput.type(subject)
        await this.commentInput.type(comment)

    }

    async resetForm() {
        await this.clearButton.click()
    }

    async submitForm() {
        await this.submitButton.click()
    }

    async assertReset() {
        await expect(this.nameInput).toBeEmpty()
        await expect(this.commentInput).toBeEmpty()
    }

    async feedbackFormSent(){
        await expect(this.feedbackTitle).toBeVisible()
    }
}