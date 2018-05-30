@smoketest
Feature: To test my cucumber test is running
Scenario: I test if Google search is working
	Given I navigate to Google home page
	And I enter "Cheese" in search box
	When I press enter
	Then I get results page
