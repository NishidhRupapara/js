<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Ultimate Exam Guide</title>
    <style>
        /* 🎨 DARK THEME STYLING 
           Based on GitHub Dark Mode & VS Code Aesthetics
        */
        :root {
            --bg-color: #0d1117;
            --text-color: #c9d1d9;
            --heading-color: #58a6ff;
            --border-color: #30363d;
            --code-bg: #161b22;
            --accent-color: #238636;
            --table-header-bg: #21262d;
            --table-row-even: #161b22;
            --keyword: #ff7b72;  /* Red/Pink for let, var, const */
            --string: #a5d6ff;   /* Light Blue for strings */
            --number: #79c0ff;   /* Blue for numbers */
            --comment: #8b949e;  /* Grey for comments */
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 40px;
            background-color: #0d1117;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        /* TYPOGRAPHY */
        h1, h2, h3 {
            color: var(--text-color);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.3em;
            margin-top: 1.5em;
        }

        h1 { font-size: 2.5em; color: var(--heading-color); text-align: center; border-bottom: none; }
        h2 { font-size: 1.8em; margin-top: 50px; }
        h3 { font-size: 1.4em; color: var(--text-color); }
        
        strong { color: #f0f6fc; }
        
        /* CODE BLOCKS */
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            background-color: rgba(110, 118, 129, 0.4);
            padding: 0.2em 0.4em;
            border-radius: 6px;
            font-size: 85%;
        }

        pre {
            background-color: var(--code-bg);
            padding: 16px;
            border-radius: 6px;
            overflow: auto;
            border: 1px solid var(--border-color);
        }

        pre code {
            background-color: transparent;
            padding: 0;
            color: var(--text-color);
            font-size: 100%;
        }

        /* SYNTAX HIGHLIGHTING CLASSES */
        .kw { color: var(--keyword); } /* Keyword */
        .str { color: var(--string); } /* String */
        .num { color: var(--number); } /* Number */
        .com { color: var(--comment); } /* Comment */

        /* TABLES */
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            font-size: 15px;
        }

        th, td {
            border: 1px solid var(--border-color);
            padding: 10px 15px;
            text-align: left;
        }

        th {
            background-color: var(--table-header-bg);
            font-weight: 600;
        }

        tr:nth-child(even) {
            background-color: var(--table-row-even);
        }

        /* ALERTS / NOTES */
        .alert {
            border-left: 4px solid var(--heading-color);
            background-color: rgba(56, 139, 253, 0.1);
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 6px 6px 0;
        }
        
        .bug-alert {
            border-left: 4px solid #d29922;
            background-color: rgba(210, 153, 34, 0.1);
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 6px 6px 0;
        }

        hr {
            border: none;
            border-bottom: 2px solid var(--border-color);
            margin: 50px 0;
        }

        .center { text-align: center; }
        .tag { 
            display: inline-block; 
            background: #1f6feb; 
            color: white; 
            padding: 2px 8px; 
            border-radius: 12px; 
            font-size: 12px; 
            vertical-align: middle;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>

<div class="container">

    <div class="center">
        <span class="tag">EXAM PREP</span>
        <h1>📘 The Ultimate JavaScript Guide</h1>
        <p>A comprehensive summary of Variables, Data Types, and Operators for exam revision.</p>
    </div>

    <hr>

    <h2>📌 1. Variables & Scoping</h2>
    <p>In JavaScript, how you declare a variable determines its <strong>scope</strong> (visibility) and its <strong>hoisting</strong> behavior.</p>

    <h3>🔹 The Three Variable Types</h3>
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>var</th>
                <th>let</th>
                <th>const</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Scope</strong></td>
                <td>Function Scoped (Ignores <code>{}</code> blocks)</td>
                <td>Block Scoped (Respects <code>{}</code>)</td>
                <td>Block Scoped</td>
            </tr>
            <tr>
                <td><strong>Hoisting</strong></td>
                <td>Hoisted & Initialized as <code>undefined</code></td>
                <td>Hoisted but in <strong>TDZ</strong> (Dead Zone)</td>
                <td>Hoisted but in <strong>TDZ</strong></td>
            </tr>
            <tr>
                <td><strong>Re-declaration</strong></td>
                <td>Allowed ✅</td>
                <td>Not Allowed ❌</td>
                <td>Not Allowed ❌</td>
            </tr>
            <tr>
                <td><strong>Re-assignment</strong></td>
                <td>Allowed ✅</td>
                <td>Allowed ✅</td>
                <td>Not Allowed ❌</td>
            </tr>
        </tbody>
    </table>

    <h3>🔹 Hoisting & The "Temporal Dead Zone" (TDZ)</h3>
    <p><strong>Hoisting</strong> is when JS moves declarations to the top before execution.</p>
    
    <div class="alert">
        <strong>What is TDZ?</strong> When using <code>let</code> or <code>const</code>, the variable exists in memory but is uninitialized. Trying to access it causes a ReferenceError.
    </div>

    <h4>🧪 Code Examples</h4>

    <p><strong>Case 1: The TDZ Error (let)</strong></p>
    <pre><code>console.log(nm); <span class="com">// ❌ ReferenceError: Cannot access 'nm' before initialization</span>
<span class="kw">let</span> nm = <span class="str">"name"</span>;</code></pre>

    <p><strong>Case 2: The undefined behavior (var)</strong></p>
    <pre><code>console.log(b); <span class="com">// ✅ Output: undefined (No error)</span>
<span class="kw">var</span> b = <span class="str">"username"</span>;</code></pre>

    <p><strong>Case 3: Block Scope Leakage</strong></p>
    <pre><code><span class="kw">var</span> x = <span class="num">1</span>;
{
    <span class="kw">var</span> x = <span class="num">2</span>; <span class="com">// Overwrites outer 'x' because var ignores blocks!</span>
}
console.log(x); <span class="com">// Output: 2</span></code></pre>

    <hr>

    <h2>📌 2. Data Types & Conversion</h2>

    <h3>🔹 Implicit Type Coercion Rules</h3>
    <p>JavaScript tries to be helpful by converting types automatically. This often leads to exam questions.</p>
    
    <ul>
        <li><strong>+ Operator:</strong> Prefers Strings (Concatenation).</li>
        <li><strong>-, *, / Operators:</strong> Force Math (Numeric conversion).</li>
    </ul>

    <table>
        <thead>
            <tr>
                <th>Expression</th>
                <th>Logic</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>"10" + 20</code></td>
                <td>String detected → Concatenate</td>
                <td><code>"1020"</code></td>
            </tr>
            <tr>
                <td><code>"10" - 5</code></td>
                <td>Minus sign → Force Math</td>
                <td><code>5</code></td>
            </tr>
            <tr>
                <td><code>true + 1</code></td>
                <td><code>true</code> becomes <code>1</code></td>
                <td><code>2</code></td>
            </tr>
            <tr>
                <td><code>null + 5</code></td>
                <td><code>null</code> becomes <code>0</code></td>
                <td><code>5</code></td>
            </tr>
            <tr>
                <td><code>undefined + 5</code></td>
                <td><code>undefined</code> is not a number</td>
                <td><code>NaN</code></td>
            </tr>
        </tbody>
    </table>

    <h3>🔹 Null vs Undefined</h3>
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>undefined</th>
                <th>null</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Meaning</strong></td>
                <td>Variable declared but not set</td>
                <td>Intentionally empty value</td>
            </tr>
            <tr>
                <td><strong>Type</strong></td>
                <td><code>"undefined"</code></td>
                <td><code>"object"</code> (This is a JS bug)</td>
            </tr>
            <tr>
                <td><strong>Math</strong></td>
                <td>Becomes <code>NaN</code></td>
                <td>Becomes <code>0</code></td>
            </tr>
        </tbody>
    </table>

    <div class="bug-alert">
        <strong>⚠️ Exam Tip:</strong> <code>typeof null</code> returns <code>"object"</code>. This is a famous bug in JavaScript. Memorize this!
    </div>

    <hr>

    <h2>📌 3. JavaScript Operators</h2>

    <h3>🔹 Comparison Operators</h3>
    <p>Always know the difference between loose and strict equality.</p>
    <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>==</code></td>
                <td>Loose Equality (Checks Value)</td>
                <td><code>5 == "5"</code></td>
                <td>✅ <code>true</code></td>
            </tr>
            <tr>
                <td><code>===</code></td>
                <td>Strict Equality (Checks Value + Type)</td>
                <td><code>5 === "5"</code></td>
                <td>❌ <code>false</code></td>
            </tr>
            <tr>
                <td><code>!=</code></td>
                <td>Loose Not Equal</td>
                <td><code>5 != "5"</code></td>
                <td>❌ <code>false</code></td>
            </tr>
            <tr>
                <td><code>!==</code></td>
                <td>Strict Not Equal</td>
                <td><code>5 !== "5"</code></td>
                <td>✅ <code>true</code></td>
            </tr>
        </tbody>
    </table>

    <h3>🔹 Logical Operators</h3>
    <ul>
        <li><code>&&</code> (AND): Returns true only if <strong>both</strong> are true. Stops early if first is false.</li>
        <li><code>||</code> (OR): Returns true if <strong>one</strong> is true. Stops early if first is true.</li>
        <li><code>!</code> (NOT): Flips the boolean value.</li>
    </ul>

    <h3>🔹 The Ternary Operator</h3>
    <p>A shortcut for <code>if-else</code> statements.</p>
    <pre><code><span class="com">// Syntax: condition ? trueValue : falseValue</span>
<span class="kw">let</span> age = <span class="num">20</span>;
<span class="kw">let</span> type = (age >= <span class="num">18</span>) ? <span class="str">"Adult"</span> : <span class="str">"Minor"</span>;</code></pre>

    <h3>🔹 Unary Operators</h3>
    <table>
        <thead>
            <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>++</code></td>
                <td>Increment (Add 1)</td>
                <td><code>i++</code></td>
            </tr>
            <tr>
                <td><code>--</code></td>
                <td>Decrement (Subtract 1)</td>
                <td><code>i--</code></td>
            </tr>
            <tr>
                <td><code>+</code></td>
                <td>Unary Plus (String to Number)</td>
                <td><code>+"100"</code> → <code>100</code></td>
            </tr>
        </tbody>
    </table>

    <hr>
    
    <div class="center" style="margin-top: 50px; color: #8b949e; font-size: 0.9em;">
        Prepared for Exam Revision • JavaScript
    </div>

</div>

</body>
</html>