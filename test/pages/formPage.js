const page = require("./page.js")

const formButt = '~Forms'
const textFieldLoc = `~text-input`
const textResultLoc = '~input-text-result'
const switchLoc = '~switch'
const textUnderSwitch = '~switch-text'
const dropdownMenueArrow = '//.[@content-desc="Dropdown"]'
const awesomeBut = '//android.widget.CheckedTextView[4]'
const dropdownTextField = '//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText'
const activeButton = '~button-Active'
const mesageLoc =  'id=android:id/message' 

class FormPage {

    async formButClick() {
        await page.clickElement(formButt)
    }
    async fillTextField(value) {
        await page.typeElement(textFieldLoc, value)
    }
    async textRusultToHaveText(value) {
        await page.elementToHaveText(textResultLoc, value)
    }
    async clickSwitch() {
        await page.clickElement(switchLoc)
    }
    async textUnderSwitchToHaveText(value) {
        await page.elementToHaveText(textUnderSwitch, value)
    }
    async dropdownClick() {
        await page.clickElement(dropdownMenueArrow)
    }
    async cickAwesome() {
        await page.clickElement(awesomeBut)
    }
    async dropdownTextFieldToHaveTExt(value) {
        await page.elementToHaveText(dropdownTextField, value)
    }
    async activeButtonClick() {
        await page.clickElement(activeButton)
    }
    async mesageToHaveText(value) {
        await page.elementToHaveText(mesageLoc, value)
    }

}
module.exports = new FormPage();