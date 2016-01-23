var StringFormatter = require("../index.js").StringFormatter;
var expect = require("chai").expect;

var format, value, expected, result;
var tests =[
	{
		format:"{number}",
		value:2,
		expected:"2"
	},
	{
		format:"{number: {fixed: 2}}",
		value:2,
		expected:"2.00"
	},
	{
		format:"{number: {precision: 3}}",
		value:2,
		expected:"2.00"
	},
	{
		format:"{number: {as: '%'}}",
		value:2,
		expected:"2%"
	},
	{
		format:"{number: {as: 'h'}}",
		value:255,
		expected:"0xff"
	},
	{
		format:"{number: {as: 'h'}}",
		value:-255,
		expected:"-0xff"
	},
	{
		format:"{number: {as: 'o'}}",
		value:255,
		expected:"0377"
	},
	{
		format:"{number: {as: 'o'}}",
		value:-255,
		expected:"-0377"
	},
	{
		format:"{number: {as: 'b'}}",
		value:255,
		expected:"11111111"
	},
	{
		format:"{number: {as: 'b'}}",
		value:-255,
		expected:"-11111111"
	},
	{
		format:"{number: {ifNaN: 'Not A Number'}}",
		value:NaN,
		expected:"Not A Number"
	},
	{
		format:"{number: {ifInfinity: 'Bigger Than Google!'}}",
		value:Infinity,
		expected:"Bigger Than Google!"
	},
	{
		format:"{number: {currency: '$', fixed:2}}",
		value:255,
		expected:"$255.00"
	},
	{
		format:"{number: {currency: '$', fixed:2}}",
		value:-255,
		expected:"$-255.00"
	},
	{
		format:"{number: {currency: '$', fixed:2, style:(@value < 0 ? 'color:red' : null)}}",
		value:-255,
		expected:"<span style='color:red'>$-255.00</span>"
	},
	{
		format:"{number: {currency: '$', fixed:2, accounting: true, style:(@value < 0 ? 'color:red' : null)}}",
		value:-255,
		expected:"<span style='color:red'>($255.00)</span>"
	},
	{
		format:"{boolean}",
		value:true,
		expected:"true"
	},
	{
		format:"{boolean: {as: 'string'}}",
		value:true,
		expected:"yes"
	},
	{
		format:"{boolean: {as: 'string', style:(@value ? 'color:green' : 'color:red')}}",
		value:true,
		expected:"<span style='color:green'>yes</span>"
	},
	{
		format:"{boolean: {as: 'number'}}",
		value:true,
		expected:"1"
	},
	{
		format:"{boolean}",
		value:2,
		expected:"true"
	},
	{
		format:"{boolean}",
		value:false,
		expected:"false"
	},
	{
		format:"{boolean: {as: 'string', style:(@value ? 'color:green' : 'color:red')}}",
		value:false,
		expected:"<span style='color:red'>no</span>"
	},
	{
		format:"{boolean: {as: 'number'}}",
		value:false,
		expected:"0"
	},
	{
		format:"{boolean}",
		value:null,
		expected:"false"
	},
	{
		format:"{Array}",
		value:['a','b','c'],
		expected:"a,b,c"
	},
	{
		format:"{Array : {delimiter: ';'}}",
		value:['a','b','c'],
		expected:"a;b;c"
	},
	{
		format:"{Array : {container: ['[',']']}}",
		value:['a','b','c'],
		expected:"[a,b,c]"
	},
	{
		format:"{Array : {container: ['[',']'], quote:true}}",
		value:['a','b','c'],
		expected:"['a','b','c']"
	},
	{
		format:"{Array : {include: [0,2]}}",
		value:['a','b','c'],
		expected:"a,c"
	},
	{
		format:"{Array : {exclude: [0,2]}}",
		value:['a','b','c'],
		expected:"b"
	},
	{
		format:"{Array : {matchValue: /c/}}",
		value:['a','b','c'],
		expected:"c"
	},
	{
		format:"{Array}",
		value:[{v1: "one"},2],
		expected:"{\"v1\":\"one\"},2"
	},
	{
		format:"{Object}",
		value:{v1: "one", v2: "two"},
		expected:"{\"v1\":\"one\",\"v2\":\"two\"}"
	},
	{
		format:"{Object: {include: ['v1']}}",
		value:{v1: "one", v2: "two"},
		expected:"{\"v1\":\"one\"}"
	},
	{
		format:"{Object: {exclude: ['v1']}}",
		value:{v1: "one", v2: "two"},
		expected:"{\"v2\":\"two\"}"
	},
	{
		format:"{Object: {matchValue: /one/}}",
		value:{v1: "one", v2: "two"},
		expected:"{\"v1\":\"one\"}"
	},
	{
		format:"{function}",
		value: function aFunction(arg1,arg2) { return arg1 + arg2; },
		expected:(function aFunction(arg1,arg2) { return arg1 + arg2; })+""
	},
	{
		format:"{function : {format: 'h'}}",
		value: function aFunction(arg1,arg2) { return arg1 + arg2; },
		expected:"function aFunction(arg1,arg2)"
	},
	{
		format:"{function : {format: 'a'}}",
		value: function aFunction(arg1,arg2) { return arg1 + arg2; },
		expected:"arg1, arg2"
	},
	{
		format:"{function : {format: 'b'}}",
		value: function aFunction(arg1,arg2) { return arg1 + arg2; },
		expected:"return arg1 + arg2;"
	},
	{
		format:"{function : {format: 'v'}}",
		value: function aFunction() { return "test result"; },
		expected:"test result"
	},
	{
		format:"{function : {format: 'n'}}",
		value: function aFunction() { return "test result"; },
		expected:"aFunction"
	},
	{
		format:"{function : {format: 'N'}}",
		value: function () { return "test result"; },
		expected:"anonymous"
	},
	{
		format:"{function : {format: 'n'}}",
		value: function () { return "test result"; },
		expected:""
	},
	{
		format:"{Date: {format: 'dddd, MMMM Do, YYYY'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"Monday, August 1st, 2005"
	},
	{
		format:"{Date: {format: 'YYYY MM DD hh:mm:ss:SSS A'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"2005 08 01 01:01:01:000 PM"
	},
	{
		format:"{Date: {format: 'U'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"Mon, 01 Aug 2005 17:01:01 UTC"
	},
	{
		format:"{Date: {format: 'G'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"Mon, 01 Aug 2005 17:01:01 GMT"
	},
	{
		format:"{Date: {format: 'I'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"2005-08-01T17:01:01.000Z"
	},
	{
		format:"{Date: {format: 'L'}}",
		value: new Date("Mon, 01 Aug 2005 17:01:01 GMT"),
		expected:"8/1/2005, 1:01:01 PM"
	},
	{ // test fix for Bug #11
		format: "{Date: {format: 'DD-MMM-YYYY hh:mm:ss:SSS A'}}",
		value: new Date('2015-04-12 00:12:23'),
		expected:"12-Apr-2015 12:12:23:000 AM"
	},
	{ // test fix for Bug #12
		format: "{Date: {format: 'DD-MMM-YYYY hh:mm:ss:SS A'}}",
		value: new Date('2015-04-12 00:12:23:020'),
		expected:"12-Apr-2015 12:12:23:02 AM"
	}
];

describe('StringFormatter ', function() {
	var passed = 0, failed = 0;
	tests.forEach(function(test) {
		it(test.format + " ",function() {
			var result = StringFormatter.format(test.format,test.value);
			expect(result).to.equal(test.expected);
		});
	});
});

/*var value = new Date("Mon, 01 Aug 2005 17:01:01 GMT");
result =  StringFormatter.format("{Date: {format: 'dddd, MMMM Do, YYYY'}} is the {Date: {format: 'do'}} day of the week and the {Date: {format: 'DDDo'}} day of the year.<br>",value,value,value);
document.body.innerHTML += result;
value = new Date();
result = StringFormatter.format
result = StringFormatter.format("Your local time/date is {Date: {format: 'L'}}. Your timezone offset is {Date: {format: 'ZZ'}} or {Date: {format: 'Z'}}.<br>",value,value,value);
document.body.innerHTML += result;
result =  StringFormatter.format("Your time/date is {Date: {format: 'T'}} or {Date: {format: 't'}}.<br>",value,value);
document.body.innerHTML += result;
StringFormatter.polyfill();
document.body.innerHTML += "Using a polyfilled String, your time/date is {Date: {format: 'T'}} or {Date: {format: 't'}}.".format(value,value);
document.body.innerHTML += "<br>Passed: " + passed + " Failed: " + failed;*/
