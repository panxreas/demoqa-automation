const { $ } = require('@wdio/globals')
const Page = require('../page');

class ElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get menuTitle () {
        return $('//h1');
    }

    async getMenuElement (element) {
        return $(`//div//span[text()='${element}']`);
    }

    async navigateToSection (element) {
        const menuItem = await this.getMenuElement(element);
        await menuItem.scrollIntoView({ block: 'center', inline: 'center' });
        await menuItem.waitForClickable({timeout: 5000, timeoutMsg: 'Element was not clickable'});
        await menuItem.click();
    }

}

module.exports = new ElementsPage();