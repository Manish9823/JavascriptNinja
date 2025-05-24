
// Regular Expression is a Powerful tool for a developer, which wrap many lines of code in short and make code elegant

// Flags (5)
// 1. i (case-insensitive)
// 2. g (global)
// 3. m (multiline)
// 4. y (sticky)
// 5. u (unicode)



// Character Class Operator
// [abc] => match any of then a,b,c
// [^abc] => match any expect a,b,c
// [a-m] => match a to m range


// Starts And Ends
// ^test => will match the test of starting sentence 
// e.g : 'test the test paper for test'.match(/^test/) => select the starting 'test' 
// test$ => will match the ending test of sentence
// e.g : 'test the test paper for test'.match(/test$/) => select the ending 'test' 



// Repeated Occurrences
// ? => optional - e.g : /t?est/ will match 'test' or 'est'
// + => One or Many times - e.g : /t+est/ will match 'test', 'ttest', 'tttttttest' but not 'est'
// * => Zero, One, or Many times - e.g : /t*est/ will match 'est', 'test', 'ttest', 'ttttest'
// {} => 
//     1. Fixed repetition - e.g : /a{4}/ will match only 4's like aaaa, but not a,aaa,aa, aaaaaa
//     2. Range repetition - e.g : /a{4,10}/ will match minimum 4'a and maximum 10'a like aaaa, aaaaa, aaaaaaa, aaaaaaaaa, but not a,aaa,aa, aaaaaaaaaaaaa
//     3. Open Range - e.g : /a{4,}/ will match minimum 4'a like aaaa, aaaaa, aaaaaaa, but not a,aaa,aa



// Grouping
// () => e.g: /(ab)+/ will match ab, abab, ababab, but not aa bb, a, b

// Alternation (OR)
// | => e.g /(ab)+|(cd)+/ will match ab, cd, ababab, cdcdcd, but not ac, db,


// Escape Character
// What if we want to match the character (,),$,^,[,],{,},+,* which are operators in regex
// By using the '\' Character we can match the operator
// e.g : 'what is (a+b) equal to'.match(/\(a\+b\)/) => (a+b)



// Execution
// 1. test => /test/.test('this is string test.') => true | false
// 2. exec => /test/.exec('this is string test.') => [ 'test', index: 15, input: 'this is string test.', groups: undefined ]
// 3. match => 'this is string test.'.match(/test/); => [ 'test', index: 15, input: 'this is string test.', groups: undefined ]
// 4. replace => 'this is string test.'.replace(/test/,'sample'); => this is string sample.



// Predefined Characters
// \t => Horizontal Tab
// \b => Backspace
// \v => Vertical Tab
// \f => Form feed
// \r => carriage return
// \n => newline
// \cA : \cZ => Control Characters
// \u0000 : \uFFFF => Unicode Hexadecimal
// x00 : \xFF => ASCII Hexadecimal
// . => Any character, except for whitespace characters (\s) 
// \d => Any decimal digit; same as [0-9];
// \D => Any character but not decimal digit; same as [^0-9]
// \w => Any alphanumeric character including underscore; same as [A-Za-z0-9_]
// \W => Any character but not alphanumeric and underscore; same as [^A-Za-z0-9_]
// \s => Any whitespace character (space, tab, form feed, and so on)
// \S => any character but not whitespace
// \b => a word boundary
// \B => Not a word boundary (inside a word) : 
//      "Hello world".match(/\bworld\b/);  //  ["world"]
//      "helloworld".match(/\bworld\b/);  //  null, no boundary before "world"