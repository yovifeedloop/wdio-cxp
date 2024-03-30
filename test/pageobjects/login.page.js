import { $ } from '@wdio/globals'
import Page from './page.js';
import verifyLoginPage from './verifyLogin.page.js';
import projectPage from './project.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    //functions get back element
    get inputUsername () {
        return $('input[data-qa-id="email-field"]');
    }

    get inputPassword () {
        return $('input[data-qa-id="password-field"]');
    }

    get btnSubmit () {
        return $('button[data-qa-id="login-button"]');
    }

    get showPassword () {
        return $('span[data-qa-id="password-suffix"]');
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

    // async showPassword () {
    //     await this.showPassword.click();
    // }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }

    //functions void / step by step
    async loginAdmin (){
        await this.open()
        await this.login('feedloop.qa@gmail.com', 'QAFeedloop@123')
        await verifyLoginPage.inputPin('123456')
        await projectPage.createProject.waitForDisplayed({timeout: 5000})
    }
}

export default new LoginPage();
