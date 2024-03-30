import loginPage from "../pageobjects/login.page.js"
import projectPage from "../pageobjects/project.page.js"

describe ('Feature : Project' , () => {
    beforeEach('Login as Project', async () => {
        await loginPage.loginAdmin()
    })

    it ('[Project] Create New Project', async () => {
        await projectPage.createProject.click()
        await projectPage.inputProjectName.setValue('QA Test')
        await projectPage.checkInputProjectName.click()
        await projectPage.btnContinue.click()
        await projectPage.checkIndustryRetail.click()
        await projectPage.checkIndustryFinance.click()
        await projectPage.checkIndustryEcommers.click()
        await projectPage.checkIndustryTelecommunication.click()
        await projectPage.btnContinue.click()

        const project= await browser.$('//*[contains(text(), "QA Test")]').getText()
        await expect(project).toHaveText("QA Test")

    })
})