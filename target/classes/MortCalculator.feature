#Author: Bamisho

Feature: BBC mortgage calculator

  Background: 
    Given I am on BBC Homes Homepage
    And I click Property
    And I click Mortgage calculator
    
  @MortgageCal
  Scenario Outline: Users are able to calculate mortgage when valid details are entered
    And Mortgage required I type "<Mortgage_required>" into Mortgage required
    And Repayment period I type "<Repayment_period>" into Repayment period
    And Interest rate I type "<Interest_rate>" into Interest rate
    And I click calculate
    Then I see <Monthly repayment> details
    And I click clear button
    And I close the browser

    Examples: 
      | Mortgage_required | Repayment_period | Interest_rate |
      |            500000 |               30 |            12 |
      |            400000 |               25 |            10 |
      |            300000 |               20 |             8 |
      |            200000 |               15 |             6 |
      |            100000 |               10 |             4 |
   
  @pending
  Scenario Outline: Users sees an error alert when invalid mortgage details are entered
    And Mortgage required I type "<Mortgage_required>" into Mortgage required
    And Repayment period I type "<Repayment_period>" into Repayment period
    And Interest rate I type "<Interest_rate>" into Interest rate
    And I click calculate
    Then I see an error alert message
    And I click OK button to clear the alert
    And I close the browser

    Examples: 
      | Mortgage_required | Repayment_period | Interest_rate |
      |                 5 |                3 |             2 |
      |                 4 |                2 |             0 |
