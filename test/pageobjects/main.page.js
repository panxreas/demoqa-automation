const { $ } = require('@wdio/globals')
const Page = require('./page');


class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get elementPageCard () {
        return $("//div[contains(@class, 'card-body')]//h5[text()='Elements']");
    }

    async navigate () {
        await this.elementPageCard.click();
    }
}

module.exports = new MainPage();
