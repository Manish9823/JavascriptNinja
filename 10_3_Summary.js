//  Great questions — you're getting into advanced regex territory, and it’s awesome that you’re curious! Let's break it down simply.

// 🔍 What is (?=...) — Lookahead
// This is called a positive lookahead.
// It says: "Make sure this pattern exists after this point, but don’t include it in the match."

// ✅ Example:
// js
// Copy
// Edit
// /(?=\d{3})/
// Means: The next 3 characters must be digits — but don’t consume them.

// ✅ Real example:
// js
// Copy
// Edit
// const str = "abc123";
// console.log(/abc(?=\d+)/.test(str)); // true
// It matches "abc" only if it's followed by digits.

// But it doesn’t include the digits in the match.

// 🔁 There’s more!
// ✅ Positive Lookahead: (?=...)
// Matches if the pattern follows the current position.

// js
// Copy
// Edit
// /hello(?=\sworld)/  // matches "hello" only if followed by " world"
// ❌ Negative Lookahead: (?!...)
// Matches if the pattern does not follow.

// js
// Copy
// Edit
// /hello(?!\sworld)/  // matches "hello" only if NOT followed by " world"
// 🔙 Lookbehind: (?<=...) ✅
// Matches if the pattern precedes the current position.

// js
// Copy
// Edit
// /(?<=\$)\d+/  // matches "100" in "$100"
// ⛔ Negative Lookbehind: (?<!...)
// Matches if the pattern does not precede.

// js
// Copy
// Edit
// /(?<!\$)\d+/  // matches "100" only if NOT preceded by "$"
// 🧠 Think of it like:
// Type	Pattern	Think of it as
// Positive lookahead	X(?=Y)	Match X if followed by Y
// Negative lookahead	X(?!Y)	Match X if not followed by Y
// Positive lookbehind	(?<=Y)X	Match X if preceded by Y
// Negative lookbehind	(?<!Y)X	Match X if not preceded by Y

// ⚠️ Compatibility note:
// Lookaheads ((?=...)) work everywhere.

// Lookbehinds ((?<=...)) are supported in modern JavaScript (ES2018+), but not in older environments or some browsers.







// You’re really close — you're thinking about this in the right direction. Let's clarify everything neatly so it sticks 100%.

// ✅ Let's define the three clearly:
// Feature	Does it match?	Does it capture?	Used for backreference?
// Capturing group (…)	✅ Yes	✅ Yes	✅ Yes (\1, $1, etc.)
// Non-capturing group (?:…)	✅ Yes	❌ No	❌ No
// Lookahead/Lookbehind (?=…), (?<=…)	❌ No (doesn’t consume input)	❌ No	❌ No

// 🔍 Quick Definitions:
// ✅ Capturing Group (…)
// Matches a pattern ✅

// Captures it for backreference ✅

// Example:

// js
// Copy
// Edit
// const match = "abcabc".match(/(abc)\1/);
// // ['abcabc', 'abc']
// ✅ Non-Capturing Group (?:…)
// Matches a pattern ✅

// Does not capture it ❌

// Used for grouping only (structure, alternation, quantifiers)

// Example:

// js
// Copy
// Edit
// const match = "abcabc".match(/(?:abc){2}/);
// // ['abcabc'] — but no captured groups
// ✅ Lookahead / Lookbehind
// Checks for a condition before/after the current position

// Does NOT consume any characters ❌

// Does NOT capture anything ❌

// Used for validating context (e.g., "must be followed by a digit")

// Example:

// js
// Copy
// Edit
// const match = "abc123".match(/abc(?=\d+)/);
// // ['abc'] — only "abc" is matched, not the digits
// 🧠 TL;DR Summary:
// Type	Captures?	Matches Text?	Backreference?	Use Case
// (abc)	✅	✅	✅	Capturing text for reuse
// (?:abc)	❌	✅	❌	Grouping without capturing
// (?=abc)	❌	❌ (zero-width)	❌	Enforce a rule, look ahead
// (?<=abc)	❌	❌ (zero-width)	❌	Enforce rule looking behind