<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Variables & Datatypes</title>
</head>
<body>

<h2>JavaScript Variable – Examples</h2>

<h3>Example 1</h3>
<code>console.log(nm);</code><br>
<code>let nm = "name";</code>
<p><b>Answer / Error:</b> ReferenceError</p>
<p><b>Why:</b> let variable cannot be used before declaration.</p>

<h3>Example 2</h3>
<code>console.log(b);</code><br>
<code>var b = "username";</code>
<p><b>Answer:</b> undefined</p>
<p><b>Why:</b> var is hoisted, value assigned later.</p>

<h3>Example 3</h3>
<code>var x = 1;</code><br>
<code>{ var x = 2; }</code><br>
<code>console.log(x);</code>
<p><b>Answer:</b> 2</p>
<p><b>Why:</b> var is function scoped, not block scoped.</p>

<h3>Example 4</h3>
<code>let a = 10;</code><br>
<code>{ let a = 20; }</code><br>
<code>console.log(a);</code>
<p><b>Answer:</b> 10</p>
<p><b>Why:</b> let is block scoped.</p>

<h3>Example 5</h3>
<code>const person = { name: "demo" };</code><br>
<code>person.name = "user";</code>
<p><b>Answer:</b> Allowed</p>
<p><b>Why:</b> const allows object property change.</p>

<hr>

<h2>JavaScript Datatypes – Examples</h2>

<h3>Example 1</h3>
<code>true + false</code>
<p><b>Answer:</b> 1</p>
<p><b>Why:</b> true = 1, false = 0</p>

<h3>Example 2</h3>
<code>null + 1</code>
<p><b>Answer:</b> 1</p>
<p><b>Why:</b> null is converted to 0</p>

<h3>Example 3</h3>
<code>"12" + 12</code>
<p><b>Answer:</b> "1212"</p>
<p><b>Why:</b> + joins strings</p>

<h3>Example 4</h3>
<code>!!undefined</code>
<p><b>Answer:</b> false</p>
<p><b>Why:</b> undefined is falsy</p>

<h3>Example 5</h3>
<code>"12" - 1</code>
<p><b>Answer:</b> 11</p>
<p><b>Why:</b> string converted to number</p>

<h3>typeof NaN</h3>
<p><b>Answer:</b> number</p>
<p><b>Why:</b> NaN comes from a number operation</p>

<h3>Undefined vs Null</h3>
<code>let x;</code><br>
<p>Output: undefined</p>

<code>let y = null;</code><br>
<p>Output: null</p>

<p><b>undefined:</b> value not assigned</p>
<p><b>null:</b> empty value given by programmer</p>

</body>
</html>
