<!DOCTYPE html>

JavaScript Variables – All Examples
JavaScript Variable – Examples & Exercises

<h3>Example 1</h3>
<code>console.log(nm);</code><br>
<code>let nm = "name";</code>
<p><b>Answer or Error:</b> <span class="error">ReferenceError</span></p>
<p><b>Why:</b> <br>
    <code>let</code> variables are not accessible before declaration due to the <b>Temporal Dead Zone</b>.
</p>
<h3>Example 2</h3>
<code>console.log(b);</code><br>
<code>var b = "username";</code>
<p><b>Answer or Error:</b> <span class="answer">undefined</span></p>
<p><b>Why:</b> <br>
    <code>var</code> variables are hoisted. Declaration is moved to the top, but value is assigned later.
</p>
<h3>Example 3</h3>
<code>var x = 1;</code><br>
<code>{ var x = 2; }</code><br>
<code>console.log(x);</code>
<p><b>Answer or Error:</b> <span class="answer">2</span></p>
<p><b>Why:</b> <br>
    <code>var</code> is function-scoped, not block-scoped. Both <code>x</code> refer to the same variable.
</p>
<h3>Example 4</h3>
<code>let a = 10;</code><br>
<code>{ let a = 20; console.log("Inside:", a); }</code><br>
<code>console.log("Outside:", a);</code>
<p><b>Answer or Error:</b></p>
<p class="answer">Inside: 20<br>Outside: 10</p>
<p><b>Why:</b> <br>
    <code>let</code> is block-scoped. Inner block creates a new variable.
</p>
<h3>Example 5</h3>
<code>const person = { name: "demo" };</code><br>
<code>person.name = "user"; // ✅</code><br>
<code>person = {}; // ❌</code>
<p><b>Answer or Error:</b></p>
<p class="answer">Property change allowed</p>
<p class="error">Reassignment not allowed</p>
<p><b>Why:</b> <br>
    <code>const</code> prevents reassignment, not object property modification.
</p>
<h3>Quick Summary</h3>
<ul>
    <li><b>var</b> → Function scoped, hoisted</li>
    <li><b>let</b> → Block scoped, no hoisting access</li>
    <li><b>const</b> → Block scoped, no reassignment</li>
</ul>
