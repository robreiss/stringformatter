# stringformatter
An extensible, garbage collecting JavaScript string formatter that supports objects, currency, date/time, decimals, and more ... goes far beyond sprintf approach.

For documentation see the Wiki: https://github.com/anywhichway/stringformatter/wiki

For questions, bugs, enhancement requests use: https://github.com/anywhichway/stringformatter/issues

npm install stringformatter

also works in a browser

Currently planned sprints are:

[2015 March](https://github.com/anywhichway/stringformatter/issues?q=is%3Aopen+is%3Aissue+milestone%3A%222015+March+Sprint%22) - Complete

[2015 April](https://github.com/anywhichway/stringformatter/issues?q=is%3Aopen+is%3Aissue+milestone%3A%222015+April+Sprint%22)

Feel free to fork and send us pull requests. We would like to make this better for everyone.

[![Codacy Badge](https://www.codacy.com/project/badge/32b908f2ffe14d0b938b8eb36b1ca30e)](https://www.codacy.com/app/app39368497/stringformatter)

The primary factor bringing down the grade for this code is cyclomatic complexity due to a large number of switch and if/else if/else statements that seem to be unavoidable when dealing with the broad range of formatting options this library provides.

# updates (reverse chronological order)

2015-07-26 v0.0.83 Fixed code style, complexity, and orphan issues based on Codacy analysis. Changed this update list to reverse chronlogical order. Added Codacy badge. No functional changes.

2015-04-12 v0.0.82 Fixed issue #11 and #12. This also addressed a number of other potential issues with ambiguous date formatting during final value substitution due to the large variance of characters in month names.

2015-04-07 Updated tests, version not incremented

2015-03-25 v0.0.81 NPM release

2015-03-24 Min files added for .js and test/index.min.html. March sprint complete.

2015-03-17 Added source code comments, updated readme, fixed variable name bug found during documentation (there was a variable named StringFormatter!)

2015-03-24 v0.0.80 Fixed unit tests for Date formatting in Firefox, Chrome, IE. Implemented workaround for IE not supporting name attribute on functions.

2015-03-24 v0.0.79 Fixed issue for formatting function names.

2015-03-19 v0.0.78 Added function formatting. Uncovered issue with Date formatting unit tests in all but Chrome.

2015-03-19 Corrected milestone date references in README, added package.json with version 0.0.77


# license

This software is provided as-is under the [MIT license](http://opensource.org/licenses/MIT).