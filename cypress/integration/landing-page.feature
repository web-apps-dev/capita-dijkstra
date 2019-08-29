
Feature: The Dijkstra Excursion

  I want to open the main App page and be able to select a route.

  Scenario Outline: Open the main App page.
    A default route should be present.

    Given I open the App home page
    Then I see "Capita Dijkstra" in the title
    And Graph comp shows <start> and <dest>
    And Selection comp shows <start> and <dest>
    And Results comp shows <distance> and <route>

    Examples:
      | start | dest | distance | route   |
      | B     | H    | 10       | B-D-G-H |

  Scenario Outline: Update the route start
    Given I open the App home page
    When I single click <start> node
    Then Graph comp shows <start> and <dest>
    And Selection comp shows <start> and <dest>
    And Results comp shows <distance> and <route>

    Examples:
      | start | dest | distance | route     |
      | A     | H    | 9        | A-C-D-G-H |
      | F     | H    | 7        | F-G-H     |
      | G     | H    | 4        | G-H       |

  Scenario Outline: Update the route destination
    Given I open the App home page
    When I double click <dest> node
    Then Graph comp shows <start> and <dest>
    And Selection comp shows <start> and <dest>
    And Results comp shows <distance> and <route>

    Examples:
      | start | dest | distance | route |
      | B     | G    | 6        | B-D-G |
      | B     | F    | 5        | B-D-F |
      | B     | A    | Infinity | A     |

  Scenario Outline: Update the whole route
    Given I open the App home page
    When I single click <start> node
    And I double click <dest> node
    Then Graph comp shows <start> and <dest>
    And Selection comp shows <start> and <dest>
    And Results comp shows <distance> and <route>

    Examples:
      | start | dest | distance | route   |
      | A     | C    | 2        | A-C     |
      | C     | G    | 3        | C-D-G   |
      | A     | F    | 4        | A-C-D-F |
      | A     | E    | Infinity | E       |
