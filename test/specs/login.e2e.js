import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import verifyLoginPage from '../pageobjects/verifyLogin.page.js'
import projectPage from '../pageobjects/project.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('Feature : Authentication', () => {
    beforeEach('Open login page', async () => {
        await LoginPage.open()
    })

    // it('[Login] Login with Valid Credentials', async () => {
    //     await LoginPage.login('feedloop.qa@gmail.com','QAFeedloop@123')
    //     await browser.waitUntil( async () => {
        
    //     return await browser.getUrl() === 'https://aixp-dashboard-aks.digitallab.id/verify';
    //       }, {
    //         timeout: 10000,
    //         timeoutMsg: 'URL was not redirected within 5 seconds',
    //       });
          
    //       expect (await verifyLoginPage.welcomeMessage.isDisplayed()).toBeTruthy()
    //       await verifyLoginPage.inputPin('123456')

    //     const pageTitle= await projectPage.titleWorkspace.getText()
    //     expect(pageTitle).toEqual('Welcome back to CXP, QA Feedloop!')        
    // })

    it('Login Show Password', async () => {
        await LoginPage.login('feedloop.qa@gmail.com','QAFeedloop@123')
        await loginPage.showPassword.click()
    })
})
