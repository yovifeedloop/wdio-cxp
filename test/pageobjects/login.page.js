import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[data-qa-id="email-field"]');
    }

    get inputPassword () {
        return $('input[data-qa-id="password-field"]');
    }

    get btnSubmit () {
        return $('button[data-qa-id="login-button"]');
    }

    // get pin () {
    //     return $('input[data-qa-id="input-pin"]');
    // }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // async inputPin (pin) {
    //     await this.pin.setValue(pin);
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
