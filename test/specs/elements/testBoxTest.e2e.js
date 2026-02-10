const { expect } = require('@wdio/globals')
const TextBoxPage = require('../../pageobjects/elements/textBox.page')

describe('Text Box element', () => {
    it('test input in text box @smoke', async () => {
        const smokeUser = {
            name: 'John Doe',
            email: 'John@doe.com',
            current_address: 'some street 123',
            permananet_address: 'other street 987' // This field is a typo on the testing site change if modified.
        }

        await TextBoxPage.open('/text-box')
        await TextBoxPage.fillForm(smokeUser)
        await TextBoxPage.submit()

        const output = await TextBoxPage.getSubmitionOutput(smokeUser)
        const keys = Object.keys(smokeUser)
        keys.forEach((key) => {
            expect(smokeUser[key]).toEqual(output[key])
        })        
    })

})