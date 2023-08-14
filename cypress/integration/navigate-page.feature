Feature: To test navigating page and user actions of Ryze application

# 2.	Navigate to ‘Repository->Studies’ and perform the following actions:
Scenario: 001_Navigate and Verify Ryze Studies Page
  Given I navigate to Ryze login page
  When I populate userID and password using "valid" details
  And I click the button with text "SIGN IN" on the login page
  Then the webpage text should include "Welcome : testteamtechtest"
  When I navigate to the Repository > Studies page
  Then the webpage text should include "Tech Study"
  When I verify the options on Tech Study menu
  Then the webpage text should include "Tech Study Option1"
  And the webpage text should include "Tech Study Option2"
  And the webpage text should include "Tech Study Option3"
  When I click the link with text "Tech Study View" on the webpage
  Then the webpage text should include "Tech Study View"
  When I click the link with text "Data Acquisition View" on the webpage
  Then the webpage text should include "Data Acquisition View"
  When I click the link with text "Forms" on the webpage
  Then the webpage text should include "Forms"
  
  # 3.	Perform the following user actions:
Scenario: 002_Navigate and Verify Ryze various User Actions
  Given I navigate to Ryze login page
  When I populate userID and password using "valid" details
  And I click the button with text "SIGN IN" on the login page
  Then the webpage text should include "Welcome : testteamtechtest"
  When I navigate to the Repository > Studies page
  And I click the link with text "Tech Study View" on the webpage
  And I click the link with text "Data Acquisition View" on the webpage
  And I click the link with text "Forms" on the webpage
  Then the webpage text should include "Forms"
  When I click the link with text "Medical History" on the webpage
  Then the webpage text should include "Medical History"
  When I edit medical history form to add description
  Then the webpage text should include "Medical History Form successfully updated"
  And I click the link with text "Forms" on the webpage
  Then the webpage text should include "Forms"
  Then the webpage text should include "Test Medical History Form Automation 001"
  When I click the main menu on the current webpage
  And I click the link with text "Log Out" on the login page
  Then the webpage text should include "Welcome to ryze"
  And the webpage url should include "ryze-staging.formedix.com/sign-in"

