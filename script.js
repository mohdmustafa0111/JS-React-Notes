// 🟡 What is JavaScript ?

// JavaScript (JS) is a high-level, interpreted, dynamic, and multi-paradigm programming
// language that is primarily used to make web pages interactive and dynamic.
// It adds the behaviour and functionality to web pages. It is a case sensitive language.

// ⚙️ Key Features:

// ➖ High-level → Easy to understand (abstracted from hardware details).
// ➖ Interpreted → JavaScript code is executed line by line by the browser (JS engine)
// ➖ Dynamic typing → You don’t need to declare variable types.JS figures them out at runtime.
// ➖ Multi-Paradigm → JavaScript supports multiple ways (styles) of programming.
//                     e.g. Procedural, Object-Oriented (OOP), Functional.
// ➖ Event-driven & asynchronous → Handles user interactions, timers, API calls, etc.

// 📜 Background & History:

// 🧑‍💻 Created by: Brendan Eich in 1995 at Netscape.
// ⏱️ Development Time: Only 10 days!
// 🎯 Purpose: To make web pages interactive like responding to clicks, form inputs, etc.
// 🧩 Originally named: Mocha → then LiveScript → finally renamed JavaScript
//                      (for marketing reasons, because Java was popular then).
// 🌍 Standardized by: ECMAScript (ES) through ECMA International in 1997.
//                     Example: ES5 (2009), ES6 (2015), ES2020, ES2023, etc.

// 🧭 Where JavaScript Runs:

// -> In browsers (via JS engines like V8 in Chrome, SpiderMonkey in Firefox).
// -> On servers (via Node.js).
// -> Even in mobile and desktop apps (React Native, Electron).

// 🟡 How does JavaScript execute code ?

// Quick summary 👉 JavaScript code is read as text, turned into a structured representation
// (AST), set up with scopes/hoisting, then executed by the engine (interpreter + JIT).
// In the browser the runtime coordinates async work with the event loop (microtasks vs
// macrotasks). Below are the main steps with short examples.

// Let's break it down in simple steps:

// 1️⃣ Loading → source as text

// -> Browser (or Node) takes your .js file or script text.

// 2️⃣ Lexical analysis (tokenization)

// -> The engine breaks the text into tokens (identifiers, operators, literals).
// -> Detects invalid characters early.

// 3️⃣ Parsing → AST (Abstract Syntax Tree)

// -> Tokens become an AST (structure of the program).
// -> Syntax errors are reported here.

// 4️⃣ Creation / Scope setup (often called “hoisting” phase)

// -> For each execution context (global, function) the engine creates a
//    Lexical Environment:
// -> var declarations: hoisted and initialized to undefined.
// -> function declarations: hoisted as callable functions.
// -> let/const: declared but uninitialized → Temporal Dead Zone (TDZ) until evaluated.
// -> Memory references (names) are bound to environment records.

// 5️⃣ Compilation / Bytecode / JIT preparation

// -> Engine transforms AST into bytecode or intermediate representation.
// -> Modern engines (V8, SpiderMonkey) use JIT compilers to produce optimized
//    machine code at runtime, based on observed types and patterns.

// 🎯 In simple words:

// -> JavaScript doesn’t run your code directly.
// -> It first translates it (AST → Bytecode → Machine Code),
// -> then optimizes it while running — making JS both flexible and fast ⚡.

// 6️⃣ Execution phase (call stack & execution contexts)

// -> The interpreter/JIT runs code:
// -> A call stack holds execution frames (global → function calls).
// -> Statements and expressions are executed synchronously in LIFO order.
// -> Function calls push new frames; returns pop them.

// 👉 1. JavaScript is Single-Threaded

// - Everything in JavaScript happens inside an Execution Context.
// - Javascript is synchronous single-threaded language meaning it execute one command
//   at a time in a specific order (Single Threaded). That means it can only go to the
//   next line once the current line has been finished executing (Synchronous).

// 👉 2. How JavaScript Executes Code (Step-by-Step)

// You can assume this execution context to be a big container in which whole Javascript
// code is executed and it has two components inside it. (Variable Environment of
// Execution Context)

//  1. Memory component ( aka Memory Creation/Allocation Phase)
//  2. Code component ( aka Code Execution Phase)

// ➖ In memory component
// -> The engine parses the code.
// -> It allocates memory for variables and functions (this is where hoisting happens).
// -> Functions are stored in memory, variables are set to undefined.

// ➖ In code component is a place where whole JavaScript code is executed.
//    the engine executes the code line by line.
// -> Values are assigned.
// -> Functions are invoked.
// -> Statements are evaluated.

// 👉 3. CALL STACK

// -> The Call Stack is a data structure that keeps track of function calls.
// -> It’s like a manager that keeps track of “which function is currently running” and
//    “which one to go back to” once it finishes.
// -> It operates on a Last-In-First-Out (LIFO) principle, meaning the last function called
//    is the first one to be removed from the stack.

// ⚙️ The Actual Job of the Call Stack

// -> Keep track of function calls in the order they need to be executed.
// -> When a function is invoked, it is pushed onto the top of the stack.
// -> When a function is finished executing, it is popped off the stack.
// -> The engine runs whatever is on top of the stack.

// Example 1:-

// function first() {
//   console.log("This is the first function.");
//   second();
// }

// function second() {
//   console.log("This is the second function.");
//   third();
// }

// function third() {
//   console.log("This is the third function.");
// }

// first();

// What happens in the call stack: 👇

// 1. The first() function is added to the stack and starts executing.
// - Logs: "This is the first function."
// - Calls second().

// 2. The second() function is added to the stack.
// - Logs: "This is the second function."
// - Calls third().

// 3. The third() function is added to the stack.
// - Logs: "This is the third function."
// - Then it finishes and is removed from the stack.

// 4. Once third() is done, second() is removed.
// 5. Finally, first() is removed, and the stack is empty.

// Example 2:-

// function multiply(x, y) {
//   return x * y;
// }

// function add(x, y) {
//   return x + y;
// }

// function main() {
//   let result = multiply(2, 3);
//   result = add(result, 5);
//   console.log(result);
// }

// main();

// 📌 Explanation of CALL STACK by AKSHAY SAINI

// CALL STACK is a stack where all these global execution context are kept.
// the main job of call stack is to execute whatever comes inside it. That's all it does.
// Whenever we try to execute the javascript code, a call stack is populated and the global
// execution context is pushed inside the CALL STACK. And once the javascript code is
// finished executing then it is pop off from the call stack.
// We can consider Call Stack as a kitchen where all our code executed or cooked. Whenever
// we try to run a piece of code, it goes to call stack first and then executed.
// It works in LIFO style. That is Last In First Out.
// Call Stack maintains the order of execution of execution contexts.

// 7️⃣ Memory heap & garbage collection

// -> Objects and closures are stored in the heap.
// -> Garbage collector (e.g., mark-and-sweep) frees memory that is no longer reachable.

// 8️⃣ Concurrency model — Web APIs, Event Loop, Task Queues (IMPORTANT)

// -> JS is single-threaded for execution, but browsers provide Web APIs (timers,
//    DOM events, fetch) that run outside the call stack.
// -> When those APIs finish they queue callbacks into task queues. The event loop
//    pulls tasks and runs them when the stack is empty.

// Crucial Ordering: 👇

// -> Microtasks (Promise .then, queueMicrotask) run immediately after the current
//    call stack finishes and before the next macrotask.
// -> Macrotasks (also just “tasks”: setTimeout, setInterval, I/O callbacks, UI events)
//    run after microtasks and between rendering frames.

// Example — microtask vs macrotask: 👇

// console.log(`${1}`);

// setTimeout(() => console.log(`${3}`), 0); // macrotask
// Promise.resolve().then(() => console.log(`${2}`)); // microtask

// ✔️ Output order: 1 → 2 → 3.

// Here's how it works:-

// - JavaScript itself doesn't handle async — the browser/web APIs do.
// - Async function like setTimeout is sent to Web API.
// - After delay, callback is moved to Callback Queue.
// - Event Loop checks if the call stack is empty.
// - If yes, it pushes the callback onto the call stack, and it runs.

// 👉 Final Takeaway

// -> JavaScript uses a Call Stack to manage function execution in a synchronous manner.
// -> For asynchronous operations, it relies on Web APIs, Callback Queue, and
//    the Event Loop to handle them without blocking the stack.

// 9️⃣ Optimizations & de-optimizations (runtime tuning)

// -> JIT collects type info and optimizes hot functions.
// -> If assumptions fail, engine may deoptimize and recompile.

// 🔟 Browser rendering & paint interaction

// -> Long JS tasks block rendering (frames).
// -> requestAnimationFrame callbacks run before the browser repaints.
// -> Best practice: keep JS tasks short to avoid jank.

// 🔷 Tiny cheat-sheet (terms)

// -> AST: structured tree of code.
// -> Lexical Environment: scope + variable bindings.
// -> Call stack: where functions run.
// -> Heap: object memory.
// -> Event loop: scheduler for async callbacks.
// -> Microtask queue: promises, queueMicrotask — higher priority.
// -> Macrotask queue: setTimeout, UI events — lower priority.
// -> TDZ: let/const are unusable before initialization.
// -> JIT: runtime compiler that optimizes hot code.

// ⚡ JavaScript Code Execution Flow

//    Source Code (script.js)
//               |
//               v
//      1. Lexical Analysis (tokenization)
//               |
//               v
//      2. Parsing → AST (Abstract Syntax Tree)
//               |
//               v
//      3. Creation Phase (Scopes & Hoisting)
//          - var → hoisted as undefined
//          - function → hoisted with definition
//          - let/const → TDZ (not initialized yet)
//               |
//               v
//      4. Compilation → Bytecode
//          - JIT optimization ready
//               |
//               v
//      5. Execution Phase
//          - Call Stack (sync code runs here)
//          - Memory Heap (objects, closures)
//               |
//               v
//      6. Web APIs (async work: setTimeout, fetch, DOM events)
//               |
//               v
//      7. Task Queues
//          - Microtask Queue (Promises, queueMicrotask) [HIGH priority]
//          - Macrotask Queue (setTimeout, setInterval, I/O) [LOW priority]
//               |
//               v
//      8. Event Loop
//          - Picks microtasks first
//          - Then macrotasks
//          - Coordinates with Rendering
//               |
//               v
//      9. Browser Render / Repaint

// 👉 This diagram shows the pipeline:
// Code→Parsing→Scope Setup →Execution→Async tasks handled by Event Loop→Final Rendering.

// 🟡 HEAP & STACK

// Inside Browser, there is a Javascript engine (we are considering V8 for chrome.),
// an environment to run javascript properly. Javascript engine has two parts,
// Heap and Call Stack. And the engine has some assistant named Web APIs and Callback Queue.

// 🧠 In JavaScript, memory is divided into two main parts:

// -> Heap
// -> Stack

// 🧩 1. Stack (Call Stack)

// A place where JavaScript keeps track of function calls and local variables.

// 📍 How it works:

// -> Stack follows LIFO (Last In, First Out).
// -> Each time you call a function, it’s pushed onto the stack.
// -> When the function finishes, it’s popped off.

// 📍 Stores:

// -> Primitive values (like number, string, boolean, etc.)
// -> Function calls and execution context

// 🗃️ 2. Heap

// A large, unstructured memory area used to store objects and reference types.

// 📍 Stores:

// -> Non-Primitive Values (like Object, Array, Functions (as objects))
// -> Stored in the heap, but their reference (address) is stored in the stack.

// 💡 Tip:

// -> Stack → small & fast
// -> Heap → big & flexible

// 🟡 Garbage Collector

// The Garbage Collector in JavaScript is a built-in automatic memory management system
// that frees up memory by removing data (objects, variables, etc.) that are no longer
// needed or reachable in your program.

// 🧠 How it works (in simple words)

// -> When you create variables or objects → JavaScript allocates memory to store them.
// -> The Garbage Collector keeps checking which values are still reachable or still in use.
// -> If something becomes unreachable (no variable points to it anymore),
// -> It is automatically deleted from memory.

// ⚠️ Note

// -> You don’t manually manage memory in JavaScript (unlike C/C++).
// -> The Garbage Collector handles it for you automatically.

// 🪄 In short:

// Garbage Collector => Memory cleaner that automatically removes unused objects
// from memory to keep your app efficient.

// 🟡 WEB APIs

// - setTimeout
// - DOM API's
// - fetch()
// - local storage
// - console
// - location

// 👆 These are not the part of Javascript.
// So All these are WEB APIs above which the browser have it.
// Browser gives access to javascript engine to use all these web APIs.

// ASYNCHRONOUS JAVASCRIPT 👇

// - setTimeout
// - setInterval
// - callback
// - Promise
// - async await

// 🟡 JAVASCRIPT RUNTIME ENVIRONMENT

// JRE is like a big container which has all the things required to run JavaScript code.

// These things can be :-
// - JS Engine
// - Set of API's to connect to the outer environment
// - Event Loop
// - callback queue
// - Microtask queue
// etc

// Every browser has a Javascript Runtime Environment
// Node JS has also JRE. Node JS is open source Javascript runtime that means it has everything
// which is required to run javascript piece of code. Node JS can run the JS code outside the
// browser by installing it in PC.

// 🟡 How a browser renders a web page?

// Let’s go step by step 👇

// 🌍 1. Loading the Page

// -> You type a URL and hit Enter.
// -> Browser sends a request to the server to fetch HTML.
// -> Server responds with the HTML document.
// -> Browser starts downloading linked resources (CSS, JS, images, fonts, etc.).

// 📝 2. Parsing HTML → DOM

// -> Browser reads the HTML line by line.
// -> Creates a DOM (Document Object Model) tree structure.
// -> Each HTML tag → becomes a node in this tree. Example: <div>, <p>, <img>.
// -> DOM = structure of the page content.

// 🎨 3. Parsing CSS → CSSOM

// -> Browser downloads and parses all CSS files.
// -> Creates a CSSOM (CSS Object Model) tree.
// -> Represents styles like color, font, size, layout, etc.
// -> CSSOM = structure of the styles.

// 🔗 4. Combine DOM + CSSOM → Render Tree

// -> Browser merges DOM + CSSOM.
// -> Forms a Render Tree (only visible elements).
// -> Hidden elements (display: none) are not included.
// -> Elements like opacity: 0 or visibility: hidden are included but just invisible.
// -> Render Tree = what will be painted.

// 📏 5. Layout (Reflow)

// -> Browser calculates the size and position of each element.
// -> Takes into account:
//    - Box model (margin, border, padding, width, height)
//    - Viewport size
//    - Relative units (%, em, rem, etc.)
// -> Layout = "Where does each element go?"

// 🖌️ 6. Painting

// -> Browser fills in pixels:
//    - Colors
//    - Text
//    - Backgrounds
//    - Borders
//    - Shadows
//    - Images
// -> Painting = "What does each element look like?"

// 🖼️ 7. Compositing

// -> Page is divided into layers (like Photoshop).
// -> Browser decides which layers are on top of others.
//    - Browsers create new layers for performance and visual correctness.
//    - Common cases where new layers are created:
//    - Elements with 3D transforms (transform: translateZ(0), rotate, etc.)
//    - Elements with CSS animations or transitions
//    - Elements with position: fixed or position: sticky
//    - Elements with opacity or will-change property
//    - Video, canvas, and iframe elements
// -> GPU may be used to speed up this step.
// -> Compositing = "Combine everything to final image."

// ⚡ Final Step: Display on Screen

// -> Browser sends the final pixels to your screen → 🎉 Webpage appears!

// 🖼️ Visual diagram:👇 browser rendering (step-by-step arrows)

// (1) Type URL / Click link 🖱️
//     ↓
// (2) Browser sends HTTP request  →  Server responds with HTML 📥
//     ↓
//        [ PARSING ]  ←—— "Parsing" = reading text and converting it into a structured tree
//     ↓
// (3) HTML (raw)  ─parse→  DOM (Document Object Model) 🌳
//        ↑
//        │
// (4) CSS files  ─parse→  CSSOM (CSS Object Model) 🎨
//        │
//        └─────────┬─────────┘
//                  ↓
// (5) DOM + CSSOM  →  Render Tree (visible nodes only) 🧩
//                  ↓
// (6) Layout / Reflow — compute sizes & positions (box model, viewport, flow) 📏
//                  ↓
// (7) Paint — fill pixels (text, backgrounds, borders, images) 🖌️
//                  ↓
// (8) Compositing — layers combined (GPU may accelerate) 🖼️
//                  ↓
// (9) Final pixels → Screen 🖥️

// 🔷 Where does JavaScript come into rendering?

// -> When the HTML parser encounters a <script> tag, it pauses HTML parsing.
// -> It fetches (if external) and executes the script immediately.
// -> Because the script can modify the DOM and CSSOM, the browser must wait.
// -> This is why it's recommended to use the async or defer attributes on
//    <script> tags to prevent parser-blocking.

// 🟡 Web App Optimisation Tips

// Optimising a web application means making it faster, smoother, and more efficient
// both for users 👩‍💻 and servers ⚙️.

// Here’s a 👇 breakdown with categories and techniques:

// ⚡ Frontend Optimisations (Client-Side)

// -> Minify & Bundle Assets → Remove unnecessary spaces, comments, etc.
//    in JS, CSS, and HTML.
// -> Code Splitting → Load only the required JS for each page (using tools like
//    Webpack, Vite, Next.js).
// -> Lazy Loading → Load images, videos, or components only when they’re needed.
// -> Use CDN (Content Delivery Network) → Deliver static files (images, CSS, JS)
//    from servers closest to users.
// -> Image Optimisation → Compress, use WebP/AVIF formats, responsive images (srcset).
// -> Caching (Browser & Service Workers) → Store files so repeat visits are faster.
// -> Reduce Repaints & Reflows → Avoid heavy DOM manipulations and inline styles.
// -> Use Efficient CSS → Avoid unused CSS (tree-shaking with PurgeCSS, Tailwind’s JIT).
// -> Preloading & Prefetching → Preload critical assets and prefetch likely next pages.

// 🖥️ Backend Optimisations (Server-Side)

// -> Database Indexing → Speed up queries with proper indexes.
// -> Caching Layer → Use Redis, Memcached for frequently requested data.
// -> Pagination & Infinite Scroll → Don’t fetch all records at once.
// -> Compression (Gzip/Brotli) → Reduce payload size before sending to the client.
// -> Load Balancing & Scaling → Distribute traffic across multiple servers.
// -> Use Efficient Frameworks & APIs → Optimise server logic and remove bottlenecks.
// -> Database Optimisation → Normalisation where needed, avoid N+1 queries.

// 🌐 Network Optimisations

// -> HTTP/2 or HTTP/3 → Faster multiplexed requests.
// -> Reduce Round Trips → Combine requests, use GraphQL or batched APIs.
// -> Keep-Alive Connections → Reuse TCP connections instead of re-opening.
// -> DNS Prefetching → Resolve domains in advance.

// 🔐 Security Optimisations (Performance-related too)

// -> Use HTTPS with HTTP/2 → Secure + faster transfer.
// -> Content Security Policy (CSP) → Reduce unnecessary requests.

// 📊 Performance Monitoring

// -> Tools → Lighthouse, WebPageTest, GTMetrix, Chrome DevTools.
// -> Real User Monitoring (RUM) → Track how real users experience your app.
// -> Error Tracking → Use Sentry, LogRocket for monitoring.

// 🧑‍💻 Developer Best Practices

// -> Avoid memory leaks in JS (clean up event listeners, intervals).
// -> Use debouncing & throttling on scroll, resize, input events.
// -> Apply memoization & React hooks optimisations (React.memo, useMemo, useCallback).
// -> Write clean, modular code → Easier to maintain and optimise later.

// ✅ Shortcut to Remember:

// ➖ F-B-N-S-M → Frontend, Backend, Network, Security, Monitoring
// ➖ (Optimise in all 5 areas)

// 🟡 /**** values and variables in JavaScript ****/

// Variable is a name given to a storage area that our program can manipulate.

// -> VariableKey VariableName = value

// var myName = 'vinod bahadur thapa';
// var myAge = 26;

// console.log(myName);

// Naming Practice
// var _myName = "vinod";
// var 1myName = "thapa";
// var _1my__Name = "bahadur";
// var $myName = "thapa technical";
// var myNaem% = "thapa technical";

// console.log($myName);

// // **********************************************************************

// // **********************************************************************

/****  Data Types in JavaScript ****/

// String
// Number
// Boolean

// var myName = "vinod thapa";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmThapas);

// // typeof operator
// console.log(typeof(iAmThapas));

// DataTypes Practice

// console.log(10 + "20");
// console.log(9 - "5");
// console.log( 9 - "5"); // 1st bug in JavaScript
// "Java" + "Script";
// console.log("Java " + "Script");
// " " + " "
// console.log(" " + 0);
// " " + 0
// console.log("vinod" - "thapa");
// true + true
// true + false
// false + true
// false - true

// console.log("vinod" - "thapa");

// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined?

// Ans: null is a special value meaning "no value" or "useless". null is a object because
// typeof null returns 'object' (which is 2nd bug of javascript). On the other hand, undefined
// means that the variable has not been declared, or has not been given a value.

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof iAmUseless);
// //2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }

// NaN Practice 🤯

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(NaN === NaN);

// Ques: Undefined vs not defined ??
// Ans: It would "not defined" when we did not declare the variable and try to call that variable.
// It would "undefined" when we declared a variable in the code but did not assign the value before
// printing the variable value.

// Undefined is a keyword that is like a placeholder which is placed in the memory.

// var x;
// console.log(x);

// SCOPE EXPLANATIONS 👇 (Global Scope, Function Scope, Block Scope)

// Scope determines the accessibility (visibility) of variables, functions and objects.

// GLOBAL SCOPE

// Variables declared outside of any function or block.
// Global variables can be accessed from anywhere in a JavaScript programs.

// var fruit = "apple";
// console.log(fruit); //apple

// function getFruit() {
//   console.log(fruit); //fruit is accessible here
// }

// getFruit(); //apple

// FUNCTION SCOPE

// - Each function creates a new scope.
// - Variables declared inside a function using var, let, or const are only accessible
// within that function.
// - Variables defined inside a function are not accessible (visible) from outside the function.

// function foo() {
//   var fruit = "apple";
//   console.log("inside function: ", fruit);
// }

// foo();                      //inside function: apple
// console.log(fruit);         //error: fruit is not defined

// BLOCK SCOPE

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.

// function foo() {
//   if (true) {
//     var fruit1 = "apple"; //exist in function scope
//     let fruit2 = "banana"; //exist in block scope
//     const fruit3 = "strawberry"; //exist in block scope
//   }
//     console.log(fruit1);
//     console.log(fruit2);
//     console.log(fruit3);
// }
// foo();

// Another Example 👇

// function x() {
//   const d = 50;
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(d);  // I can access the d from here (IMPORTANT TO UNDERSTAND❗)
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// x();

// Another Important Example 👇

// if (true) {
//   const username = "hitesh";
//   if (username === "hitesh") {
//     const website = " youtube";
//     console.log(username + website);
//   }
//   console.log(website);
// }
// console.log(username);

// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫

// VAR VS LET VS CONST

// A variable is like a container that stores a value.

// We use variables to:-

// - Store data: like numbers, text, or anything else.
// - Reuse data: instead of repeating values everywhere.
// - Change values during the program.
// - Make code readable and easier to manage.

// var declarations are globally scoped or function scoped.
// while let and const are block scoped.

// IMPORTANT POINTS 👇
// - var variables can be updated and re-declared within its scope.
// - let variables can be updated but not re-declared.
// - const variables can neither be updated nor re-declared.

// {
//   var a = 10;
//   var a = 50;
// }
// console.log(a);

// They are all hoisted to the top of their scope. But while var variables are initialized
// with undefined, let and const variables are not initialized.

// 🟡 What is Temporal Dead Zone ?

// The Temporal Dead Zone (TDZ) is the time between when a variable is declared and
// when it is initialized, during which the variable cannot be accessed.

// 📅 In simple words:

// If you try to use a variable before it’s initialized, JavaScript throws a ReferenceError,
// even though it’s declared using let or const.

// 🔍 Example:

// console.log(a); // ❌ ReferenceError
// let a = 10;

// 🔹 Here’s what happens:

// -> The variable a is declared when the code starts running (🔸hoisted).
// -> But it’s not initialized yet — it’s in the Temporal Dead Zone.
// -> You try to access it before it’s initialized → 💥 Error!

// ✅ After Initialization:

// let a = 10;
// console.log(a); // ✅ 10

// 👉 Now a is initialized, so you can safely use it.

// 🕒 Why “Temporal”?

// -> Because the “dead zone” exists for a temporary time —
// -> from the start of the block to the line where the variable gets initialized.

// 📍 TDZ applies to:

// -> let
// -> const
// -> Not to var (because var is initialized as undefined during hoisting)

// 🧩 Quick Visual:

// |----------- TDZ -----------|  initialized
// let x;  ❌ cannot use yet      ✅ can use now

// Que: SyntaxError VS ReferenceError VS TypeError ??

// Ans: Syntax Error: If you are messed with javascript syntax.
// Or If I do not initialize const variable.
// const a;
// Or if I redeclare a let variable.
// let a = 10;
// let a = 100;

// Reference Error: If you are trying to access a variable before declaring it.
// console.log(a);
// let a = 10;
// Or If I try to access variable that I have not declared in program.
// console.log(y);

// Type Error: If you are trying to reassign a value to a constant variable.
// const a = 10;
// a = 100;

/**** Section 5👉 Arithmetic operators in JavaScript ****/

// console.log(5+20);

// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=)

// var x = 5;
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);

// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("(Remainder) Modulus Operator " + 27%4);

// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++),
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// Postfix increment operator means the expression is evaluated
// first using the original value of the variable and then the
// variable is incremented(increased).

// If used prefix, with operator before operand (for example, ++x),
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);

// Prefix increment operator means the variable is incremented first and then
// the expression is evaluated using the new value of the variable.

// 3️⃣Comparison operators
// A comparison operator compares its operands and
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.

// console.log(a > b || b > -50 || b < 0);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);

// // **********************************************************************

// // **********************************************************************

// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand strings.

// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");

// 😳 4 Challenge Time
// What will be the output of 3**3?
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10

// sol 2:  ✔
// console.log(5 + "thapa");

// sol 3: ✔

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5;
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?

// sol
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );

// ************************************************************

/**** Section 6👉 Control Statement -
 *
 * 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed.

// if raining = raincoat
// else no raincoat

// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }

// 🤩Challenge Time
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }

// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }

// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 12;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// 3️⃣ switch Statement
// Evaluates an expression, matching the expression's value to a
// case clause, and executes statements associated with that case.

// 1st without break statment
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle':
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }

// 🤗break
// Terminates the current loop, switch, or label
// statement and transfers
// program control to the statement following the terminated statement.

// 🤗continue
// Terminates execution of the statements in the current iteration of the
// current or labeled loop, and continues execution of the loop with the
// next iteration.

// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true.

// var num=20;
// // block scope
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// 5️⃣ Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// 6️⃣ For Loop

// for (initializer; condition; iteration) {
//          code to be execited
//      };

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

// 😀6: challenge Time 🏁
// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80

// for(var num = 1; num<= 10; num++){
//     var tableOf = 12;
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// for (var num=1; num<=10; num++) {
//   var tableof = 15;
//   console.log(tableof + " * " + num + " = " + tableof*num);
// }

// ************************************************************

// Functions

// A JavaScript function is a block of code designed to perform a particular task.

//  1️⃣Function Definition

// Before we use a function, we need to define it.

// A function definition (also called a function declaration, or function statement)
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();

// Function Parameter vs Function Arguments
// The values which are written at the time of the definition of the function are Parameters.
// An argument is a value passed to a function when the function is called.

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)

// // **********************************************************************

// // **********************************************************************

// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫

// What are Functions in JavaScript ?

// A function is a block of reusable code that perform a specific task which can be called
// or invoked anywhere in your program. This eliminates the need of writing the same code
// again and again.

// DRY => do not repeat yourself

// Function Statement OR (aka) Function Declaration

// Declares the name, parameters, and code that form the body of a function procedure
// is called a function statement.

// A function statement loads before any code is executed. This behavior of
// function statements is called hoisting, which allows a function to be used before it is defined.

// function x() {
//   set of statements
// }

// Function expressions
// "Function expressions simply means
// create a function and put it into the variable"

// AND

// A function expression associates a value with a variable,
// just like any other assignment statement. function expressions
// load only when the interpreter reaches the definition of the function.

// var funExp = function (a, b) {
//   return (total = a + b);
// };

// var sum = funExp(15, 15);
// console.log(sum);

// Que: Difference between Function Statement & Expressions ?

// Ans:The function in function declaration can be accessed before and after the function definition.
// This behavior of function statements is called hoisting, which allows a function
// to be used before it is defined.

// Function expressions load and execute only when the program interpreter reaches the line of code.

// Example 👇

// a();
// b();

// function a() {
//   console.log("function a is called");
// }

// var b = function () {
//   console.log("function b is called");
// };

// Return Keyword

// When JavaScript reaches a return statement,
// the function will stop executing.
// return ends the function and sends a value back to the caller.

// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );

// Anonymous Function

// Anonymous Function is a function that does not have any name associated with it.
// Normally we use the function keyword before the function name to define a function
// in JavaScript, however, in anonymous functions in JavaScript, we use only the
// function keyword without the function name.

// OR

// An anonymous function is not accessible after its initial creation, it can only be
// accessed by a variable it is stored in as a function as a value. An anonymous function
// can also have multiple arguments, but only one expression.

// var funExp = function (a, b) {
//     return total = a + b;
// }

// var sum = funExp(15, 15);
// var sum1 = funExp(20, 15);

// console.log(sum);

// FIRST CLASS FUNCTION

// The ability of function to be used as values, assigned to a variable and can be passed as
// an argument to other function and can be returned from the function ,
// this ability altogether is known as FCF.

// OR

// A programming language is said to have First-class functions when functions
// in that language are treated like any other variable. For example, in such a language,
// a function can be passed as an argument to other functions, can be returned by
// another function and can be assigned as a value to a variable.

// Example 👇

// const foo = function () {
//   console.log("foobar");
// };
// foo();

//  👆 We assigned an Anonymous Function in a Variable, then we used that variable to invoke
//  the function by adding parentheses () at the end.

// Another Example 👇

// function sayHello() {
//   return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript !!");

// 👆 We are passing our sayHello() function as an argument to the greeting() function,
// this explains how we are treating the function as a value.

// First Class Citizens and First Class Function both are the same thing.

// Template literals (Template strings)

// Template literals are a way to create strings in JavaScript using backticks (`),
// instead of quotes (' or "), allowing you to easily insert variables and expressions
// using ${...}, and write multi-line strings.

// output :  8 * 1 = 8
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80

// for (let num = 1; num <= 10; num++) {
//   let tableOf = 12;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
//   console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));

// 🟡 DESTRUCTURING

// -> Destructuring in JavaScript means extracting values from arrays or objects and
//    storing them into variables in a more concise and readable manner.
// -> Instead of writing long code, destructuring helps us pick out the pieces we need.

// 🔷 Array Destructuring

// ➖ Example 1:

// const numbers = [10, 20, 30];

// // Without destructuring
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// // With destructuring
// const [x, y, z] = numbers;

// console.log(x);
// console.log(y);
// console.log(z);

// ➖ Example 2:

// -> You can also skip values: 👇

// const [first, , third] = [1, 2, 3];
// console.log(first); // 1
// console.log(third); // 3

// ➖ Example 3:

// const [p, q = 50] = [10];
// console.log(p); // 10
// console.log(q); // 50

// 🔷 Object Destructuring

// const person = {
//   name: "Mustafa",
//   age: 24,
//   country: "India",
// };

// // Without destructuring
// console.log(person.name);
// console.log(person.age);

// // With destructuring
// const { name, age } = person;

// console.log(name); // "Mustafa"
// console.log(age); // 24

// 🔷 Nested Destructuring

// const user = {
//   id: 1,
//   info: {
//     username: "mustafa123",
//     email: "mustafa@mail.com",
//   },
// };

// const {
//   info: { username, email },
// } = user;
// console.log(username); // "mustafa123"
// console.log(email); // "mustafa@mail.com"

// 🔷 Destructuring in Function Parameters (most commonly used)

// // Without destructuring
// function display(personObj) {
//   console.log(`${personObj.name} is ${personObj.age} years old.`);
// }

// const personObj = { name: "Mustafa", age: 24 };
// display(personObj); // "Mustafa is 24 years old."

// // With destructuring
// function display({ name, age }) {
//   console.log(`${name} is ${age} years old.`);
// }

// const personObj = { name: "Mustafa", age: 24 };
// display(personObj); // Mustafa is 24 years old.

// // With destructuring but different way
// function display(personObj) {
//   const { name, age } = personObj;
//   console.log(`${name} is ${age} years old.`);
// }

// const personObj = { name: "Mustafa", age: 24 };
// display(personObj); // "Mustafa is 24 years old."

// ✅ In short:

// Destructuring makes your code shorter, cleaner, and easier to read.

// 5️⃣ Object Properties

// ➡ we can now use Dynamic Properties

// let myName = "vinod";
// const myBio = {
//   [myName] : "hello how are you?",
//   [20 + 6] : "is my age"
// }

// console.log(myBio);

// ➡ no need to write key and value, if both are same

// let myName = "vinod thapa";
// let myAge = 26;

// const myBio = {myName,myAge}

// console.log(myBio);

// 🟡 Spread Operator

// The spread method in JavaScript is represented by three dots (...).
// The spread operator (...) in JavaScript is used to expand (or unpack) elements
// of an array, object, or string into individual items, making it easy to copy, merge,
// or add items without changing the original.

// -> It takes things out of a container (like an array or object)
// -> And spreads them wherever needed (like inside another array, object, or function call).
// -> it replaces the concat and copy method too.

// 1. Spreading in Arrays

// -> You can copy or merge arrays

// 🔷 Example:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// const copy = [...arr1];
// console.log(copy); // [1, 2, 3]

// const merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4, 5]

// 2. Spreading in Objects

// -> You can copy or merge objects.

// 🔷 Example:

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };

// const copyObj = { ...obj1 };
// console.log(copyObj); // { a: 1, b: 2 }

// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj); // { a: 1, b: 2, c: 3 }

// 3. Spreading Strings

// -> Turns a string into an array of characters.

// 🔷 Example:

// const word = "Hi";
// const letters = [...word];
// console.log(letters); // ['H', 'i']

// ✅ In short:

// The spread operator (...) lets you easily copy, merge, or expand
// arrays, objects, or strings.

// 🟡 Rest Operator

// The rest operator (...) in JavaScript collects multiple elements or values
// and puts them into a single array or object. It is mostly used in
// function parameters and object destructuring to handle an indefinite number of values.

// 🔷 Example:

// 1. In Functions 👇 (most common use)

// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7, 8)); // 30

// 👆 "...numbers" collects all arguments into an array like [1, 2, 3].

// 🔷 Example:

// 2. In Destructuring 👇

// const [first, second, ...rest] = [10, 20, 30, 40, 50];

// console.log(first); // 10
// console.log(second); // 20
// console.log(rest); // [30, 40, 50]

// 👆 "...others" gathers the remaining elements.

// 🔷 Example:

// 3. In Objects 👇

// const user = { name: "Ali", age: 25, city: "Delhi", country: "India" };

// const { name, ...details } = user;

// console.log(name);    // Ali
// console.log(details); // { age: 25, city: "Delhi", country: "India" }

// 👆 "...details" collects all other properties except name.

// ✅ In short:

// The Rest Operator (...) is used to gather the "rest of the values"
// into a single array or object.

// 📌 Rest Operator VS Spread Operator

// While Rest operator takes variable, number, parameters or arguments
// and put them in a single array, the spread operator takes an array
// and splits it in an individual element.

// 🔷 Difference in One Line:

// Spread: Breaks apart values → Used in arrays, objects, function calls.
// Rest: Gathers values → Used in function parameters and object/array destructuring.

// 🔑 Key Idea:

// Spread (...) → expands values (breaks them out).
// Rest (...) → collects values (gathers them in).

// -> Rest is to combine.
// -> Spread is to split.

// ES7 features

// 1: array include
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3);

// ES8 Features

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));

// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);

// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);

// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// "use strict" is a way to tell JavaScript to be more careful and strict,
// so it helps catch mistakes in your code.

// - It prevents the use of undeclared variables.
// - Helps catch common coding mistakes.
// - Makes JavaScript code more secure and optimized.

// It must be used at the top of a script or a function:

// Example 👇

// "use strict";
// function test() {
//   // strict mode is on here
// }

// ************************************************************

/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time.
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then
// instead of var, we will use an Array.

// An Array is a special type of object used to store multiple values in a single variable.
// It can hold numbers, strings, objects, functions, or even other arrays.

// In JavaScript, we have an Array class, and
// arrays are the prototype of this class.

// example 🏁

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// 1️⃣ Array Subsection 1 👉 Traversal in array✌
// navigate through an array

// if we want to get the single data at a time  and also
// if we want to change the data

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array

// console.log(myFriends.length);

// we use for loop to navigate

// var myFriends = ["vinod", "ramesh", "arjun", "vishal"];
// for (var i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// forEach Method

// The forEach() method in JavaScript is used to loop through each item in an array and
// run a function on every item, one by one. It is best used when you want to do
// something with each item, like logging it or updating something, but don’t need to
// get a new array in return.

//  Key Points about forEach() :-

// - It does not return anything (always returns undefined).
// - It does not modify the original array unless you explicitly do so inside the callback.
// - It cannot be broken with break, continue, or return (unlike for or for...of loops).
// - It takes a callback function with up to three arguments:

// ⚠️ Important Notes:-

// - You can't use async/await effectively inside forEach. Use for...of for async operations.
// - If you want to transform data, use map() instead,
//   because forEach() doesn't return a new array.

// Syntax:-

// array.forEach(function(currentValue, index, array) {
//   // your code here
// }, thisArg);

// - currentValue: The current element being processed.
// - index (optional): The index of the current element.
// - array (optional): The array forEach() was called upon.
// - thisArg (optional): Value to use as this inside the callback.

// Example:-

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1}: ${fruit}`);
// });

// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the
// 0th index number

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));

// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf('thapa'));

// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value,
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));

// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );

// // **********************************************************************

// // **********************************************************************

// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.

// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );

// FILTER METHOD

// The filter() method in JavaScript is used to create a new array by keeping
// only the elements that pass a certain test.

// 🔹 Syntax:-

// array.filter(callback(element, index, array), thisArg)

// callback: A function that runs for each element.
// element: The current item being processed.
// index (optional): The index of the current element.
// array (optional): The original array.
// thisArg (optional): Value to use as this inside the callback.

// 🔹 Key Points:-

// - Returns a new array.
// - Does not change the original array.
// - Only includes elements where the callback returns true.

// Example:-

// const prices = [200, 300, 350, 400, 450, 500, 600];

// const newPriceTag = prices.filter((elem) => {
//   return elem > 400;
// });
// console.log(newPriceTag);

// we can turn it into single line 👇

// const newPriceTag = prices.filter((curElem) => curElem > 400);
// console.log(newPriceTag);

// Another Example:-

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
// ];

// const adults = users.filter((user) => user.age >= 18);

// console.log(adults);

// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and
//returns the sorted array. The default sort order is ascending, built
//upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());

// However, if numbers are sorted as strings,
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect
// result when sorting numbers.

// 😀7: challenge Time  🏁

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional.
// A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}

// for asecnding order
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a
//     }
//     if(a<b){
//         // a comes first and then b
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// for desecnding order
// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return -1;
//         // b comes first and then a
//     }
//     if(a<b){
//         // a comes first and then b
//         return 1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });

// console.log(array1);

// 2: sort the array in descending order

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.sort();

// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place.
// // The first array element becomes the last, and
// // the last array element becomes the first.

// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);

// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);

// 2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// 😀8: challenge Time 🏁

// Splice Method

// The splice() method in JavaScript is used to add, remove, or replace elements inside an array
// and it changes (mutates) the original array.

// Important points:

// - It modifies the original array.
// - It returns an array of the deleted elements.

// Example for removing elements

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 2);
// console.log(numbers);

// Example for adding elements

// const fruits = ["apple", "banana"];
// fruits.splice(1, 0, "orange", "grape");
// console.log(fruits);

// Example for replacing elements

// const items = ["pen", "pencil", "eraser"];
// items.splice(1, 1, "marker");
// console.log(items);

// MAP METHOD

// In JavaScript, the map() method is a higher-order function that is used to iterate
// over an array and It transforms each element and returns a new array.

// OR (in React)

// Commonly used to iterate through an array and render components dynamically.
// It allows you to create a new array of React elements based on the original array.

// 🔹 What map() Does:-

// - map() loops through each element in the array.
// - map() applies a function to each element.
// - map() returns a new array with the results.
// - map() does not execute the function for empty elements.
// - map() does not change the original array.

// SYNTAX:-👇

// array.map(function(currentValue, index, arr), thisValue)

// function(currentValue, index, arr): It is required parameter and
// it runs on each element of array. It contains three parameters which are listed below:

// currentValue: It is required parameter and it holds the value of current element.
// index: It is optional parameter and it holds the index of current element.
// arr: It is optional parameter and it holds the array.
// thisValue: It is optional parameter and used to hold the value of passed to the function.
// Return Value: It returns a new array and elements of arrays are result of callback function.

// EXAMPLE 👇

// const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.map((curElem, index, arr) => {
//   return curElem * 10;
// });
// console.log(newArr);

// we can turn it into single line too 👇

// let newArr = array1.map((curElem) => curElem * 10)
// console.log(newArr);

// Real-world Example:-

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "John" },
// ];

// const names = users.map((user) => user.name);

// console.log(names);

// CHAINING METHOD

// - Method chaining means calling multiple methods one after another on the same
//   object or result, in a single line of code.
// - Each method in the chain returns an object, so the next method can be called
//   immediately on the result.

// 🔹 Example 1 – Chaining Array Methods:-

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map((num) => num * 2)
//   .filter((num) => num > 5)
//   .reverse();

// console.log(result);

// 🔹 Example 2 – Chaining String Methods:-

// const message = "   Hello JavaScript!   ";
// const cleaned = message.trim().toUpperCase().replace("JAVASCRIPT", "WORLD");
// console.log(cleaned);

// 🔹 Why use Chaining?

// - Cleaner, more readable code.
// - Avoids creating unnecessary intermediate variables.
// - Especially useful with array and string methods, jQuery, or custom objects.

// // **********************************************************************

// // **********************************************************************

// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those
//     elements which are greater than 10?

// sol1:
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);

// sol 2.a):
//  let arr = [2, 3, 4, 6, 8];

// let arr1 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10);
// console.log(arr1);

// sol 2.b):
//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);

// we can use the chaining too

// REDUCE METHOD

// The reduce() method in JavaScript is used to reduce an array to a single value
// by executing a callback function on each element of the array.

// Reduce function is basically used at a place where you have to take all the elements
// of an array and come up with single value out of them.

// It's often used to perform operations like summing up numbers, calculating averages,
// or transforming data in a specific way.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// const arr = [5, 1, 3, 2, 6];

// find sum ??
// find maximum value ??

// Traditional Way to find sum of an array 👇

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// Modern Way to find sum of an array 👇

// const output = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// This could have been written in one line as well.👇

// const output = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(output);

// Another Example:-

// const shoppingCart = [
//   {
//     itemName: "JS Course",
//     price: 999,
//   },
//   {
//     itemName: "Python Course",
//     price: 1999,
//   },
//   {
//     itemName: "Web Dev Course",
//     price: 2999,
//   },
//   {
//     itemName: "Data Science Course",
//     price: 3999,
//   },
// ];

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(priceToPay);

// Traditional Way to find maximum number from an array 👇

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// Modern Way 👇

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// OR
//   return curr > acc ? curr : acc;
// }, 0);

// console.log(output);

// Another Example 👇

// const users = [
//   { firstName: "Akshay", lastName: "Saini", age: 26 },
//   { firstName: "Elon", lastName: "Musk", age: 50 },
//   { firstName: "Donald", lastName: "Trump", age: 75 },
//   { firstName: "Deepika", lastName: "Padukone", age: 26 },
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);
// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output);

// HOW TO FLATTEN AN ARRAY ?
// converting 2d and 3d array into 1d array (one dimensional)

// Example:- Flatten a 2D array

// const nested = [[1, 2], [3, 4], [5]];

// const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat);

// Example:- Flatten a 3D Array

// const arr3D = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// const flattened = arr3D.flat(2); // 2 means flatten two levels deep

// console.log(flattened);

// USING REDUCE() 👇

// const flattened = arr3D.reduce((acc, twoD) => {
//   return acc.concat(twoD.reduce((flat, oneD) => flat.concat(oneD), []));
// }, []);

// console.log(flattened);

/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor

// let myName = "vinod thapa";
// let myChannelName = 'vinod thapa';

// // let ytName = new String("Thapa Technical");
// let ytName = 'thapa technical';

// console.log(myName);
// console.log((ytName));

// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string.

// let myName = "vinod thapa";
// console.log(myName.length);

// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);

// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.indexOf("t", 6));

// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...

// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the
// // last occurrence of searchValue, or -1 if not found.

// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));

// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified
// value and returns the position of the match

// const myBioData =  'I am the thapa Technical';
// let sData = myBioData.search("technical");
// console.log(sData);

// The search() method cannot take a second start position argument.

// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// Slice Method

// The slice() method in JavaScript is used to copy part of an array or string into a new array
// or string, without changing the original.

// - For arrays:
// array.slice(start, end) → copies elements from start index up to (but not including) end index.

// - For strings:
// string.slice(start, end) → copies characters from start index up to (but not including) end index.

// Important points:

// - It does not modify the original array or string.
// - If end is not given, it goes till the end.
// - Supports negative indexes (counts from the end).

// Example with array

// const numbers = [1, 2, 3, 4, 5];
// const part = numbers.slice(1, 4);
// console.log(part);

// Example with string

// const text = "Hello World";
// const part = text.slice(0, 5);
// console.log(part);

// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);

// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);

// // If we give negative value then the characters are
//  counted from the 0th pos

// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the
// length of the extracted part.

// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);

// 👉 Replacing String Content()

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value
// with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod`;

// let repalceData = myBioData.replace("Vinod", "VINOD");
// console.log(repalceData);
// console.log(myBioData);

// Points to remember
// 1: The replace() method does not change the string
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only
// the first match
// 3:By default, the replace() method is case sensitive.
// Writing VINOD (with upper-case) will not work

//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9));

// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every
// character, no matter the platform, device, application,
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.

// var str = "HELLO WORLD";

// console.log( str.charCodeAt(0) );

// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]);

//👉  Other useful methods

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "vinod"
// let lName = "thapa"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());

// Converting a String to an Array
// A string can be converted to an array with the
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe

/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
// console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second,
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021,0);
// console.log(d.toLocaleString());

// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);
// console.log(d.toLocaleString());

//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // how to set the indivisual date

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

//👉 Time Methods

// const curTime = new Date();

// // how to get the indivisual Time

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds
// // since January 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// // how to set the indivisual Time

// let curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// // Practice Time
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

// Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();

/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
// console.log(Math.PI);

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));

// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));

// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9

// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number
// rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));

// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().

// DOM - Document Object model

// DOM stands for Document Object Model.
// It is a programming interface for web documents.
// When a browser loads an HTML page, it creates a DOM of that page.

// Simple Definition:-

// DOM (Document Object Model) is a tree-like structure created by the browser
// that represents the HTML of a webpage.
// It lets JavaScript access, change, and interact with the content, structure,
// and style of the page.

// 👉 Think of it Like This:-

// - Your HTML page is like a blueprint.
// - The DOM is a live, structured representation (like a tree) of that blueprint
//   in the browser’s memory.
// - JavaScript can use the DOM to read, change, add, or remove parts of the web page dynamically.

// 👉 Structure of DOM:
// It’s like a tree of nodes:

// Document
//   └── html
//        ├── head
//        │    └── title
//        └── body
//             ├── h1
//             └── p

// 👆 Each tag, attribute, or text is a node in the DOM.

// 👉 Why is DOM Important?

// 1. Dynamic Interaction:-

// - DOM allows JavaScript to interact with the page.
// - Example: Changing text when a button is clicked.

// document.getElementById("title").innerText = "Welcome!";

// 2. Creating Dynamic Elements:-

// - You can create new elements or delete existing ones.

// Example:

// const newPara = document.createElement("p");
// newPara.textContent = "Hello, DOM!";
// document.body.appendChild(newPara);

// 3. Handling User Events:-

// - DOM lets you respond to user actions like clicks, input, or hover.

// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button Clicked!");
// });

// 4. Real-Time Updates:-

// DOM manipulation allows updates without reloading the page (e.g.,in SPAs like React apps).

// SUMMARY:-

// - The DOM is the bridge between HTML and JavaScript.
// - It lets JavaScript make the web page interactive and dynamic.
// - Without the DOM, JavaScript wouldn’t be able to change what you see on a web page
//   after it loads.

// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document,
// the HTML elements themselves, e.g. document and all traversal you
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that vary by browser). OR
// In simple meaning all the Window operations which comes under BOM are performed
// usign BOM

// Let's see more practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }

// Section 3️⃣: Navigate through the DOM

// 1: document.documentElement
// returns the Element that is the root element of the document.
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
// list of the direct children only
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time
// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling

//SECTION 4️⃣:  How to search the Elements and the References
// We will see the new file

// **********************************************************************

/**** EVENTS in JavaScript ****/

// In JavaScript, an event is a signal that something has happened in the
// browser—usually as a result of user interaction.
// (like clicking a button or typing in a form).

// 📘 Common Examples of Events:-

// Event Name 👇	      Triggered When...👇

// click	    ->        A user clicks an element
// mouseover	->        Mouse is moved over an element
// keydown	    ->        A key is pressed down
// submit	    ->        A form is submitted
// load	        ->        A page or image finishes loading
// change	    ->        Input value changes (like dropdown/input)
// resize	    ->        The browser window is resized

// There are 3 main ways to handle events:-

// ✅ 1. Inline HTML Attribute
// ✅ 2. Using DOM Property
// ✅ 3. Using addEventListener() (Best Practice)

// 1. Inline HTML Attribute 👇(Example)

// <button onclick="sayHello()">Click Me</button>

// 3. Using addEventListener() (Best Practice) 👇(Example)

// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", function () {
//   alert("Clicked with addEventListener!");
// });

// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************

// The window object allows execution of code at specified time intervals.
// These time intervals are called timing events.
// The two key methods to use with JavaScript are:

// setTimeout 👇

// setTimeout is a built-in JavaScript function that executes a piece of code
// after a specified delay (in milliseconds).

// setTimeout takes a callback function and attaches the timer and once the timer expires,
// it calls that function. And till then Javascript engine execute rest of the code.

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// function x() {
//   i = 10;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Hello Javascript");
// }
// x();

// basic Example 👇

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// Another Example (Important interview question) 👇

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello Javascript");
// }
// x();

// Que: Why is it not working with var ?? 👆
// Ans: let is a block scope , so it creates a new copy everytime while loop is executed.

// ✅ Important Notes

// -> setTimeout is asynchronous, meaning it doesn’t block the rest of the code.
// -> It returns a timeout ID which can be used to cancel it.

//🔹Use Cases of setTimeout:

// -> Show a message after a delay
// -> Auto-hide or remove an element (like alerts)
// -> Simulate API or network delay
// -> Trigger animations or effects after a pause
// -> Debounce user input (e.g., in search bars)
// -> Redirect the user after a delay
// -> Delay the execution of heavy computations
// -> Schedule tasks for later (like reminders)
// -> Create a typing or loading effect
// -> Delay showing tooltips or pop-ups

// setInterval 👇

// setInterval() is a built-in JavaScript function used to repeatedly execute a block of
// code or a function at a fixed time interval (in milliseconds).

// Example:-

// function greet() {
//   console.log("Hello, world!");
// }

// let id = setInterval(greet, 2000);

//🔹Use Cases of setInterval:

// -> Creating digital clocks
// -> Polling APIs at intervals
// -> Animations or slideshows
// -> Repeating background tasks

// **********************************************************************

// 🟡 OBJECT ORIENTED JAVASCRIPT

// **********************************************************************

// 🟡 OBJECTS

// In JavaScript, an object is a collection of key-value pairs, where the keys
// (also called properties) are strings (or symbols), and the values can be anything,
// like numbers, strings, functions, or even other objects.

// They're essential for organizing and managing data, and they form the foundation of
// most JavaScript code, including working with the DOM, APIs, and frameworks like
// React or Node.js.

// 🔹 Common Use Cases

// - Representing structured data (e.g., JSON from a server).
// - Grouping functions and data in modules or components.
// - Passing multiple values in a single function argument.
// - Using key-value stores for lookup tables or configurations.

// Example:

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   start: function () {
//     console.log("Car started");
//   },
// };

// console.log(car.brand);
// console.log(car.start());

// After Destructuring the object 👇

// const { brand, model, year } = car;
// console.log(model);

// 🔷 What is Object Literal ?

// (This is only one way of writing object which is object literal, but there are two other way
// as well to write object by using constructors and classes.)

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// we can refer this as an Objects.

// object = school bag

// 👉 How to create an Object using Object Literal ?

// 1st way

// let bioData = {
//     myName : "thapatechnical",
//     myAge : 26,
//     getData : function(){
//       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();

// 2nd way, no need to write functions as well after es6

// let bioData = {
//   myName: "thapatechnical",
//   myAge: 26,
//   getData() {
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   },
// };

// bioData.getData();

// 👉 How to create an Object using Object constructor ?

// const car = new Object();
// car.make = "Toyota";
// car.model = "Camry";

// console.log(car);

// 👉 How to create an Object using classes (ES6) ?

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }
// const car1 = new Car("Toyota", "Camry");
// console.log(car1);

// 👉 What if we want object as a value inside an Object

// let bioData = {
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical"
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );

// 🟡 CLASS

// A class is a blueprint for creating objects with the same properties and methods.
// It helps you avoid repeating code when making many similar objects.
// It’s syntactic sugar over JavaScript's prototype-based inheritance — which means
// it's just a cleaner way to write constructor functions and methods.

// There is a method named Contructor() which is automatically invoked by "new".

// It defines how an object should look (its properties) and what it can do (its methods).

// Example:-

// Let’s say we want to create many students who all have a name and can introduce themselves.

// class Student {
//   constructor(name, grade) {
//     this.name = name;
//     this.grade = grade;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.name} and I'm in grade ${this.grade}.`);
//   }
// }

// // Creating objects using the class
// const student1 = new Student("Mustafa", 10);
// const student2 = new Student("Ayaan", 8);

// student1.introduce(); // Hi, I'm Mustafa and I'm in grade 10.
// student2.introduce(); // Hi, I'm Ayaan and I'm in grade 8.

// 🔹Important Key Points:

// -> The new keyword is used to create an object (instance) from a class.
//    It tells JavaScript “Make a new copy of this class with its own data”
// -> constructor() method is automatically called when you create an object using new.
// -> this refers to the object being created.
// -> You can define methods inside the class — no need to use the function keyword.
// -> Classes are not hoisted, so you must define them before using.

// 🔹Constructor in a Class

// A constructor is a special method in a class that is automatically called
// when a new object is created from that class.
// -> It is used to initialize properties of the object.

// ⚙️ What are Instance Methods ?

// -> Instance methods are the regular methods of a class.
// -> They belong to the objects (instances) created from the class.
// -> To use them, you must create an instance of the class first.
// -> Inside these methods, you can access instance properties using this.

// Example: Instance Method 👇

// class Student {
//   constructor(naam) {
//     this.kabootar = naam;
//   }

//   // Instance method
//   introduce() {
//     console.log(`Hello, my name is ${this.kabootar}`);
//   }
// }

// const student1 = new Student("Mustafa");
// student1.introduce(); // ✅ Output: Hello, my name is Mustafa

// Here 👆

// -> introduce() is an instance method.
// -> You must first create an instance (student1) to call it.
// -> It uses this.name → property of the instance.

// ⚡ What are Static Methods?

// -> Static methods belong to the class itself, not to its instances.
// -> They are often used for utility/helper functions related to the class.
// -> You call them directly on the class, not on objects.
// -> They can’t access instance properties using this (because they’re not
//    tied to any specific object).

// Example: Static Method 👇

// class Student {
//   constructor(name) {
//     this.name = name;
//   }

//   // Static method
//   static schoolName() {
//     console.log("ABC International School");
//   }
// }

// Student.schoolName(); // ✅ Output: ABC International School

// const student1 = new Student("Mustafa");
// student1.schoolName(); ❌ Error: student1.schoolName is not a function

// Here 👆

// -> schoolName() is a static method.
// -> It’s called using the class name → Student.schoolName().
// -> It doesn’t depend on any particular student object.

// ⚖️ Summary Table

// Feature	                        Instance Method	                   Static Method

// Belongs To	                      Object (instance)	                  Class itself
// Called Using	                     object.method()	                 Class.method()
// Access Instance Data	          ✅ Yes (this.property)	                  ❌ No
// Typical Use	              Actions on individual objects	       Utility / helper functions
// Example	                      student1.introduce()	              Student.schoolName()

// 🟰 Key Points:-

// -> Only one constructor is allowed in a class.
// -> The keyword this refers to the current object.
// -> If no constructor is defined, JavaScript adds an empty default
//    constructor automatically.

// 🧠 Why use a class?

// -> It keeps your code clean and reusable.
// -> You can create many objects with the same structure and behavior.
// -> It makes object-oriented programming easier in JavaScript.

// 🟡 Constructor Function

// -> A constructor function is a special kind of function used to create objects
//    with the same structure.
// -> You use it when you want to create many similar objects (like many users, cars,etc).
// -> Its main job is to set up (initialize) the new object’s data — like giving it
//    its starting values.

// 🔹 Syntax

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// -> this.name = name → assigns the value to the object being created.
// -> Use new keyword to create the object.

// Example:

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   };
// }

// const p1 = new Person("Mustafa", 25);
// const p2 = new Person("Musti", 22);

// p1.greet();
// p2.greet();

// 🧠 Summary

// -> It acts like a template for objects.
// -> You use new to call it.
// -> Inside, this refers to the new object being created.

// 📌 Inheritance with Classes in JavaScript

// -> Inheritance is a feature in JavaScript that allows one class to use the
//    properties and methods of another class using the "extends" keyword.

// -> It helps in code reuse and builds a relationship between classes like
//    Parent → Child.

// -> We use the "extends" keyword to create a subclass and "super()" to call the
//    parent class constructor.

// -> The super keyword is used to call the constructor of its parent class to
//    access parent's properties and methods.

// Example:-

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name); // calls Parent's constructor
//     this.age = age;
//   }

//   showAge() {
//     console.log(`I am ${this.age} years old`);
//   }
// }

// const child1 = new Child("Mustafa", 25);
// child1.greet(); // Output: Hello, I am Mustafa
// child1.showAge(); // Output: I am 25 years old

// 📌 Key Points:-

// -> class Child extends Parent → establishes inheritance.
// -> super(name) → calls the constructor of the Parent class.
// -> The child class can:
//    . Use parent class methods
//    . Add its own methods

// One More Simple Example:-

// // Parent class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// // Child class
// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog1 = new Dog("Tommy");

// dog1.speak(); // Output: Tommy makes a sound (inherited from Animal)
// dog1.bark(); // Output: Tommy barks (own method)

// 🟰 Explanation:-

// -> Animal is the parent class.
// -> Dog is the child class that inherits from Animal.
// -> Dog can use:
//    . speak() from Animal
//    . its own method bark()

// 🔵 Question for Practice 👇

// Que1:- You are creating a website for college. Create a class User with two
//        properties, name & email. It also has a method called viewData() that
//        allows user to view website data?

// Solution 👇

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log(
//       `This is ${this.name} and his/her mail address is ${this.email}.`
//     );
//   }
// }

// let student1 = new User("Musti", "abc@gmail.com");
// let student2 = new User("Chusti", "xyz@gmail.com");

// student1.viewData();
// student2.viewData();

// Que2:- Create a new class called Admin which inherits from User. Add a new
//        Method called editData() to Admin that allows it to edit website data?

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log(
//       `This is ${this.name} and his/her mail address is ${this.email}.`
//     );
//   }
// }

// class Admin extends User {
//   editData() {
//     console.log(`${this.name} & ${this.email} has been edited.`);
//   }
// }

// let student1 = new Admin("Musti", "abc@gmail.com");
// student1.editData();

// 🟡 FOUR PILLARS OF OBJECT ORIENTED PROGRAMMING (OOP).

// 🔰 1. ENCAPSULATION

// Encapsulation means wrapping data (variables) and methods (functions) together in a
// single unit (object), and hiding some parts so others can't directly access or change them.

// Think of it like a medicine capsule — the ingredients are inside, but you can’t touch them
// directly. You only use it by taking the capsule.

// 🧠 Simple Real-Life Analogy:

// # ATM Machine
// -> You don’t know how it works internally.
// -> You just press buttons → withdraw cash.
// -> The complex logic is hidden (encapsulated).

// 🧑‍💻 Easy Example:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     let _age = age; // private variable using closure

//     this.getAge = function () {
//       return _age;
//     };

//     this.setAge = function (newAge) {
//       if (newAge > 0) _age = newAge;
//     };
//   }
// }

// const person1 = new Person("Mustafa", 25);

// console.log(person1.name); // ✅ Access allowed
// console.log(person1.getAge()); // ✅ Access via method: 25

// person1.setAge(26); // ✅ Modify safely
// console.log(person1.getAge()); // 26

// console.log(person1._age); // ❌ Cannot access directly (undefined)

// ✅ What's happening here?

// -> name is public → you can access it directly.
// -> _age is private → cannot access it directly.
// -> You must use getAge() and setAge() → this is encapsulation.
// -> This keeps the data safe and under control.

// 🔒 Why Encapsulation is Useful?

// -> Prevents accidental changes to data.
// -> Protects the object’s internal state.
// -> Allows controlled access using methods.

// 🔰 2. ABSTRACTION

// Abstraction means hiding the complex stuff and only showing the important and
// useful part to the user or outside world.

// Just like how you use a TV remote:

// -> You press the “power” button — TV turns on.
// -> You don’t need to know how the circuits work inside.
// -> That’s abstraction — useful actions exposed, complex code hidden.

// 🧑‍💻 Easy JavaScript Example:-

// class CoffeeMachine {
//   makeCoffee() {
//     this.boilWater(); // internal detail
//     this.grindBeans(); // internal detail
//     console.log("☕ Coffee is ready!");
//   }

//   boilWater() {
//     console.log("Boiling water...");
//   }

//   grindBeans() {
//     console.log("Grinding coffee beans...");
//   }
// }

// const machine = new CoffeeMachine();
// machine.makeCoffee();

// ✅ What’s happening?

// -> You only call makeCoffee() → simple to use.
// -> You don’t need to worry about boilWater() and grindBeans() → hidden logic.
// -> That’s abstraction: showing only the necessary method (makeCoffee) and hiding the rest.

// 🔐 Real-Life Example:-

// class ATM {
//   withdrawCash(amount) {
//     this.checkBalance();
//     this.verifyPIN();
//     this.dispenseCash(amount);
//   }

//   checkBalance() {
//     console.log("Checking balance...");
//   }

//   verifyPIN() {
//     console.log("Verifying PIN...");
//   }

//   dispenseCash(amount) {
//     console.log(`Dispensing ₹${amount}`);
//   }
// }

// const atm = new ATM();
// atm.withdrawCash(2000);

// ✅ What’s happening?

// -> You just want ₹2000.
// -> You don’t care how balance is checked or how PIN is verified.
// -> That’s the beauty of Abstraction.

// 💡 Summary (in one line):-
// Abstraction = Hiding complex code and exposing only what’s necessary.

// 🔰 3. INHERITANCE

// Inheritance means one class (child) can reuse the features (properties and methods)
// of another class (parent).
// It helps us avoid repeating code and build a hierarchy of reusable components.

// 🧑‍💻 Example:-

// // Parent class
// class Animal {
//   eat() {
//     console.log("Animal is eating");
//   }
// }

// // Child class
// class Dog extends Animal {
//   bark() {
//     console.log("Dog is barking");
//   }
// }

// // Create object
// const tommy = new Dog();

// tommy.eat(); // ✅ Inherited from Animal
// tommy.bark(); // ✅ Defined in Dog

// ✅ What’s happening?

// -> Dog is the child class.
// -> Animal is the parent class.
// -> Dog uses the keyword extends to inherit everything from Animal.
// -> Now Dog can do both: eat() (from Animal) and bark() (its own method).

// 🚗 Another Example:

// class Vehicle {
//   start() {
//     console.log("Vehicle started");
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     console.log("Car is driving");
//   }
// }

// const myCar = new Car();
// myCar.start(); // ✅ Inherited
// myCar.drive(); // ✅ Car's own method

// 🧠 Why use Inheritance?

// -> Reusability: Don’t repeat code in every class.
// -> Organized structure: Keep common behavior in parent, special behavior in child.
// -> Clean and maintainable code.

// 🔁 Summary in One Line:
// Inheritance = One class getting features of another class using extends keyword.

// 🔰 4. POLYMORPHISM

// Polymorphism means:
// Same method name, but different behavior depending on the object.

// 📌 "Poly" = many
// 📌 "Morph" = forms
// So, Polymorphism = many forms

// 🧒 Real-Life Analogy:

// -> Imagine you say "draw()" —
// -> A circle draws a round shape.
// -> A square draws a box.
// -> A triangle draws a pointed shape.
// -> Even though the method name is same — draw() — each shape behaves differently.

// 🧑‍💻 Example:

// class Animal {
//   makeSound() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Dog barks 🐶");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Cat meows 🐱");
//   }
// }

// // Function that accepts any animal
// function playSound(animal) {
//   animal.makeSound();
// }

// const dog = new Dog();
// const cat = new Cat();

// playSound(dog); // Dog barks 🐶
// playSound(cat); // Cat meows 🐱

// ✅ What’s happening?

// -> All classes have the same method name: makeSound().
// -> But each class gives it its own meaning.
// -> This is called method overriding — and it’s a key part of polymorphism.

// 🎯 Summary in One Line:
// Polymorphism = One method name behaving differently for different objects.

// 🌟 Summary in One Line of Each Pillar of OOP:

// Pillar	                        One-Line Summary

// Encapsulation	                Hide internal data, show only what's needed
// Abstraction	                    Hide complex logic, show only important actions
// Inheritance	                    Child class gets features from parent
// Polymorphism	                    Same method, different behavior per object

// **********************************************************************

// 👉 Advanced and Asynchronous JavaScript

// **********************************************************************

// Higher Order Function ❓

// function which takes another function as an arguments
// and returns a function as its result.

// Functions such as filter(),map(),reduce(),some() etc,
// these all are example of Higher-Order Functions.

// GENERAL/BAD WAY OF WRITING CODE 👇

// const radius = [3, 1, 2, 4];

// const calculateArea = function () {
//   output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function () {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

// const calculateDiameter = function () {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDiameter(radius));

// DRY PRINCIPLE / OPTIMIZED CODE / FUNCTIONAL PROGRAMMING 👇

// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(radius.map(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// calculate is a higher order function and area, circumference & diameter are callback functions,
// which is passed inside the logic.
// So, Functional programming deals with
// - Pure Function
// - Composition of function
// - Reusability
// - modularity
// lot of other things

// 🟡 EVENT LOOP

// The job of event loop is to pulls stuff out of the callback queue and places it onto
// the call stack whenever the call stack becomes empty.

// The Event Loop is a mechanism in JavaScript that helps the code run in a
// non-blocking way, even though JavaScript is single-threaded.

// 🧠 Simple Explanation:

// JavaScript has:

// -> A Call Stack → where code runs line by line.
// -> A Web API → handles things like setTimeout, fetch, DOM events.
// -> A Callback Queue → stores the results from Web APIs.
// -> The Event Loop → keeps checking:
//    “Is the call stack empty? If yes, push a task from the queue to the stack.”

// 🟰 Simple Code Example:

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");

// 🧩 Why this happens:

// 1. console.log("1") runs → goes to stack → prints 1.
// 2. setTimeout(...) is sent to Web APIs, waits 1 second.
// 3. console.log("3") runs → prints 3.
// 4. After 1 second, the callback console.log("2") moves to the Callback Queue.
// 5. Event Loop checks stack is empty → pushes console.log("2") from queue → prints 2.

// ➰ Event Loop prioritization:

// There are 2 types of queues:

// Queue Type	                          What Goes Here	                    Priority

// Microtask Queue	            Promise.then(), catch(), finally()	            🥇 HIGH
// Callback Queue(Task Queue)	setTimeout,setInterval,DOM events,fetch	        🥈 LOWER

// 🔥 Which is given priority first?
// 🥇 Microtask Queue is always emptied before the Callback Queue.

// 🧠 Example:

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// console.log("4");

// 🧩 Why?

// -> console.log("1") → synchronous → runs
// -> setTimeout(..., 0) → goes to Callback Queue
// -> Promise.then(...) → goes to Microtask Queue
// -> console.log("4") → runs
// -> Event loop sees stack is empty:
// -> 🥇 First empties Microtask Queue → prints 3
// -> 🥈 Then runs Callback Queue → prints 2

// 📝 REMEMBER THIS!

// -> Microtasks (Promises) always run before any tasks in the Callback Queue.
// -> Even if setTimeout(..., 0) is "zero delay", it still waits after microtasks.

// ✔️ Summary (In 1 Line):

// The Event Loop allows JavaScript to handle asynchronous tasks (like timers, API calls)
// without blocking the main code from running.

// 🟡 Hoisting

// Hoisting in JavaScript means JavaScript moves the declarations (like var, function)
// to the top of their scope (global or function) before executing the code.

//👆 This means you can access variables & function even before declaring them.
// But how they behave depends on how they are declared (var, let, const, or function).

// Basically, it gives us an advantage that no matter where functions and variables are declared,
// they are moved to the top of their scope before the code execution regardless
// of whether their scope is global or local.

// 🔍 Example 1: Hoisting with var

// console.log(x); // Output: undefined
// var x = 10;

// Explanation: 👇

// -> JavaScript sees this like:

// var x; // Hoisted to the top (only declaration)
// console.log(x); // undefined
// x = 10; // Assignment happens later

// 🔍 Example 2: Hoisting with let and const (But different behavior)

// console.log(y); // ❌ Error: Cannot access 'y' before initialization
// let y = 20;

// Explanation: 👇

// -> let and const are also hoisted, but they stay in a "temporal dead zone" until
//    the line where they are defined.
// -> So you cannot use them before their declaration.

// 🔍 Example 3: Hoisting with Functions

// sayHello(); // Output: Hello!

// function sayHello() {
//   console.log("Hello!");
// }

// Explanation: 👇

// -> Function declarations are fully hoisted (both name and body).
// -> So you can call them even before they are written in the code.

// 🔍 Example 4: Function expression is NOT hoisted

// greet(); // ❌ Error: Cannot access 'greet' before initialization

// const greet = function () {
//   console.log("Hi!");
// };

// Explanation: 👇

// -> This is a function expression stored in a const.
// -> const is hoisted but not initialized — so you get an error.

// 🟡 SCOPE CHAIN

// When a variable is used in JavaScript, the JavaScript engine will
// try to find the variable’s value in the current scope. If it could not
// find the variable, it will look into the outer scope and will continue to
// do so until it finds the variable or reaches global scope. So this way of finding
// is known as Scope Chain.

// 📦 Example to Understand Scope Chain:

// const globalVar = "🌍 Global";

// function outer() {
//   const outerVar = "🌟 Outer";

//   function inner() {
//     const innerVar = "💡 Inner";

//     console.log(innerVar);   // ✅ Found here
//     console.log(outerVar);   // ✅ Not here, found in outer()
//     console.log(globalVar);  // ✅ Not here, not in outer(), found in global
//   }

//   inner();
// }

// outer();

// 🧠 What’s happening behind the scenes?
// When inner() runs:

// -> It first looks in its own local scope (where innerVar is declared).
// -> If not found, it goes to the outer() function's scope.
// -> If still not found, it checks the global scope.
// -> If not found anywhere — ❌ ReferenceError.

// This search path is the Scope Chain.

// 🟡 LEXICAL SCOPE

// A lexical scope in JavaScript means that a variable defined outside
// a function can be accessible inside another function defined after
// the variable declaration. But the opposite is not true. The variables
// defined inside a function will not be accessible outside that function.

// 📌 Key Points:

// -> In JavaScript, a function can access variables from its parent (outer) scope
//    because of where it's defined, not where it's called.
// -> Think of it as: “Scope is decided by location in the source code.”

// 🧠 Important Points:

// -> JavaScript uses lexical (or static) scoping.
// -> Inner functions can access variables from outer functions or global scope.
// -> But outer functions cannot access variables from inner functions.

// 🟰 Nested Example (3 levels):

// const globalVar = "🌍 I'm global";

// function outer() {
//   const outerVar = "🌟 I'm outer";

//   function inner() {
//     const innerVar = "💡 I'm inner";

//     console.log(globalVar); // ✅ from global
//     console.log(outerVar); // ✅ from outer
//     console.log(innerVar); // ✅ from inner
//   }

//   inner();
// }

// outer();

// 🟰 Another Example

// var c = 40;
// function a() {
//   var b = 30;
//   console.log(c);
// }
// console.log(b);
// a();

// 🟡 CLOSURES

// A closure is a function that "remembers" the variables from its outer (lexical) scope,
// even after that outer function has finished executing.

// In other words:
// This means an inner function can access variables and parameters of its outer function,
// even after that scope has closed.

// In JavaScript, closures are created every time a function is created,
// at function creation time.
// it same like lexical scoping.

// 🟰 Basic Example:

// const outerFun = () => {
//   let a = 10;
//   let b = 10;
//   const innerFun = () => {
//     let sum = a + b;
//     console.log(`the sum of the two no is ${sum}`);
//   };
//   innerFun();
// };
// outerFun();

// 🟰 Example of DATA PRIVACY using Closures

// function createCounter() {
//   let count = 0;

//   function incrementCounter() {
//     count++;
//     console.log(`Count is ${count}`);
//   }
//   return incrementCounter;
// }

// const counter = createCounter();

// counter();
// counter();
// counter();

// 📌 In Short:

// Closure is being used here to "hide" the count variable from the outside world
// and only allow controlled access — this is called Encapsulation or Data Privacy.

// 🔁 Uses/Advantages of Closures:

// - Data Privacy & Encapsulation
// - Currying (Functional Programming Technique)
// - Creating Modules (Module Pattern)
// - Function like once
// - Maintaining State in the async world
// - SetTimeout / Async Function Access
// - Iterators
// - and many more

// ❌ Disadvantages of Closures

// - There could be overconsumption of memory in Closures
// - The variables declared inside a closure are not garbage collected.
// - Code with deep or nested closures can become hard to read and debug.
// - Too many closures can slow down your application.
//   This is actually caused by duplication of code in the memory.

// 🟡 Callback Function

// In JavaScript, a callback function is a function that is passed as an argument to another
// function, with the intention of being called at a later time, usually after some
// asynchronous operation or event has occurred. Callback functions are commonly used
// in scenarios like event handling, asynchronous programming, and in libraries that
// utilize a "callback pattern" for handling the completion of tasks.

// -> Callback function gives the power of a asynchronicity.

// 🔷 Why do we use Callback Functions?

// -> To execute code after another code has finished.
// -> Helps in reusability (pass different functions).
// -> Essential for handling asynchronous operations like API calls,timers,file reading,etc.

// 🔷 Types of Callback Functions

// ➖ (a) Synchronous Callback

// -> Executed immediately during the function call.
// -> Used in simple cases (like loops, calculations).

// Example: 👇

// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// var result = calculate(2, 3, add);
// console.log(result);

// Another Example 👇

// function greet(name, callMe) {
//   console.log("Hi " + name + callMe);
// }

// function callMe() {
//   return " I am callback function";
// }

// greet("Peter", callMe());

// ➖ (b) Asynchronous Callback

// -> Executed later, often after some operation finishes.
// -> Common in setTimeout, event listeners, API calls.

// Example: 👇

// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// ◻️ We need to create a Calculator

// const add = (a, b) => {
//   return a + b;
// };

// const subs = (a, b) => {
//   return Math.abs(a - b);
// };

// const mult = (a, b) => {
//   return a * b;
// };

// const div = (a, b) => {
//   if (b === 0) {
//     return "Error: Division by zero is not allowed";
//   }
//   return a / b;
// };

// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };

// var result = calculator(10, 5, div);
// console.log(result);

// 🔷 Callback with Built-in Functions

// -> Array methods → forEach, map, filter, reduce
// -> Event Listeners → addEventListener
// -> Timers → setTimeout, setInterval

// 🔷 Callback Hell (The Problem)

// -> If we nest too many callbacks → code becomes messy, hard to read.
//    This is called “Callback Hell”.

// Example: 👇

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// 👆 Looks like a pyramid of doom ⛺ → hard to manage.

// 🔷 How to Avoid Callback Hell ?

// -> Use Promises.
// -> Use async/await.

// 🔷 Key Points to Remember

// -> Callback = Function passed as argument and called later.
// -> Can be synchronous or asynchronous.
// -> Used heavily in event handling, API calls, timers, array methods.
// -> Too many callbacks → callback hell.
// -> Modern alternative: Promises & async/await.

// 🟡 PROMISES

// Promises are used to handle asynchronous operations in JavaScript,
// such as fetching data from an API, reading files, or handling user input.
// They are easy to manage when dealing with multiple asynchronous operations
// where callbacks can create callback hell leading to unmanageable code.

// MDN Definition:
// The Promise object represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value.

// callback functions were used but they had limited functionalities
// and created unmanageable code. Also it is not easy for any user to handle
// multiple callbacks at the same time.

// Promises are the ideal choice for handling asynchronous operations in the
// simplest manner. They can handle multiple asynchronous operations easily
// and provide better error handling than callbacks and events.

// 🔁 Promise has four states:

// -> pending: Promise is still pending i.e. not fulfilled or rejected yet
// -> fulfilled: Action related to the promise succeeded
// -> rejected: Action related to the promise failed
// -> settled: Promise has fulfilled or rejected

// 📌 Promise Methods:

// -> .then() → Runs when the promise is fulfilled.
// -> .catch() → Runs when the promise is rejected.
// -> .finally() → Runs regardless of the outcome (fulfilled or rejected).

// 🧩 Benefits of Promises:

// -> Improves Code Readability
// -> Better handling of asynchronous operations
// -> Better flow of control definition in asynchronous logic
// -> Better Error Handling

// Example 👇

// let pizzaOrder = new Promise(function (resolve, reject) {
//   let pizzaReady = true;

//   if (pizzaReady) {
//     resolve("Pizza is ready! 🍕");
//   } else {
//     reject("Pizza was not prepared! ❌");
//   }
// });

// pizzaOrder
//   .then(function (message) {
//     console.log("Success:", message);
//   })
//   .catch(function (error) {
//     console.log("Failed:", error);
//   });

// 🟡 Async Await

// Async/Await is a modern way to handle asynchronous operations in JavaScript,
// introduced in ES2017 (ES8). It makes asynchronous code look and behave more like
// synchronous code, which is easier to read and understand.

// -> async and await make promises easier to write
// -> async makes a function return a Promise.
// -> await makes a function wait for a Promise.
// -> So the async keyword is added to a function to tell them to return a promise
//    rather than directing returning the value.

// 🧠 Why Use Async/Await?

// Before Async/Await, we had:
// Callbacks → Callback Hell 😵
// Promises → Better, but can be confusing with .then() chaining
// Async/Await simplifies this even more!

// 🔑 Key Concepts

// 1. async keyword
// -> Used before a function to mark it as asynchronous.
// -> It always returns a Promise, even if you return a non-promise value.

// 2. await keyword
// -> Used inside an async function.
// -> It waits for the Promise to resolve and returns the resolved value.
// -> It pauses the async function at that point until the Promise settles.

// Traditional Promises :-

// Before async/await, promises were the primary way to manage asynchronous operations.
// Here's a typical example:

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Fetched data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// Async/await :-

// Async/await builds upon promises, offering a more readable way to write asynchronous code.
// Here's the same example using async/await:

// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log("Fetched data:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchData();

// Example 👇

// async function test() {
//   console.log(2);
//   await console.log(3);
//   console.log(4);
// }

// console.log(1);
// test();
// console.log(5);

// Another Example 👇

// const getData = async () => {
//   var y = await "Hello World";
//   console.log(y);
// };

// console.log(1);
// getData();
// console.log(2);

// One more exmaple 👇

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function showMessages() {
//   console.log("One");
//   await wait(1000); // waits 1 second
//   console.log("Two");
// }

// showMessages();

// 💡 Key Points to Remember

// -> You must use await inside an async function.
// -> If the Promise is rejected, use try...catch to handle errors.
// -> await only works with Promises.

// 🧩 Use Cases

// -> Fetching data from APIs
// -> Waiting for timers (e.g., with setTimeout using a Promise wrapper)
// -> Performing a sequence of asynchronous operations in a readable flow

// 🟡 ERROR HANDLING

// Error handling, as the name states, is a strategy that handles the errors or
// exceptions which occur at runtime.

// The JavaScript statements try and catch come in pairs:

// try - The try statement allows you to define a block of code to be tested
// for errors while it is being executed.

// catch - The catch statement allows you to define a block of code to be executed,
// if an error occurs in the try block.

// The try statement lets you test a block of code for errors.
// The catch statement lets you handle the error.
// The throw statement lets you create custom errors.
// The finally statement lets you execute code, after try and catch, regardless of the result.

// 🟡 FETCH API

// The fetch() method in JavaScript is used to request to the server
// and load the information in the webpages. The request can be of any APIs
// that returns the data of the format JSON or XML. This method returns a promise.

// fetch( url, options )

// Parameters: This method accept two parameters as mentioned above and described below:

// -> URL: It is the URL to which the request is to be made.
// -> Options: It is an array of properties. It is an optional parameter.

// fetch API example in another file.

// HTTP STATUS CODE 👇

// 1xx:  Informational - Request received / Processing
// 2xx:  Success       - Successfully received
// 3xx:  Redirect      - Further action must be taken/ redirect
// 4xx:  Client Error  - Request does not have what it needs
// 5xx:  Server Error  - Server failed to fulfill a valid request

// Example:- 404 - not found error - if we try to access something that doesn't exit.

// 🟡 API

// API stands for Application Programming Interface.
// It is a messenger or bridge that allows two different software systems
// (apps, websites, services) to talk to each other and exchange data or commands.

// 🔹 Real-Life Example (Restaurant Analogy)

// -> An API is like a waiter in a restaurant.
// -> You (user/app) tell the waiter (API) what you want.
// -> The waiter (API) gets it from the kitchen (server/database).
// -> Then brings the result (data) back to you.

// 🔸 What an API Does:

// -> Accepts requests (like "Give me the weather for Delhi")
// -> Talks to the server
// -> Brings back the response/data (like "It's 35°C and sunny")

// 🔸 Types of APIs:

// Type	                          Description	                          Example

// Web API	            Works over the internet using HTTP	        fetch(), browser APIs
// REST API	           A set of rules for creating web APIs	       GET /users, POST /login
// Third-party API	     APIs provided by external services	       YouTube API, Weather API
// Browser API	           Built-in APIs in browsers	             localStorage, DOM API

// 🔸 Real Example:

// If you visit 👇. That’s you talking to the OpenWeather API

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key

// 🟡 REST API

// -> REST (Representational State Transfer) is just a set of rules that many APIs follow.
// -> It’s like saying: "In this restaurant, here’s how you should order food —
//    use the menu, use clear words like order, update, delete."
// -> So, a REST API is simply an API that follows these rules.

// 🛠️ Example in Real Life (Non-Technical)

// Imagine you have a mobile app for ordering food:

// 1. GET → You want to see the menu.

// -> You ask: “Show me all pizzas.”
// -> REST API reply: “Here’s the list of pizzas.”

// 2. POST → You want to order food.

// -> You say: “I want to order a Margherita pizza.”
// -> REST API reply: “Okay, order placed successfully.”

// 3. PUT → You want to change your order.

// -> You say: “Change my pizza to Pepperoni.”
// -> REST API reply: “Order updated.”

// 4. DELETE → You want to cancel your order.

// -> You say: “Cancel my pizza order.”
// -> REST API reply: “Order canceled.”

// 🖥️ Example in Programming World

// Let’s say there’s a website https://example.com/pizzas

// 1. GET request:

// GET https://example.com/pizzas
// → Response: [{"id":1,"name":"Margherita"},{"id":2,"name":"Pepperoni"}]

// 2. POST request:

// POST https://example.com/pizzas with data { "name": "Veggie" }
// → Response: { "message": "Pizza added successfully" }

// 3. PUT request:

// PUT https://example.com/pizzas/1 with data { "name": "Cheese Burst" }
// → Response: { "message": "Pizza updated" }

// 4. DELETE request:

// DELETE https://example.com/pizzas/1
// → Response: { "message": "Pizza deleted" }

// ✅ In Short

// -> API = waiter that takes your request and brings response.
// -> REST API = waiter following certain rules (GET, POST, PUT, DELETE).
// -> It’s how apps, websites, and servers talk to each other.

// 🟡 PROTOTYPE

// A prototype is a built-in object in JavaScript from which other objects can inherit
// properties and methods.
// You can access this hidden property using:-  obj.__proto__

// Whenever we create any object, Javascript engine automatically puts hidden properties,
// methods and functions into an object and attaches it to the object. That is how we get
// access to these properties and methods by using dot operator. And all these come via
// Prototype.

// 🔹 Why Prototypes?

// If you try to access a property or method on an object and it doesn’t exist,
// JavaScript looks up the chain using the prototype. This is known as Prototype Chain.

// ✅ When does the Prototype Chain end?

// The prototype chain ends when JavaScript reaches null.
// there is nothing left to look up, and the chain stops there.

// 🔹 Example 1: Basic Prototype Chain

// const person = {
//   greet() {
//     console.log("Hello!");
//   },
// };

// const mustafa = {
//   name: "Mustafa",
// };

// // Set prototype manually
// mustafa.__proto__ = person;

// mustafa.greet(); // Output: Hello!

// -> Here, "mustafa" doesn't have greet() method, so it looks up to its prototype person.

// 🔹 Example 2: Constructor Function + Prototype

// function Person(name) {
//   this.name = name;
// }

// // Add method to prototype
// Person.prototype.sayHi = function () {
//   console.log(`Hi, I'm ${this.name}`);
// };

// const user1 = new Person("Mustafa");
// user1.sayHi(); // Output: Hi, I'm Mustafa

//👆 What’s Happening Here?

// -> "mustafa" object does not have sayHi method.
// -> JavaScript looks into Person.prototype and finds it there.
// -> So "mustafa" inherits the method from its prototype.

// 🔹 Summary (Easy Points)

// -> Every object has a prototype.
// -> It's used to inherit properties/methods.
// -> JavaScript looks up the prototype chain if a property/method is missing.
// -> You can use .prototype to add shared methods to constructor-created objects.

// 🟡 CALL APPLY and BIND Method in Javascript

// In simple terms, Call, apply, and bind are the functions that help you change the context
// of the "this" keyword present inside the invoking function.

// 👉 CALL METHOD

// The call() method is a built-in JavaScript function that allows you to call a function
// with a specific "this" value, and pass arguments one by one.

// 🔸 Why do we use call() ?

// We use call() when we want to:-
// -> Borrow a method from another object.
// -> Change the value of this when calling a function.

// 🔸 Example 1: Borrowing a method

// const person1 = {
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person1.fullName.call(person2));

// 🔸 Example 2: Passing arguments

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const user = {
//   name: "Musti",
// };

// greet.call(user, "Hello", "!");

// 👉 APPLY METHOD

// The apply() method is used to call a function, but it allows you to pass an array
// of arguments instead of listing them one by one.

// 🧠 Example:-

// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}!`);
// }

// greet.apply(null, ["Hello", "Mustafa"]);

// -> greet is called with "this" as null
// -> 'Hello' and 'Mustafa' are passed as an array of arguments

// 📊 Real-World Example (Using Math.max with array):

// const numbers = [5, 10, 20, 3];

// const max = Math.max.apply(null, numbers);

// console.log(`Max value is ${max}`);

// ✔️ Math.max doesn’t accept an array directly, so we use apply() to spread the array
// as individual arguments.

// 🔁 Difference from call():

// -> call() → arguments passed one by one
// -> apply() → arguments passed as an array

// Example:- 👇
// greet.call(null, 'Hi', 'Mustafa');    // call: individual args
// greet.apply(null, ['Hi', 'Mustafa']); // apply: array of args

// ✅ Use Case Summary:

// -> Use .apply() when you already have arguments in an array
// -> Useful for borrowing methods or spreading array values>

// Another example for CALL & APPLY Method 👇
// (Took the examples from Akshay Saini Youtube Channel)

// -> The only difference between Call and Apply method is the way we pass arguments.

// let printFullName = function (hometown, state) {
//   console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
// };

// const name1 = {
//   firstName: "Mohd",
//   lastName: "Mustafa",
// };

// // function borrowing

// printFullName.call(name1, "Gurgaon", "Haryana");

// const name2 = {
//   firstName: "Sachin",
//   lastName: "Tendulkar",
// };

// // function borrowing
// printFullName.call(name2, "Mumbai", "Maharashtra");
// printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// One more example for Call and Apply Method 👇

// var obj = {
//   name: "Sachin",
// };

// function sayHello(age, profession) {
//   return `Hello ${this.name} is ${age} and is an ${profession}.`;
// }

// console.log(sayHello.call(obj, 24, "Software Engineer"));
// console.log(sayHello.apply(obj, [24, "Software Engineer"]));

// 👉 BIND METHOD

// The bind() method creates a new function that, when called, has its "this" keyword
// permanently set to a specific object.
// It doesn't call the function right away — it just returns a new function with "this" fixed.

// 🔍 Why is it Useful?

// Sometimes when you pass a function somewhere (e.g., to an event listener or timer),
// "this" can get lost or point to something unexpected.
// But bind() locks "this" to the object you want.

// 📦 Example 1 – Basic Usage:

// const person = {
//   name: "Mustafa",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const greetFunction = person.greet;
// greetFunction(); // ❌ undefined, because 'this' is lost

// const boundGreet = person.greet.bind(person);
// boundGreet(); // ✅ Hello, my name is Mustafa

// 📦 Example 2 – With Arguments:

// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2); // 'null' means we don't care about 'this'
// console.log(double(5)); // ✅ 10

// 📦 Example 3

// var obj = {
//   name: "Sachin",
// };

// function sayHello(age, profession) {
//   return `Hello! ${this.name} is ${age} and is an ${profession}`;
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(23, "Software Engineer"));
// console.log(bindFunc(28, "Doctor"));

// The code written above could have been written like this as well 👇

// var obj = {
//   name: "Sachin",
// };

// function sayHello(age, profession) {
//   console.log(`Hello! ${this.name} is ${age} and is an ${profession}.`);
// }

// const bindFunc = sayHello.bind(obj, 23, "Software Engineer");
// bindFunc();

// 🧠 Key Points to Remember:

// -> bind() returns a new function.
// -> It permanently fixes the this value.
// -> It’s not executed immediately.
// -> Useful when this is getting lost.

// 📊 Code Example for All 3 call(), apply(), and bind() Methods

// function sayHi(greeting, punctuation) {
//   console.log(`${greeting}, my name is ${this.name}${punctuation}`);
// }

// const person = { name: "Mustafa" };

// // 🔹 call()
// sayHi.call(person, "Hello", "!"); // ✅ Hello, my name is Mustafa!

// // 🔹 apply()
// sayHi.apply(person, ["Hi", "!!"]); // ✅ Hi, my name is Mustafa!!

// // 🔹 bind()
// const greet = sayHi.bind(person, "Hey");
// greet("?"); // ✅ Hey, my name is Mustafa?

// 🔍 In Short:

// call() → Instant call with ","
// apply() → Instant call with "[]"
// bind() → Prepares function with locked this — you call it later

// Final Notes: 👇

// -> Call and Apply both are similar, only difference is the way we pass arguments.
// -> The mentioned methods do NOT work with arrow function.
// -> And the only difference between Call and Bind is that Bind method gives you the copy
//    that can be invoked later rather than directly invoking it.

// 🟡 POLYFILL

// -> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern
//    functionality on older browsers that do not natively support it.
// -> Polyfills are used to make sure that your code works in all browsers,
//    even if the browser does not support the latest features.

// Think of it like this:
// -> If an old browser doesn’t know how to do something (like Array.includes()),
//    a polyfill is like a teacher that shows the browser how to do it using older
//    JavaScript code.

// 🔹 Why do we need Polyfills ?

// -> Browsers release features at different times.
// -> New JavaScript features (ES6, ES7, etc.) might not work in older browsers
//    like Internet Explorer.
// -> To make sure our app works for everyone, we add polyfills so old browsers
//    can still run our code.

// 🔹 Example: Polyfill for Array.includes()

// Modern JS has includes(), but older browsers don’t.

// Without polyfill: 👇

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape"));  // false

// 👆 This may not work in very old browsers.

// With polyfill: 👇

// if (!Array.prototype.includes) {
//   Array.prototype.includes = function (value) {
//     return this.indexOf(value) !== -1;
//   };
// }

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits.includes("banana")); // true
// console.log(fruits.includes("grape")); // false

// Here 👆, we taught old browsers how to use includes() by rewriting it using indexOf()
// (which they do support).

// 🔹 Real-World Polyfill Usage

// Instead of writing polyfills manually every time, developers usually use libraries:

// -> core-js
// -> babel-polyfill

// These automatically add polyfills for modern features so your app runs everywhere.

// 🟡 CURRYING

// -> Currying is a technique in JavaScript where a function that takes multiple arguments
//    is transformed into a function that takes one argument at a time.
// -> Each function call returns another function until all arguments are provided.

// 📌 Example with Currying (Using the concept of Closure)

// function curryAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(curryAdd(2)(3)(4));

// Explanation 👇

// -> First call curryAdd(2) returns a function waiting for b.
// -> Then (3) passes b.
// -> Then (4) passes c and finally gives 9.

// 📌 Another Example

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = multiply(2);
// const triple = multiply(3);

// console.log(double(5));
// console.log(triple(5));

// 👉 Here we created double and triple easily using currying.

// 📌 Why is Currying Useful?

// -> Reusability:- You can fix some arguments and reuse the function.
// -> Flexibility:- Helps when working with higher-order functions.

// 🟡 THIS KEYWORD

// 🔑 What is "this" in JavaScript?

// -> "this" is a special keyword that refers to the execution context (the object that is
//    currently calling the function).
// -> Its value depends on how the function is called, not where it is defined.
// -> In short: "this" is dynamic in JavaScript.

// ⚡ Rules for this
//    Let’s break down all scenarios:

// 1. Global Context 👇

// -> In the browser, "this" in the global scope refers to the "window" object.
// -> In strict mode, "this" in the global scope becomes "undefined".

// Example:

// console.log(this);
// "use strict";
// console.log(this);

// 2. Inside a Function 👇 (Normal function calls)

// -> In non-strict mode → this = window.
// -> In strict mode → this = undefined.

// Example:

// "use strict";

// function show() {
//   console.log(this);
// }
// show(); // window (non-strict) / undefined (strict)

// 3. Inside an Object Method 👇

// -> When a function is called as a method of an object, this refers to that object.

// Example:

// const person = {
//   name: "Mustafa",
//   greet() {
//     console.log(this.name);
//   }
// };
// person.greet();

// 4. Nested Functions 👇

// -> Inner functions do not inherit this from the outer function.
// -> By default, they get window (non-strict) or undefined (strict).

// Example:

// const person = {
//   name: "Mustafa",
//   greet() {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };
// person.greet(); // undefined (because inner() is a normal call)

// 5. Arrow Functions & this 👇

// -> Arrow functions do not have their own this.
// -> They lexically inherit this from the surrounding scope.
// -> Arrow functions are often used to avoid this confusion.

// Example:

// const person = {
//   name: "Mustafa",
//   greet() {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   },
// };
// person.greet();

// 6. In a Constructor Function 👇

// -> When using "new", "this" refers to the newly created object.

// Example:

// function Person(name) {
//   this.name = name;
// }
// const user = new Person("Mustafa");
// console.log(user.name);

// 7. In a Class 👇

// -> Same as constructor functions:
// -> "this" refers to the created instance.

// Example:

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }
// const user = new Person("Mustafa");
// user.greet();

// 8. Explicit Binding 👇 (call, apply, bind)

// 🔹 call → invokes function immediately

// Example:

// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}`);
// }
// const user = { name: "Mustafa" };
// greet.call(user, "Hello"); // Hello, Mustafa

// 🔹 apply → same as call but arguments as an array

// Example:

// greet.apply(user, ["Hi"]); // Hi, Mustafa

// 🔹 bind → returns a new function with fixed this

// Example:

// const boundGreet = greet.bind(user);
// boundGreet("Hey"); // Hey, Mustafa

// 9. this in Event Listeners 👇

// -> In normal functions, this refers to the element that received the event.
// -> In arrow functions, this is inherited from outer scope (not the element).

// Example:

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this); // the button element
// });

// button.addEventListener("click", () => {
//   console.log(this); // window (not the button)
// });

// ✅ Summary (Key Takeaways)

// -> this depends on how a function is called.
// -> Global scope: window (non-strict) / undefined (strict).
// -> Object method: the object itself.
// -> Arrow functions: inherit this from surrounding scope.
// -> new: this is the new object.
// -> call, apply, bind: explicitly set this.
// -> Event listeners: normal function → element, arrow → outer scope.

// 🟡 STRICT MODE

// 🎯 Why use strict mode?

// -> Catches common coding mistakes early.
// -> Makes code more secure.
// -> Prepares code for future JavaScript versions.

// ✅ How to enable strict mode?

// -> Add "use strict"; at the top of a file → applies to the whole script.
// -> Add "use strict"; at the top of a function → applies only inside that function.

// ⚡ Key Features of Strict Mode

// -> No using undeclared variables
// -> No deleting variables or functions
// -> No duplicate parameter names
// -> Prevents writing to read-only properties
// -> Safer "this keyword" handling
// -> No octal literals (0 prefix)

// Example 👇

// "use strict";

// function sum(a, b) {
//   add = a + b;
//   console.log(add);
// }
// sum(2, 5);

// Another Example 👇

// a = 10;
// console.log(a);

// 👉 In short:

// -> Strict mode = “JavaScript with seatbelts” 🚗💨
// -> It prevents silent errors and enforces better coding practices.

// 🟡 IIFE (Immediately Invoked Function Expression)

// -> An IIFE is a function that runs immediately after it’s created.
// -> You don’t need to call it separately — it executes itself instantly.

// 🔹 Why use IIFE ? Benefits:

// -> Avoid polluting the global scope → keeps variables private.
// -> Variables inside an IIFE can’t be accessed from outside it.
// -> Runs immediately → perfect for code that should execute once.

// 🔹 Syntax

// (function() {
//   // code here
// })();

// -> The function is wrapped inside parentheses () to turn it into an expression.
// -> The trailing () executes or invokes it immediately.

// 🔹 Example 1 (Basic)

// (function () {
//   let message = "Hello, I am inside an IIFE!";
//   console.log(message);
// })();

// 👉 Variable message is private (not accessible outside).

// 🔹 Example 2 (With Parameters)

// (function(name) {
//   console.log(`Hello ${name}, welcome to IIFE!`);
// })("Mustafa");

// 👉 Passed "Mustafa" directly while invoking.

// 🔹 Real-World Use Case Example

// const result = (function () {
//   let a = 3;
//   let b = 4;
//   return a + b;
// })();
// console.log(result);

// 🔹 Quick Recap 📝

// IIFE = Function + () → Runs immediately
// -> Used for privacy (local scope)
// -> Used for immediate execution

// 🔎 Comparison Table

// Feature	                     Normal Function 🛠	                         IIFE ⚡

// Execution	                 Runs only when called	                   Runs immediately
// Syntax	                     function name(){}	                     (function(){})()
// Variable Scope 🔒	      Variables can leak to global scope	      Keeps variables private
// Use Case 💡	                Reusable functions	                    One-time execution

// ✅ In short:

// -> Use Normal Function → when you want to reuse code.
// -> Use IIFE → when you want code to run once immediately + keep things private.

// Difference between map() and forEach()

// Map -
// The map() method returns an entirely new array.
// The map() method returns the newly created array according to the provided callback function.
// With the map() method, we can chain other methods like, reduce(),sort() etc.

// forEach() -
// The forEach() method does not returns a  new array based on the given array.
// 	The forEach() method returns “undefined“.
// 	The forEach() method doesn’t return anything hence the method chaining technique
// cannot be applied here.

// let data = [1, 2, 3, 4, 5];

// let res = data.forEach((item) => {
//   return item * 10;
// });
// console.log(res);

// let ans = data.map((item) => {
//   return item * 10;
// });
// console.log(ans);

// Arrow Function

// An Arrow Function in JavaScript is a shorter way to write a function expression.
// It was introduced in ES6 (ECMAScript 2015) and uses the => syntax.

// Syntax:-

// const functionName = (parameters) => {
//   //  function body
// };

// Key Features:-

// - Shorter syntax
// - Does not have its own this (inherits from the parent scope)
// - Cannot be used as constructors (i.e., you can't use new with them)

// One-liner Arrow Function:-
// If the function has only one expression, you can exclude {} and return.

// Example:-

// const square = (n) => n * n;
// console.log(square(4));

// Difference between Regurlar function & Arrow function

// Syntax, Implicit Return

// In regular function, you have to use return keyword to return any value.
// If you don’t return anything then the function will return undefined.

// If the arrow function contains one expression, you can omit(exclude) the curly braces,
// and then the expression will be implicitly returned.

// Example 👇

// ES5
// var add = function (x, y) {
//   return x + y;
// };
// var result = add(2, 3);
// console.log(result);

// ES6
// let add = (x, y) => x + y;
// let result = add(2, 3);
// console.log(result);

// Arguments binding

// - In regular function, Arguments keywords can be used to access the arguments of
// which passed to function.

// Example 👇

// function regularFunction(a, b) {
//   console.log(arguments);
// }
// regularFunction(1, 2);

// - Arrow functions do not have an arguments binding.

// Example 👇

// const arrowFunction = (a, b) => {
//   console.log(arguments);
// };
// arrowFunction(1, 2);

// - However, if you want to access arguments in an arrow function, you can use the rest operator:

// Example 👇

// const arrowFunction = (...arguments) => {
//   console.log(...arguments);
// };
// arrowFunction(1, 2);

// 🟡 Event Propagation

// Event propagation is the way events travel (or "propagate") through the DOM tree
// when an event (like a click) happens on an element.
// When you click an element, the event doesn’t just stay there — it moves through
// different phases.

// 🛤️ Phases of Event Propagation

// There are 3 phases:-

// 1. Capturing Phase (Event Capturing) 🔽
// -> The event starts from the top/root (document) and moves downward through
//    ancestors until it reaches the target element.

// 2. Target Phase 🎯
// -> The event actually reaches the element you clicked (the target).

// 3. Bubbling Phase (Event Bubbling) 🔼
// -> After reaching the target, the event travels upward from the target element
//    back through its ancestors until it reaches the root again.

// ✅ In Short:

// Event Propagation -> the journey of an event through the DOM.
// It has Capturing → Target → Bubbling phases.
// By default, JavaScript uses bubbling phase (but you can enable capturing).

// 🟡 Event Bubbling

// Event bubbling in JavaScript is a mechanism where an event, triggered on a
// specific HTML element, propagates upwards through its parent elements in the
// Document Object Model (DOM) tree. This means that if you click on a child
// element, the click event will first be handled by that child, then by its
// immediate parent, then by its grandparent, and so on, until it reaches
// the document object. (child → parent → grandparent → document → window).

// 👉 In short: Event flows upward from the clicked element to its parents.

// 📌 Important Points

// -> Default behavior of events is bubbling.
// -> If you don’t want bubbling, use: event.stopPropagation();
// -> There’s also Event Capturing (opposite direction: top → down),
// -> but bubbling is used more often.

// ☑️ Practical use of Event Bubbling

// ➖ Problem Without Bubbling 👇

// Imagine you have a list of 100 items.
// If you want to do something when any <li> is clicked, the naive way would be.
// Add addEventListener on every <li>.
// But that’s inefficient and messy.

// ➖ Solution With Event Bubbling 👇 (Event Delegation)

// Instead of adding listeners to each <li>
// You add one listener to the parent <ul> (because events bubble up).

// 🔎 How it works?

// -> You click on <li> → event triggers on that <li>.
// -> Then event bubbles up to <ul>.
// -> <ul> listener checks if the click came from <li>.
// -> Only one event listener is needed, no matter how many <li> items exist.

// ⚡ Benefits

// -> Efficient (fewer event listeners).
// -> Works even for dynamically added elements.
// -> Keeps code clean and maintainable.

// 🔷 Real-life usage:

// Handling clicks on menus, lists, tables, buttons inside a container.
// Infinite scroll or dynamic content apps.
// Frameworks like React also internally rely on this principle.

// 🟡 Event Delegation

// Event Delegation is a technique in JavaScript where instead of adding event
// listeners to many child elements, we add just one listener to their common parent
// and use event bubbling to handle events for all children.

// ➖ In simple words:
// -> Let the parent "delegate" the work of handling events for its children.

// ➖ Delegate meaning in general:
// -> to give somebody with a lower job or position a particular task to do

// 👉 Without Delegation

// -> If there are 100 <li>, this creates 100 event listeners.
// -> But that's Inefficient and Messy!

// 👉 With Delegation

// -> Only one listener on <ul> handles all <li> clicks.

// ⚡ Benefits

// -> Fewer event listeners → better performance.
// -> Works even if new child elements are added later (dynamic elements).
// -> Cleaner and easier code.

// 🎯 Real-Life Usage

// -> Menus (<ul>, <li> items)
// -> Tables (handle clicks on cells/rows)
// -> Forms (handle input focus/validation)
// -> Shopping carts (many "Add to Cart" buttons)

// 📌 So in short:

// Event Bubbling -> how events move upward.
// Event Delegation -> a smart technique that uses bubbling to manage many children
//                     with one parent listener.

// ✅ Main Difference between Bubbling and Delegation

// Event Bubbling -> (Default Behaviour) How the event moves up from child → parent.
// Event Delegation -> (Technique) Using bubbling to manage multiple children with
//                     one parent listener.

// 🟡 Event Capturing

// Event Capturing (also called trickling phase) is the phase where an event
// moves from the root (window/document) down to the target element in the DOM tree.

// -> It is the opposite of bubbling.
// -> By default, JavaScript event listeners use bubbling, but you can enable capturing
//    by passing true as the third argument in addEventListener.

// 👉 So in short:

// ➖ Capturing = event goes top ➝ down (parent → child).
// ➖ Bubbling = event goes bottom ➝ up (child → parent).

// 📌 Example

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// // Capturing phase 👇

// parent.addEventListener("click", () => {
//   console.log("Parent (capturing)");
// }, true); // true = capturing

// child.addEventListener("click", () => {
//   console.log("Child (capturing)");
// }, true);

// // Bubbling phase (default) 👇

// parent.addEventListener("click", () => {
//   console.log("Parent (bubbling)");
// }); // false = bubbling (default)

// child.addEventListener("click", () => {
//   console.log("Child (bubbling)");
// });

// 🎯 Key Point to Remember

// -> Capturing is rarely used compared to bubbling.
// -> But it’s useful when you want a parent element to catch events before the child does.

// 🟡 e.preventDefault()

// e.preventDefault() is a method available on the event object in JavaScript.

// It tells the browser:
// -> “Don’t run the default action that usually happens for this event.”
// -> Instead: “I’ll handle this event myself with my custom code.”

// 🔹 Why is it Needed? (Default Behaviors)

// Browsers come with built-in default actions. Some examples:

// -> Submitting a form ➝ Refreshes the page.
// -> Clicking an <a href="..."> ➝ Navigates to another page.
// -> Right-click ➝ Opens the context menu.
// -> Dragging files into a browser ➝ Opens the file.

// But sometimes, as developers, we don’t want these defaults.
// So we stop them using e.preventDefault().

// 🔹 Easy Example 1 (Form Submission 🚫 Refresh)

// -> Without e.preventDefault() → page reloads.
// -> With e.preventDefault() → you can handle data with JavaScript (AJAX, React, etc) instead.
// -> Form submitted, but page did NOT reload.

// 🔹 Easy Example 2 (Anchor Tag 🚫 Navigation)

// -> Without e.preventDefault() → navigate to Google.
// -> With e.preventDefault() → stay on same page and run your logic.
// -> Stop Navigation

// 🔹 Shortcut for Remembering

// preventDefault() -> Hey browser, stop your auto-behavior. I’ll take control now.

// 🟡 Debouncing & Throttling

// Debouncing and throttling techniques are used to limit the number of times
// a function can execute. Generally, how many times or when a function will be
// executed is decided by the developer. But in some cases, developers give this
// ability to the users. Now, it is up to the user to decide when and how many times
// to execute that function.

// 1. Debouncing

// Debouncing is a technique in JavaScript (and other programming) where we delay
// the execution of a function until a certain amount of time has passed since the
// last time the function was called.

// ➖ In short

// If an event keeps firing continuously (like typing, scrolling, resizing),
// Debounce ensures the function runs only once after the activity stops.

// Example:

// -> Imagine you are typing in a search box. Without debouncing,
//    every keystroke will call the API:
// -> After applying debouncing, the function will only run once the user has
//    stopped typing for the given delay time.

// function debounce(fn, delay) {
//   let timerId;

//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// const search = (query) => {
//   console.log(`Searching for`, query);
// };

// const searchWithDebounce = debounce(search, 1000);

// searchWithDebounce("h");
// searchWithDebounce("he");
// searchWithDebounce("hel");
// searchWithDebounce("hell");
// searchWithDebounce("hello");
// searchWithDebounce("hello J");
// searchWithDebounce("hello JS");

// ⚡ How it works:

// -> If user types h, he, hel, hell, hello quickly → Only one final API call will be
//    made after 500ms of no typing.
// -> Without debounce → 5 API calls would be made.

// 🔷 Real-world Use Cases of Debouncing

// -> Search Bars → Prevents too many API requests while typing.
// -> Resize Event → Window resize can fire hundreds of times, debounce ensures
//    function runs only after resizing stops.
// -> Button Clicks → Prevents accidental double form submissions.
// -> Scroll Event → Optimizes performance by limiting function execution
//    when user is scrolling.

// ✅ In short:

// Debouncing = “Wait until user stops doing something, then take action.”

// 2. Throttling

// Throttling is a technique in which, no matter how many times the user fires the event,
// the attached function will be executed only once in a given time interval.

// -> In simple words → it limits the rate at which a function runs.

// 📝 Example of Throttling

// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = new Date().getTime();

//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// }

// function sendChatMessage(message) {
//   console.log(`Sending Message`, message);
// }

// const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

// sendChatMessageWithSlowMode("Hello");
// sendChatMessageWithSlowMode("Hello bro");
// sendChatMessageWithSlowMode("Hello bro! What's Happening?");
// sendChatMessageWithSlowMode("Hello bro! How are you doing?");
// sendChatMessageWithSlowMode("Hello bro! What are you doing nowadays?");

// 🎯 Use Cases of Throttling

// -> Window Resize → Running calculations only once every few seconds instead
//    of on every pixel change.
// -> Scroll Events → Lazy-loading images or infinite scroll without overloading
//    performance.
// -> Mouse Move / Dragging → Tracking position updates smoothly without calling the
//    function hundreds of times.
// -> API Calls → Limiting requests to avoid hitting server limits (like pressing a
//    button rapidly).

// ⚡ In short:

// -> Ensures function runs at regular intervals, even while user is continuously
//    triggering the event.

// 📌 Comparing Debouncing vs Throttling

// ✅ Shortcut to remember:

// -> Debounce = 🕒 "Execute after inactivity"
// -> Throttle = ⏱️ "Execute at intervals during activity"

// 👉 Example to stick in mind:

// -> Typing in search box = Debounce (wait till you stop typing 🏁).
// -> Scrolling = Throttle (report scroll position every 1s 🚦).

// 🟡 SHALLOW COPY AND DEEP COPY

// 1. Shallow Copy

// A shallow copy creates a new object or array, but only copies the first level.

// ◻️ Explanation in simple words:

// -> When you make a shallow copy, only the outer shell of the object is copied.
// -> But if that object contains another object (nested), JavaScript doesn’t
//    copy the inner one.
// -> Instead, it just copies the reference (link/pointer) to that inner object.
// -> So both the original and the copy point to the same nested object in memory.
// -> That’s why changing the nested object through the copy also changes
//    it in the original.

// 🔷 Example:

// let original = {
//   name: "Mustafa",
//   address: { city: "Delhi", country: "India" },
// };

// // Shallow copy using spread operator
// let copy = { ...original };

// // Modifying top-level property
// copy.name = "Musti";

// console.log(original.name); // Output: Mustafa (original not changed)
// console.log(copy.name); // Output: Musti

// // Modifying nested object
// copy.address.city = "Mumbai";

// console.log(original.address.city); // Output: "Mumbai"
// console.log(copy.address.city); // Output: "Mumbai"

// ✅ Notice: Changing name does not affect original, but changing address.city
// does affect original because it’s nested.

// 👉 Both original.address and copy.address are pointing to the same nested object.
//    So changing one affects the other.

// ➖ Why this happened?

// -> original.address and copy.address are the same object in memory.
// -> You only have one address object, and both original and copy are holding
//    references (links) to it.

// 2. Deep Copy

// -> A deep copy creates a completely independent copy of the object/array,
//    including all nested objects.
// -> Changes in the copy won’t affect the original at all.

// 🔷 Example:

// let original = {
//   name: "Mustafa",
//   address: { city: "Delhi", country: "India" },
// };

// // Deep copy using JSON methods
// let deepCopy = JSON.parse(JSON.stringify(original));

// // Modifying nested object
// deepCopy.address.city = "Mumbai";
// console.log(original.address.city); // Delhi (original stays the same)
// console.log(deepCopy.address.city); // Mumbai

// ✅ Notice: Now even nested objects are completely independent.

// 📌 Quick Comparison Table:

// Feature	                             Shallow Copy	                     Deep Copy

// Copy Level	                       First level only	              All levels (nested too)
// Nested objects shared?	                 Yes	                             No
// Changes affect original?	     Sometimes (nested objects)	                Never
// Example methods	             Object.assign(), ...spread	       JSON.parse(JSON.stringify())

// 🟡 Coercion

// Coercion in JavaScript means 👉 converting one data type into another
// automatically or manually.

// ⚡ Types of Coercion

// 1. Implicit Coercion (Automatic 🔄)

// -> Happens when JavaScript converts types behind the scenes.

// Example:

// console.log(5 + "2"); // "52"  (Number → String)
// console.log(5 - "2"); // 3     (Number → String)
// console.log("5" * 2); // 10    (String → Number)

// 2. Explicit Coercion (Manual ✋)

// -> When you intentionally convert using functions/operators.

// Example:

// console.log(Number("123")); // 123 (String → Number)
// console.log(String(99)); // "99" (Number → String)
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true

// 🧠 Shortcut to Remember

// -> Implicit = JS does it for you 🤖
// -> Explicit = You do it yourself 🧑‍💻

// ✅ Common Conversions

// -> + with string → Converts other value to string
// -> - with string → Converts other value to number
// -> Math operations (- * /) → Convert to number
// -> Boolean() → Converts to true/false based on truthy/falsy rules

// 🟢 Truthy vs 🔴 Falsy in JavaScript

// 🧠 Shortcut to Remember:

// -> Only 8 values are Falsy, everything else is Truthy.

// -> Falsy Pack = false, 0, -0, 0n, "", null, undefined, NaN
// -> Everything else is Truthy 👇

// ✅ Everything else!

// -> Non-empty strings → "0", "false", "hello"
// -> Numbers (except 0 & NaN) → 42, -7, Infinity
// -> Objects → {}, [], function() {}
// -> BigInt (except 0n) → 1n, -5n

// 🟡 Local Storage vs Session Storage vs Cookies

// 🗂️ 1. Local Storage

// -> Stores data in the browser with no expiration (stays even after closing browser).
// -> Good for long-term data like user preferences, theme, language.
// -> Storage capacity: ~5–10 MB (much larger than cookies).
// -> Data is accessible only on the same domain.
// -> Not automatically sent to the server with requests (client-side only).

// 🔷 Example:

// localStorage.setItem("theme", "dark");
// console.log(localStorage.getItem("theme")); // "dark"

// 🗂️ 2. Session Storage

// -> Similar to local storage but cleared when the tab/browser is closed.
// -> Good for temporary data like form inputs, user logins, session-based states.
// -> Storage capacity: ~5 MB (same as local storage).
// -> Not shared across browser tabs/windows (only works in the tab where stored).
// -> Not sent automatically to the server.

// 🔷 Example:

// sessionStorage.setItem("token", "12345");
// console.log(sessionStorage.getItem("token")); // "12345"

// 🍪 3. Cookies

// -> Small pieces of data stored in the browser, can be set by client or server.
// -> Automatically sent with every HTTP request → useful for authentication.
// -> Storage capacity: ~4 KB (much smaller).
// -> Can have an expiration time (short or long).
// -> Can be HttpOnly (not accessible by JS → safer for sensitive data).

// 🔷 Example:

// document.cookie = "username=Mustafa; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// 👉 Shortcut to remember:

// -> Local Storage = 🏠 "Permanent house" (data stays).
// -> Session Storage = 🚪 "Temporary guest room" (gone after leaving).
// -> Cookies = 📦 "Small delivery package" (sent with every request).

// 🟡 Authentication VS Authorization

// 🔑 Authentication (AuthN)

// ➖ What it is: Process of verifying who you are.
// ➖ Goal: Confirm identity.
// ➖ Example:
// -> Entering username + password.
// -> OTP verification on phone.
// -> Using Google login.

// 👉 Think of it as: “Prove you are Mustafa.”

// 🔐 Authorization (AuthZ)

// ➖ What it is: Process of verifying what you can do.
// ➖ Goal: Grant or deny access to resources.
// ➖ Example:
// -> After login, deciding if you can access the admin dashboard.
// -> Normal user can watch videos, but only admins can delete them.

// 👉 Think of it as: “Now that I know you are Mustafa, what are you allowed to do?”

// 🎯 Shortcut to Remember

// -> Authentication = Identity (Who are you?)
// -> Authorization = Permissions (What can you do?)

// 🟡 BASIC GIT COMMANDS

// What is Git ? ❓

// Git is a version control system that helps to track changes in code.
// It's free and Open Source.

// It was created by Linus Torvalds in 2005 to manage the development of the Linux kernel.
// Git is widely used in software development for its efficiency, speed, and flexibility.

// Git allows multiple developers to work on the same project simultaneously by keeping track
// of changes made to the source code over time. It maintains a history of all changes,
// enabling users to revert to previous versions if necessary.

// What is Github ? ❓

// GitHub is a platform that allows developers to create, store, manage and share their code.

// What is Git Clone ? ❓

// Command -> git clone <remote_repository_URL>

// Example:- git clone https://github.com/example-user/example-project.git

// Downloads a copy of an existing Git repository from a remote location (like GitHub) to your
// local machine.

// Creates a fully functional Git repository with its own history and branches.

// This allows you to work on a local copy of the project, make changes, and contribute those
// changes back to the original repository.

// What does the git status command do ? ❓

// The git status command displays the state of the working directory and the staging area.

// By running git status regularly, you can keep track of your changes and ensure that
// your repository is in the state you expect it to be in before committing your changes.
// It's a fundamental command in the Git workflow.

// In Git, the state of a file can be categorized into four main stages: ❓

// - untracked:- "New files that git doesn't yet track"
// These are files that are completely new and exist in your working directory but are not
// yet known to Git. They haven't been added to the version control system.

// - modified:- "Changed"
//  These are files that are already being tracked by Git (they exist in previous commits),
// but you've made changes to them since the last commit.

// - staged:- "file is ready to be committed" "git add ."
// This refers to files that have been modified and marked to be included in the next commit.
// After modifying a file, you use the git add command to stage it. Staging files allows you to
// group related changes together before committing them.

// - unmodified:- "Unchanged" "git commit -m ''"
// These are tracked files that haven't been changed since the last commit. Git recognizes them
// and knows they haven't been modified. They won't be included in your next commit because there
// are no new changes to record. Think of these as files you haven't edited since the last
// project snapshot.

// Add, Commit & Push Commands ❓

// Add:- This command tells Git which files you want to include in your next commit. Changes to
// files are not saved in Git until you explicitly add them using git add. You can add individual
// files with git add filename.txt or add all modified files in the working directory with
// 'git add .' (the dot represents all files).

// Commit:- After you've added files with git add, you use git commit to create a snapshot of
// the current state of your repository. This snapshot includes the added files and a commit
// message you provide. The commit message briefly describes the changes you've made. It's essential
// to write clear and concise commit messages as they help you and others understand the project's
// history. You use the -m "your message" flag with git commit to specify the message.

// Push:- This command uploads your local commits to a remote repository, typically hosted on a
// platform like GitHub.  Before pushing, you need to set up a remote repository and configure your
// local repository to communicate with it.  Once configured, you can use git push origin branch_name
// to push your commits to the specified branch (branch_name) on the remote repository named origin
// (which is the common default name for the remote repository).

// General Workflow - for local git ❓

// 1. Make new repo on Github
// 2. Clone                    command -> git clone <remote_repository_URL>
// 3. Changes
// 4. Add                      command -> git add <file1> <file2> ... <fileN> or git add . (all)
// 5. Commit                   command -> git commit -m "Your commit message here"
// 6. Push                     command -> git push -u origin <branch-name>

// Git Branch Commands ❓

// 1. Listing Branches

// command -> git branch
// This lists all your local branches. The current branch
// (the one you're working on) is marked with an asterisk (*).

// command -> git branch -a
// This lists all branches, including local branches,
// remote tracking branches, and detached HEAD state.

// 2. Renaming Branches

// command -> git branch -m <old_branch_name> <new_branch_name>
// Renames the specified branch to a new name.

// 3. Switching Branches

// command -> git checkout <branch_name>
// Switches to the specified branch.

// 4. Creating Branches

// command -> git checkout -b <branch_name>
// Creates a new branch with the specified name and switches to it in one step.

// 5. Deleting Branches

// command -> git branch -d <branch_name>
// Deletes the specified branch.
// Git prevents you from deleting the branch if it contains unmerged changes.

// command -> git branch -D <branch_name>
// Forces deletion of the specified branch, even if it contains unmerged changes.

// 6. Merging Branches

// There are two ways to merge branches

// 1st way
// command -> git merge <branch_to_merge>
// To merge two branches in Git, you typically use the 'git merge'

// 2nd way
// -> Via a Pull Request
// It lets you tell others about changes you have pushed to a branch in a repository on Github.

// Pull Command ❓
// command -> git pull origin main
// The pull command is used to fetch and download content from a remote repo and immediately
// update the local repo to match the content.

// Resolving Merge Conflicts ❓
// Will do this later...

// Undoing Changes ❓

// Case 1 : staged changes (Changes added but not commited)
//  command -> git reset <file_name>

// Case 2 : commited changes (for one commit)
// command -> git reset HEAD~1

// Case 3 : commited changes (for many commits)
// command -> git reset <commit hash>
// command -> git reset --hard <commit hash>

// Fork ❓
// In Git, a "fork" refers to a copy of a repository that exists under a different user or
// organization's account. Forking is commonly used in open-source development workflows,
// where it allows contributors to freely experiment with changes without affecting the
// original repository.

// What does "hosting the website" means ? ❓

// Hosting a website refers to renting storage space and resources on a powerful computer
// called a server. This server is always connected to the internet and makes your website's
// files accessible to anyone who visits it.
