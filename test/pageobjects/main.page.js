const { $ } = require('@wdio/globals')
const Page = require('./page');


class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    getSectionPageCard (section) {
        return $(`//div[contains(@class, 'card-body')]//h5[text()='${section}']`);
    }

    async navigate (section) {
        await this.getSectionPageCard(section).click();
    }
}

module.exports = new MainPage();
