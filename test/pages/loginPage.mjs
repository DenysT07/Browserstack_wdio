import page from "./page.js"

const mainLoginButton = '~Login'
const emailField = 'input-email'
const passwordField = '~input-password'
const loginButton = '~button-LOGIN'
const messageLoc = 'id=android:id/message' 
const okButton = 'id=android:id/button1'

class LoginPage {
    async clickMainLoginBut() {
        await page.clickElement(mainLoginButton)
    }
    async fillEmailField(value) {
         await page.typeElement(emailField, value)
    }
    async fillPasswordField(value) {
        await page.typeElement(passwordField, value)
    }
    async clickLoginBut() {
        await page.clickElement(loginButton)
    }
    async messageToHaveText(text) {
        await page.elementToHaveText(messageLoc, text)
    }
    async okButtClick() {
        await page.clickElement(okButton)
    }
}
export default new LoginPage;