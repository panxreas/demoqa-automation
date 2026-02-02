const { $ } = require('@wdio/globals')
const Page = require('./page');

class ElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get elementPageTitle () {
        return $("//div[text()='Elements']");
    }

}

module.exports = new ElementsPage();