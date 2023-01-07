const formPage = require("../pages/formPage.js")
const loginPage = require("../pages/loginPage.js")

xdescribe('Login page', () => {
    it('should log in', async () => {
        await loginPage.clickMainLoginBut()
        await loginPage.fillEmailField("qqweasdzxc@gmail.com")
        await loginPage.fillPasswordField("123123123")
        await loginPage.clickLoginBut()
        await loginPage.messageToHaveText("You are logged in!")
        await loginPage.okButtClick()
    })
})

describe('Form Page', () => {

    it('should be displayed text that have been written in text field', async () => {
        await formPage.formButClick()
        await formPage.fillTextField('someRandom a123')
        await formPage.textRusultToHaveText('someRandom a123')
    })

    it('should show condition of switch', async () => {
        await formPage.clickSwitch()
        await formPage.textUnderSwitchToHaveText('Click to turn the switch OFF')
    })
    it('should be displayed text that have been choosen in dropdown', async () => {
        await formPage.dropdownClick()
        await formPage.cickAwesome()
        await formPage.dropdownTextFieldToHaveTExt('This app is awesome')
    })
    it('should be displayed message with text "This button is active"', async () => {
        await formPage.activeButtonClick()
        await formPage.mesageToHaveText('This button is active')
    })
})



