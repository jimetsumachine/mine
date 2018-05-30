$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "To test my cucumber test is running",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "I test if Google search is working",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running;i-test-if-google-search-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"Cheese\" in search box",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I press enter",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get results page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.i_navigate_to_google_home_page()"
});
formatter.result({
  "duration": 6307017787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese",
      "offset": 9
    }
  ],
  "location": "stepDefinition.i_enter_in_search_box(String)"
});
formatter.result({
  "duration": 194597618,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_press_enter()"
});
formatter.result({
  "duration": 1494843268,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.i_get_results_page()"
});
formatter.result({
  "duration": 15045507,
  "status": "passed"
});
});