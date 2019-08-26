
Feature: The Dijkstra Excursion

  I want to open the main App page.

  Scenario: Opening the main App page.
    Given Dummy
    When I open the App home page
    Then I see "Capita Dijkstra" in the title
