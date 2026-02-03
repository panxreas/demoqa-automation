const { expect } = require('@wdio/globals')
const MainPage = require('../pageobjects/main.page')
const ElementsPage = require('../pageobjects/elements.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await MainPage.open()
        await MainPage.navigate()

        await expect(ElementsPage.elementPageTitle).toHaveText('Elements')

    })
})

