// import { default as loginPage } from "../pages/loginPage.mjs";

// import formPage from "../pages/formPage.js"
// import loginPage from "../pages/loginPage.js"

// import { default as formPage } from "../pages/formPage.mjs"




describe('Login page', () => {
    it('should log in', async () => {
        await $('~Login').click()
        await $('~input-email').setValue('qqweasdzxc@gmail.com')
        await $('~input-password').setValue('123123123')
        await $('~button-LOGIN').click()
        await expect(await $('id=android:id/message')).toHaveText('You are logged in!')
        await $('id=android:id/button1').click()
        // await loginPage.clickMainLoginBut()
        // await loginPage.fillEmailField("qqweasdzxc")
        // await loginPage.fillPasswordField("123123123")
        // await loginPage.clickLoginBut()
        // await loginPage.messageToHaveText("You are logged in!")
        // await loginPage.okButtClick()
    })
})

describe('Form Page', () => {

     before('open form page', async() => {
        await $(`~Forms`).click();
        // await formPage.formButClick()
     })

    it('should be displayed text that have been written in text field', async () => {
        await $(`~text-input`).setValue(`someRandom a123`);
        await expect(await $('~input-text-result')).toHaveText(`someRandom a123`)
        // await formPage.fillTextField('someRandom a123')
        // await formPage.textRusultToHaveText('someRandom a123')
    })

    it('should show condition of switch', async () => {
        await $('~switch').click()
        await expect(await $('~switch-text')).toHaveText('Click to turn the switch OFF')
        // await formPage.clickSwitch()
        // await formPage.textUnderSwitchToHaveText('Click to turn the switch OFF')
    })
    it('should be displayed text that have been choosen in dropdown', async () => {
        await $('//.[@content-desc="Dropdown"]').click()
        await $('//android.widget.ListView/android.widget.CheckedTextView[4]').click()
        await expect(await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')).toHaveText('This app is awesome')
        // await formPage.dropdownClick()
        // await formPage.cickAwesome()
        // await formPage.dropdownTextFieldToHaveTExt('This app is awesome')
    })
    it('should be displayed message with text "This button is active"', async () => {
        await $('~button-Active').click()
        await expect(await $('id=android:id/message')).toHaveText('This button is active')
        // await formPage.activeButtonClick()
        // await formPage.mesageToHaveText('This button is active')
    })
})



