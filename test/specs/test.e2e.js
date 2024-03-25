import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import verifyLoginPage from '../pageobjects/verifyLogin.page.js'

describe('My Login application', () => {
    beforeEach('Open login page', async () => {
        await LoginPage.open()
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login('feedloop.qa@gmail.com','QAFeedloop@123')
        await browser.waitUntil( async () => {
            
            return await browser.getUrl() === 'https://aixp-dashboard-aks.digitallab.id/verify';
          }, {
            timeout: 10000,
            timeoutMsg: 'URL was not redirected within 5 seconds',
          });
          const welcomeMessage = await $('h5=Verify your account');
          console.log('check', await browser.getUrl())
          expect(await welcomeMessage.isDisplayed()).toBe(true);
          await verifyLoginPage.inputPin('123456')

          await browser.waitUntil( async () => {
            
            return await browser.getUrl() === 'https://aixp-dashboard-aks.digitallab.id/projects';
          }, {
            timeout: 10000,
            timeoutMsg: 'URL was not redirected within 5 seconds',
          });

        const pageTitle= await browser.$('[data-qa-id="text--welcome"]').getText()
        expect(pageTitle).toEqual('Welcome back to CXP, QA Feedloop!')

        
    })
})
