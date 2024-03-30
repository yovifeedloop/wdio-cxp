import Page from "./page.js";

class ProjectsPage extends Page {

    get titleWorkspace() {
        return $('h3[data-qa-id="text--welcome"]')
    }

    // get listProject() {
    //     return $('//div[@data-qa-id="item--project"]//div/strong[text()="QA Test"]')
    // }
    get createProject() {
        return $('div[data-qa-id="item--create"]')
    }

    get inputProjectName() {
        return $('input[data-qa-id="input--project-name"]')
    }

    get checkInputProjectName() {
        return $('input[data-qa-id="checkbox--accept"]')
    }

    get btnContinue() {
        return $('button[data-qa-id="button--continue"]')
    }

    get checkIndustryRetail() {
        return $('//button[@data-qa-id="button--industry" and descendant::span[contains(text(), "Retail")]]')
    }

    get checkIndustryFinance() {
        return $('//button[@data-qa-id="button--industry" and descendant::span[contains(text(), "Finance")]]')
    }

    get checkIndustryEcommers() {
        return $('//button[@data-qa-id="button--industry" and descendant::span[contains(text(), "E-commerce")]]')
    }

    get checkIndustryTelecommunication() {
        return $('//button[@data-qa-id="button--industry" and descendant::span[contains(text(), "Telecommunication")]]')
    }
    async createProjectName(projectName) {
        await this.createProject.click()
        await this.inputProjectName.setValue(projectName)
        await this.checkInputProjectName.click()
        await this.btnContinue.click()
        await this.checkIndustryRetail.click()
        await this.checkIndustryFinance.click()
        await this.checkIndustryEcommers.click()
        await this.checkIndustryTelecommunication.click()
        await this.btnContinue.click()
    }
}

export default new ProjectsPage()