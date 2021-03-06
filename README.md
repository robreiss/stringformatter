# stringformatter

StringFormatter JS is an extensible Javascript string formatting library that goes far beyond sprintf or even the forthcoming ECMA6 standard for string formatting. It has built in functionality for:

1. Strings
2. All numeric types including integers, fixed point, hex, octal, percentages, and financial notation along with special handling for NaN and Infinity.
3. Booleans
4. Arrays and Objects
5. Functions
6. Date/Time formatting similar to the [MomentJS](http://momentjs.com/) library.
7. Applying CSS styles
8. Conditional formatting

For example:

````javascript
format("The time is {Date:{format:'hh:mm'}} and I have {number:{fixed: 2,currency:'$'}}.",
       new Date('2015-03-13T10:01:27.284Z'),
       50.25)
```` 
returns

````
The time is 10:01 and I have $50.25.
````

For speed and memory efficiency StringFormatter "compiles", caches and re-uses format expressions. Expressions that are infrequently used are also garbage collected.

It is easily extensible to provide custom formatters for objects that are instances of specific classes.

Instructions for using the functionality as a helper to the [Ractive](http://www.ractivejs.org/) templating engine are also provided.

For detailed documentation see the Wiki: https://github.com/anywhichway/stringformatter/wiki

For questions, bugs, enhancement requests use: https://github.com/anywhichway/stringformatter/issues

npm install stringformatter

The index.js and package.json files are compatible with https://github.com/anywhichway/node-require so that stringformatter can be served directly to the browser from the node-modules/stringformatter directory when using node Express.

Browser code can also be found in the browser directory at https://github.com/anywhichway/stringformatter.


Feel free to fork and send us pull requests. We would like to make this better for everyone.

[![Codacy Badge](https://api.codacy.com/project/badge/grade/ef215dac1bdd4df8943a26fca043b9c1)](https://www.codacy.com/app/syblackwell/stringformatter)
[![Code Climate](https://codeclimate.com/github/anywhichway/stringformatter/badges/gpa.svg)](https://codeclimate.com/github/anywhichway/stringformatter)
[![Test Coverage](https://codeclimate.com/github/anywhichway/stringformatter/badges/coverage.svg)](https://codeclimate.com/github/anywhichway/stringformatter/coverage)
[![Issue Count](https://codeclimate.com/github/anywhichway/stringformatter/badges/issue_count.svg)](https://codeclimate.com/github/anywhichway/stringformatter)

[![NPM](https://nodei.co/npm/stringformatter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/<stringformatter>/)

The primary factor bringing down the grade for this code is cyclomatic complexity due to a large number of switch and if/else if/else statements that seem to be unavoidable when dealing with the broad range of formatting options this library provides.

# Building & Testing

Building & testing is conducted using Travis, Mocha, Chai, and Istanbul.

# Updates (reverse chronological order)

2016-01-25 v0.1.4 Added official support for Function formatting. Added unit tests. Corrected dates in versions for this file.

2016-01-23 v0.1.3 Added error handling for wrong number and type of arguments. Added unit tests. Improved documentation in Wiki.

2016-01-23 v0.1.2 Resolved apparent Window/Linux unit test discrepancies. Unit tests were time zone dependent. Local dev box was Windows and remote test box was Linux, so it was a red herring.

2016-01-17 v0.1.1 Fixed code style issues identified by codeclimate. Converted to Mocha unit tests. Added browserify packaging. Switched to lowercase file name.

2016-07-26 v0.1.00 Fixed minor code style issue. The code has been in the wild for several months an has over 100 stars, so we have made this the official 1.0 version.

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