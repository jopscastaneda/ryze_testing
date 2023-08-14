Feature: To test Login page of Ryze application

# 1.	Login to the application using the following details: 
Scenario: 001_Verify Ryze application Login page redirection and page content
  Given I navigate to Ryze login page
  Then the webpage text should include "Welcome to ryze"
  And the webpage text should include "Username / email address"
  And the webpage text should include "Password"
  And the button with text "SIGN IN" should be displayed on the login page
  And the webpage url should include "ryze-staging.formedix.com/sign-in"

Scenario: 002_Verify Ryze application Login page login success
  Given I navigate to Ryze login page
  When I populate userID and password using "valid" details
  And I click the button with text "SIGN IN" on the login page
  Then the webpage text should include "Welcome : testteamtechtest"