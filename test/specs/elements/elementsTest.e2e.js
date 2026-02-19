const { expect } = require('@wdio/globals')
const ElementsPage = require('../../pageobjects/elements/elements.page')
const MainPage = require('../../pageobjects/main.page')

describe('Elements section page', () => {

    before('Open main page and navigate to Elements section', async () => {
        await MainPage.open()
        await MainPage.navigate('Elements')
    })
    
    it('should validate element Text Box works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Text Box')

        await expect(ElementsPage.menuTitle).toHaveText('Text Box')
    })

    it('should validate element Check Box works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Check Box')
        
        await expect(ElementsPage.menuTitle).toHaveText('Check Box')
    })

    it('should validate element Radio Button works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Radio Button')

        await expect(ElementsPage.menuTitle).toHaveText('Radio Button')
    })

    it('should validate element Web Tables works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Web Tables')

        await expect(ElementsPage.menuTitle).toHaveText('Web Tables')
    })

    it('should validate element Buttons works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Buttons')

        await expect(ElementsPage.menuTitle).toHaveText('Buttons')
    })

    it('should validate element Links works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Links')

        await expect(ElementsPage.menuTitle).toHaveText('Links')
    })

    it('should validate element Broken Links - Images works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Broken Links - Images')

        await expect(ElementsPage.menuTitle).toHaveText('Broken Links - Images')
    })

    it('should validate element Upload and Download works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Upload and Download')

        await expect(ElementsPage.menuTitle).toHaveText('Upload and Download')
    })

    it('should validate element Dynamic Properties works as intended @smoke', async () => {
        await ElementsPage.navigateToSection('Dynamic Properties')

        await expect(ElementsPage.menuTitle).toHaveText('Dynamic Properties')
    })
})

