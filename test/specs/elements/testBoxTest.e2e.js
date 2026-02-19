const { expect } = require('@wdio/globals');
const TextBoxPage = require('../../pageobjects/elements/textBox.page');
const ElementsPage = require('../../pageobjects/elements/elements.page.js');
const MainPage = require('../../pageobjects/main.page');
const { validUsers, invalidUsers } = require('../../data/textBoxData/users.js');
const textBoxPage = require('../../pageobjects/elements/textBox.page');

describe('Text Box element', () => {

    beforeEach('Open main page and navigate to Elements section', async () => {
        await MainPage.open()
        await MainPage.navigate('Elements')
        await ElementsPage.navigateToSection('Text Box')
    })

    it('test input in text box @smoke', async () => {
        const smokeUser = {
            name: 'John Doe',
            email: 'John@doe.com',
            current_address: 'some street 123',
            permananet_address: 'other street 987' // This field is a typo on the testing site change if modified.
        }

        await TextBoxPage.fillForm(smokeUser)
        await TextBoxPage.submit()

        const output = await TextBoxPage.getSubmitionOutput(smokeUser)
        const keys = Object.keys(smokeUser)
        keys.forEach((key) => {
            expect(smokeUser[key]).toEqual(output[key])
        })        
    })

    it('should submit the form successfully for multiple valid users @mat', async () => {
        for (const user of validUsers) {
            await textBoxPage.fillForm(user)
            await textBoxPage.submit()
            const output = await textBoxPage.getSubmitionOutput(user)
            const keys = Object.keys(user)
            keys.forEach((key) => {
                expect(user[key]).toEqual(output[key])
            })
            await textBoxPage.clearForm()
        }
    })

})