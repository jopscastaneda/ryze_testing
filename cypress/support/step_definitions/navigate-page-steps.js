import { NavigatePage } from "../../page-objects/navigate-page-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const navigatePage = new NavigatePage()

When('I navigate to the Repository > Studies page', () => {
    navigatePage.goToStudiesPage();
})

When('I verify the options on Tech Study menu' , () => {
    navigatePage.verifyTechStudy();
})

When('I edit medical history form to add description' , () => {
    navigatePage.editMedicalHistoryForm();
})