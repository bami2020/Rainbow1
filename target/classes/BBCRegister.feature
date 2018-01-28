#Author: Bamisho
Feature: BBC Registration

@Register
  Scenario Outline: New users are able to create new account
    Given I am on the BBC Homepage
    And I click Signin
    And I click register now
    And I type day "<day>" in the day field
    And I type month "<month>" in the month field
    And I typr year "<year>" in the year field
    And I click Next
    And I type email "<Email>" address in the email field
    And I type password "<Password>" in the password field
    And I type Hometown"<Hometown>" in the hometown field
    And I type select "<Gender>"
    And I click the NO button, I dont want email updates
    And I click Register button
    And I close the browser

    Examples: 
      | day | month | year | Email         | Password | Hometown | Gender |
      |  01 |    05 | 2001 | dan@gmail.com | today1   | London   | male   |
      |  05 |    01 | 2002 | yem@aol.com   | yeswecan | Leeds    | female |
