const { $, browser } = require('@wdio/globals')
const Page = require('../page');

class TextBoxPage extends Page {
    /**
     * define selectors using getter methods
     */

    get fullNameInput () {
        return $('//input[@id="userName"]');
    }

    get emailInput () {
        return $('//input[@id="userEmail"]');
    }

    get currentAddressInput () {
        return $('//textarea[@id="currentAddress"]');
    }

    get permanentAddressInput () {
        return $('//textarea[@id="permanentAddress"]');
    }

    get submitButton () {
        return $('//button[@id="submit"]');
    }


    async fillForm (user) {
        await this.fullNameInput.setValue(user.name);
        await this.emailInput.setValue(user.email);
        await this.currentAddressInput.setValue(user.current_address);
        await this.permanentAddressInput.setValue(user.permananet_address);
    }

    async clearForm () {
        await this.fullNameInput.clearValue();
        await this.emailInput.clearValue();
        await this.currentAddressInput.clearValue();
        await this.permanentAddressInput.clearValue();    
    }

    async submit () {
        await this.submitButton.scrollIntoView();
        await this.submitButton.click();
    }

    async getSubmitionOutput (inputFields) {
        const outputElements = await $$('//div[@id="output"]//p');
        const output = {}
        for (let i = 0; i < Object.keys(inputFields).length; i++) {
            await outputElements[i].waitForExist()
            const input = await outputElements[i].getText()
            const [rawKey, rawValue] = input.split(':')
            const key = rawKey.trim().toLowerCase().replace(/\s+/g, '_')
            const value = rawValue.trim()
            output[key] = value
        }
        return output
        
    }

}

module.exports = new TextBoxPage();