import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class verifyLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pin () {
        return $('input[data-qa-id="input-pin"]');
    }

    get welcomeMessage () {
        return $('h5=Verify your account');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async inputPin (pin) {
        await this.pin.setValue(pin);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('verify');
    }
}

export default new verifyLoginPage();
