export class NavigatePage {

    //Navigate to Repository > Studies Page
    click_repository = ('[id="Repository"]')
    click_Studies = ('[id="Studies"]')

    //Verify Tech Study Menua Options
    click_tech_study = ('[name="tech_study"]')
    tech_study_option1 = ('[name="tech_study_option_1"]')
    tech_study_option2 = ('[name="tech_study_option_2"]')
    tech_study_option3 = ('[name="tech_study_option_3"]')

    //Edit Medical History Form
    click_medical_history_form = ('[name="med_history_form"]')
    edit_medical_history_form = ('[name=med_history_form_editbtn:]')
    edit_medical_history_form_description = ('[name=med_history_form_description:]')
    save_medical_history_form = ('[name=med_history_form_savebtn]')

    goToStudiesPage() {
        cy
        .get(this.click_repository).click()
        .get(this.click_Studies).click()
        }

    verifyTechStudy() {
        cy
        .get(this.click_tech_study).click()
        .get(this.tech_study_option1).should('be.visible')
        .get(this.tech_study_option2).should('be.visible')  
        .get(this.tech_study_option3).should('be.visible')  
    }

    editMedicalHistoryForm() {
        cy
        .get(this.click_medical_history_form).click()
        .get(this.edit_medical_history_form).click()
        .get(this.edit_medical_history_form_description).fill('Test Medical History Form Automation 001')
        .get(this.save_medical_history_form).click()
    }
}

