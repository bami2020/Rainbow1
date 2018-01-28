$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BBCRegister.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Bamisho"
    }
  ],
  "line": 2,
  "name": "BBC Registration",
  "description": "",
  "id": "bbc-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "New users are able to create new account",
  "description": "",
  "id": "bbc-registration;new-users-are-able-to-create-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type day \"\u003cday\u003e\" in the day field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"\u003cmonth\u003e\" in the month field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I typr year \"\u003cyear\u003e\" in the year field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Next",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type email \"\u003cEmail\u003e\" address in the email field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type Hometown\"\u003cHometown\u003e\" in the hometown field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type select \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the NO button, I dont want email updates",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "bbc-registration;new-users-are-able-to-create-new-account;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year",
        "Email",
        "Password",
        "Hometown",
        "Gender"
      ],
      "line": 22,
      "id": "bbc-registration;new-users-are-able-to-create-new-account;;1"
    },
    {
      "cells": [
        "01",
        "05",
        "2001",
        "dan@gmail.com",
        "today1",
        "London",
        "male"
      ],
      "line": 23,
      "id": "bbc-registration;new-users-are-able-to-create-new-account;;2"
    },
    {
      "cells": [
        "05",
        "01",
        "2002",
        "yem@aol.com",
        "yeswecan",
        "Leeds",
        "female"
      ],
      "line": 24,
      "id": "bbc-registration;new-users-are-able-to-create-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "New users are able to create new account",
  "description": "",
  "id": "bbc-registration;new-users-are-able-to-create-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type day \"01\" in the day field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"05\" in the month field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I typr year \"2001\" in the year field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Next",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type email \"dan@gmail.com\" address in the email field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"today1\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type Hometown\"London\" in the hometown field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type select \"male\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the NO button, I dont want email updates",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BBChomePageTest.i_am_on_the_BBC_Homepage()"
});
formatter.result({
  "duration": 18464276873,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Signin()"
});
formatter.result({
  "duration": 1956195112,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_register_now()"
});
formatter.result({
  "duration": 514548500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 12
    }
  ],
  "location": "BBChomePageTest.i_type_day_in_the_day_field(String)"
});
formatter.result({
  "duration": 852759307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 14
    }
  ],
  "location": "BBChomePageTest.i_type_month_in_the_month_field(String)"
});
formatter.result({
  "duration": 201212687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001",
      "offset": 13
    }
  ],
  "location": "BBChomePageTest.i_typr_year_in_the_year_field(String)"
});
formatter.result({
  "duration": 200734519,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Next()"
});
formatter.result({
  "duration": 1683943098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dan@gmail.com",
      "offset": 14
    }
  ],
  "location": "BBChomePageTest.i_type_email_address_in_the_email_field(String)"
});
formatter.result({
  "duration": 399115027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "today1",
      "offset": 17
    }
  ],
  "location": "BBChomePageTest.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 266635956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 16
    }
  ],
  "location": "BBChomePageTest.i_type_Hometown_in_the_hometown_field(String)"
});
formatter.result({
  "duration": 254633459,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BBChomePageTest.i_click_the_NO_button_I_dont_want_email_updates()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "New users are able to create new account",
  "description": "",
  "id": "bbc-registration;new-users-are-able-to-create-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Signin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type day \"05\" in the day field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I type month \"01\" in the month field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I typr year \"2002\" in the year field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Next",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I type email \"yem@aol.com\" address in the email field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I type password \"yeswecan\" in the password field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I type Hometown\"Leeds\" in the hometown field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I type select \"female\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the NO button, I dont want email updates",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "BBChomePageTest.i_am_on_the_BBC_Homepage()"
});
formatter.result({
  "duration": 18366466183,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Signin()"
});
formatter.result({
  "duration": 2278867877,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_register_now()"
});
formatter.result({
  "duration": 287173026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 12
    }
  ],
  "location": "BBChomePageTest.i_type_day_in_the_day_field(String)"
});
formatter.result({
  "duration": 196982833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 14
    }
  ],
  "location": "BBChomePageTest.i_type_month_in_the_month_field(String)"
});
formatter.result({
  "duration": 169415730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2002",
      "offset": 13
    }
  ],
  "location": "BBChomePageTest.i_typr_year_in_the_year_field(String)"
});
formatter.result({
  "duration": 192016408,
  "status": "passed"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Next()"
});
formatter.result({
  "duration": 1174436493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yem@aol.com",
      "offset": 14
    }
  ],
  "location": "BBChomePageTest.i_type_email_address_in_the_email_field(String)"
});
formatter.result({
  "duration": 478280793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yeswecan",
      "offset": 17
    }
  ],
  "location": "BBChomePageTest.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 350552610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 16
    }
  ],
  "location": "BBChomePageTest.i_type_Hometown_in_the_hometown_field(String)"
});
formatter.result({
  "duration": 349639744,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "BBChomePageTest.i_click_the_NO_button_I_dont_want_email_updates()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BBChomePageTest.i_click_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("MortCalculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Bamisho"
    }
  ],
  "line": 3,
  "name": "BBC mortgage calculator",
  "description": "",
  "id": "bbc-mortgage-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"\u003cMortgage_required\u003e\" into Mortgage required",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"\u003cRepayment_period\u003e\" into Repayment period",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"\u003cInterest_rate\u003e\" into Interest rate",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;",
  "rows": [
    {
      "cells": [
        "Mortgage_required",
        "Repayment_period",
        "Interest_rate"
      ],
      "line": 21,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;1"
    },
    {
      "cells": [
        "500000",
        "30",
        "12"
      ],
      "line": 22,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;2"
    },
    {
      "cells": [
        "400000",
        "25",
        "10"
      ],
      "line": 23,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;3"
    },
    {
      "cells": [
        "300000",
        "20",
        "8"
      ],
      "line": 24,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;4"
    },
    {
      "cells": [
        "200000",
        "15",
        "6"
      ],
      "line": 25,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;5"
    },
    {
      "cells": [
        "100000",
        "10",
        "4"
      ],
      "line": 26,
      "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on BBC Homes Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Property",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Mortgage calculator",
  "keyword": "And "
});
formatter.match({
  "location": "MortgageCalculatorTest.i_am_on_BBC_Homes_Homepage()"
});
formatter.result({
  "duration": 16836167726,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Property()"
});
formatter.result({
  "duration": 1261365242,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Mortgage_calculator()"
});
formatter.result({
  "duration": 865086619,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"500000\" into Mortgage required",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"30\" into Repayment period",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"12\" into Interest rate",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 26
    }
  ],
  "location": "MortgageCalculatorTest.mortgage_required_I_type_into_Mortgage_required(String)"
});
formatter.result({
  "duration": 305758180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 25
    }
  ],
  "location": "MortgageCalculatorTest.repayment_period_I_type_into_Repayment_period(String)"
});
formatter.result({
  "duration": 174181107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 22
    }
  ],
  "location": "MortgageCalculatorTest.interest_rate_I_type_into_Interest_rate(String)"
});
formatter.result({
  "duration": 132497788,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_calculate()"
});
formatter.result({
  "duration": 143743185,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on BBC Homes Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Property",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Mortgage calculator",
  "keyword": "And "
});
formatter.match({
  "location": "MortgageCalculatorTest.i_am_on_BBC_Homes_Homepage()"
});
formatter.result({
  "duration": 15688415658,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Property()"
});
formatter.result({
  "duration": 1033186784,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Mortgage_calculator()"
});
formatter.result({
  "duration": 878835154,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"400000\" into Mortgage required",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"25\" into Repayment period",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"10\" into Interest rate",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "400000",
      "offset": 26
    }
  ],
  "location": "MortgageCalculatorTest.mortgage_required_I_type_into_Mortgage_required(String)"
});
formatter.result({
  "duration": 275405990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    }
  ],
  "location": "MortgageCalculatorTest.repayment_period_I_type_into_Repayment_period(String)"
});
formatter.result({
  "duration": 196153888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 22
    }
  ],
  "location": "MortgageCalculatorTest.interest_rate_I_type_into_Interest_rate(String)"
});
formatter.result({
  "duration": 165761851,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_calculate()"
});
formatter.result({
  "duration": 153737619,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on BBC Homes Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Property",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Mortgage calculator",
  "keyword": "And "
});
formatter.match({
  "location": "MortgageCalculatorTest.i_am_on_BBC_Homes_Homepage()"
});
formatter.result({
  "duration": 12020090296,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Property()"
});
formatter.result({
  "duration": 1649947897,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Mortgage_calculator()"
});
formatter.result({
  "duration": 1075668862,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"300000\" into Mortgage required",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"20\" into Repayment period",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"8\" into Interest rate",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "300000",
      "offset": 26
    }
  ],
  "location": "MortgageCalculatorTest.mortgage_required_I_type_into_Mortgage_required(String)"
});
formatter.result({
  "duration": 339206386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "MortgageCalculatorTest.repayment_period_I_type_into_Repayment_period(String)"
});
formatter.result({
  "duration": 201318343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 22
    }
  ],
  "location": "MortgageCalculatorTest.interest_rate_I_type_into_Interest_rate(String)"
});
formatter.result({
  "duration": 179141495,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_calculate()"
});
formatter.result({
  "duration": 215806468,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on BBC Homes Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Property",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Mortgage calculator",
  "keyword": "And "
});
formatter.match({
  "location": "MortgageCalculatorTest.i_am_on_BBC_Homes_Homepage()"
});
formatter.result({
  "duration": 14476831800,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Property()"
});
formatter.result({
  "duration": 1251729434,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Mortgage_calculator()"
});
formatter.result({
  "duration": 1112364021,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"200000\" into Mortgage required",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"15\" into Repayment period",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"6\" into Interest rate",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 26
    }
  ],
  "location": "MortgageCalculatorTest.mortgage_required_I_type_into_Mortgage_required(String)"
});
formatter.result({
  "duration": 382351379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 25
    }
  ],
  "location": "MortgageCalculatorTest.repayment_period_I_type_into_Repayment_period(String)"
});
formatter.result({
  "duration": 340241813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 22
    }
  ],
  "location": "MortgageCalculatorTest.interest_rate_I_type_into_Interest_rate(String)"
});
formatter.result({
  "duration": 194318496,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_calculate()"
});
formatter.result({
  "duration": 220423323,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on BBC Homes Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Property",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Mortgage calculator",
  "keyword": "And "
});
formatter.match({
  "location": "MortgageCalculatorTest.i_am_on_BBC_Homes_Homepage()"
});
formatter.result({
  "duration": 16509855572,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Property()"
});
formatter.result({
  "duration": 1271787732,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_Mortgage_calculator()"
});
formatter.result({
  "duration": 844770521,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Users are able to calculate mortgage when valid details are entered",
  "description": "",
  "id": "bbc-mortgage-calculator;users-are-able-to-calculate-mortgage-when-valid-details-are-entered;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@MortgageCal"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Mortgage required I type \"100000\" into Mortgage required",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Repayment period I type \"10\" into Repayment period",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Interest rate I type \"4\" into Interest rate",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click calculate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see \u003cMonthly repayment\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click clear button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 26
    }
  ],
  "location": "MortgageCalculatorTest.mortgage_required_I_type_into_Mortgage_required(String)"
});
formatter.result({
  "duration": 565651486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    }
  ],
  "location": "MortgageCalculatorTest.repayment_period_I_type_into_Repayment_period(String)"
});
formatter.result({
  "duration": 372220498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "MortgageCalculatorTest.interest_rate_I_type_into_Interest_rate(String)"
});
formatter.result({
  "duration": 185113160,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_click_calculate()"
});
formatter.result({
  "duration": 212461104,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MortgageCalculatorTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});