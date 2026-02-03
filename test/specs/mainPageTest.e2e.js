const { expect, browser } = require('@wdio/globals')
const MainPage = require('../pageobjects/main.page')

describe('Main page functionality', () => {
    it('should verify elements page link works @smoke', async () => {
        await MainPage.open()
        await MainPage.navigate('Elements')

        const url = await browser.getUrl()
        await expect(url).toContain('/elements')
    })

    it('should verify forms page link works @smoke', async () => {
        await MainPage.open()
        await MainPage.navigate('Forms')

        const url = await browser.getUrl()
        await expect(url).toContain('/forms')
    })

    it('should verify alert windows page link works @smoke', async () => {
        await MainPage.open()
        await MainPage.navigate('Alerts, Frame & Windows')

        const url = await browser.getUrl()
        await expect(url).toContain('/alertsWindows')
    })
})

