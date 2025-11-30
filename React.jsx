// 🔴 React.js Overview

// -> React.js is a JavaScript library used for building user interfaces,
//    especially single-page applications.
// -> It focuses on the view layer of the application (not a full framework).
// -> It enables building UI using components, which are reusable and independent UI pieces.

// ⚛️ Who Created React & When?

// -> Created by: Jordan Walke, a software engineer at Facebook.
// -> Initially released: 2013 (open-sourced).
// -> Internal development began: Around 2011 for Facebook’s internal tools.

// ⚛️ Why Use React? (Advantages)

// Component-Based Architecture:
// -> Build UI using small reusable components, improving maintainability.

// Virtual DOM:
// -> Uses an in-memory virtual DOM to update the UI efficiently and improve performance.

// Fast Rendering & Performance:
// -> Updates only the necessary parts of the UI instead of re-rendering the entire page.

// Strong Community & Ecosystem:
// -> Large open-source community, extensive libraries, tooling, and job market demand.

// Declarative UI:
// -> You describe how UI should look; React handles UI state changes automatically.

// Supports JSX:
// -> Allows writing HTML-like syntax inside JavaScript, making UI code readable and intuitive.

// Cross-Platform (React Native):
// -> Enables building mobile apps using JavaScript with a similar component model.

// 🔴 Rendering Process + Virtual DOM + Diffing Algorithm

// ⚛️ What is the Virtual DOM?

// -> The Virtual DOM is a lightweight, in-memory representation of the real browser DOM.
// -> It is a JavaScript object that React uses to track UI changes without touching the
//    real DOM directly.
// -> React updates the Virtual DOM first, calculates what changed, and then applies only the
//    necessary changes to the real DOM.

// ⚛️ How does React’s reconciliation/diffing algorithm work?

// -> When state or props change, React creates a new Virtual DOM tree.
// -> It then compares the new Virtual DOM tree with the previous one (this comparison
//    is called diffing).
// -> React finds the minimum number of changes needed to update the real DOM.
// -> It applies those minimal updates efficiently instead of repainting the whole UI.

// ⚛️ What triggers a re-render in React?

// -> A component re-renders when:
// -> Its state changes using setState or useState.
// -> Its props change from the parent.
// -> Its context values change when using useContext.
// -> A parent re-renders (which may cause children to re-render unless optimized).

// ⚛️ Is the Virtual DOM faster than the real DOM? Why?

// -> Yes, generally it is faster for UI updates.
// -> Direct manipulation of the real DOM is slow because it involves layout
//    recalculations, painting, and browser updates.
// -> The Virtual DOM reduces unnecessary DOM operations by batching changes and
//    updating only the affected nodes.

// ⚛️ How does React decide whether to re-render a component?

// -> React re-renders if the component's props or state change, but before updating
//    the real DOM, it compares the new Virtual DOM tree with the old one.
// -> If nothing changed in the output (i.e., the diff algorithm finds no difference),
//    React skips applying updates to the real DOM.
// -> Developers can further control re-renders using:
//    - React.memo() (for functional components)
//    - PureComponent (for class components)
//    - useCallback and useMemo for stable references.

// ⚛️ What is Reconciliation?

// -> Reconciliation is the process where React compares the new Virtual DOM with the
//    previous version to determine what changed.
// -> It then updates only the necessary parts of the real DOM.
// -> It ensures efficient rendering by avoiding full UI refreshes.

// ⚛️ What are keys in React and why are they important in the diffing process?

// -> Keys are unique identifiers assigned to elements in lists, such as key={item.id}.
// -> They help React identify which items were added or removed.
// -> Without keys, React may re-render or reorder elements incorrectly, hurting performance
//    and causing UI bugs.

// 🔴 Components & Props

// ⚛️ What is the difference between functional and class components?

// Functional components:

// -> They are simple JavaScript functions that return JSX.
// -> They use React hooks (like useState, useEffect) to manage state and lifecycle.
// -> They are easier to write, faster, and more commonly used in modern React.

// Class components:

// -> They are ES6 classes that extend React.Component.
// -> They use this.state for state and lifecycle methods like componentDidMount().
// -> They require binding of this in many cases and are more complex.

// Short answer:

// -> Functional components are simpler and hook-based.
// -> While class components use lifecycle methods and this keyword.
// -> Modern React prefers functional components.

// ⚛️ What are props? Why are they read-only?

// -> Props (short for "properties") are inputs passed from a parent component to a child component.
// -> They allow components to receive dynamic data and behave differently based on values provided.

// Why are props read-only?

// -> Props should not be modified inside the child component because data flow in React
//    is unidirectional (top-down).
// -> Changing props would break predictability and make components harder to debug.
// -> If a component needs to modify data, it should manage it in state, not props.

// 🔴 State & setState

// ⚛️ What is state in React?

// -> State is a built-in data storage mechanism inside a component that holds values that
//    can change over time and affect how the UI renders.
// -> Examples: UI controls, input values, toggles, API data.

// Key points:-

// -> State represents dynamic data.
// -> When state changes, React re-renders the component.

// ⚛️ What happens internally when setState is called?

// -> When you call setState or a setter from useState:

// 1. React receives a state update request.
// 2. React adds it to a queue, instead of updating immediately.
// 3. React batches updates if inside event handlers.
// 4. React runs reconciliation to compare Virtual DOM with previous version.
// 5. React updates only the changed parts of the real DOM.
// 6. Component re-renders with the new state.

// ⚛️ Why is state asynchronous?

// State updates are asynchronous because React batches multiple state updates together
// for performance. Instead of updating the UI on every small state change synchronously,
// React schedules updates and processes them efficiently.

// Simple explanation: React waits, groups updates, and updates UI once to avoid
// unnecessary re-renders.

// ⚛️ Why should we never modify the state directly?

// We should never mutate state directly because:

// -> React cannot detect changes, so UI will not update.
// -> It breaks immutability, making debugging and reconciliation harder.
// -> Can cause unpredictable behavior and stale renders.

// Bad example: state.count = 5;
// Correct example: setCount(5);

// 🔴 useState Hook

// ⚛️ What is useState and how does it work?

// useState is a React Hook that lets functional components store and manage state.
// (data that changes over time).

// How it works:

// -> You call useState(initialValue)
// -> It returns → an array with [stateValue, setStateFunction]
// -> React stores this value internally and re-renders the component whenever setState is called

// const [count, setCount] = useState(0);

// Explanation:

// - count → holds current value
// - setCount → updates value and triggers re-render

// ⚛️ Why does React not update state immediately?

// -> Because state updates are asynchronous.
// -> React groups multiple state updates into one re-render.
// -> Updates go to a queue, not applied instantly.
// -> This avoids unnecessary UI updates and improves speed.

// ⚛️ How to update state based on previous state?

// -> Wrong way (may use outdated value):- setCount(count + 1);
// -> Correct way (functional update):- setCount(prev => prev + 1);

// 🔴 useEffect Hook

// ⚛️ What is useEffect and when does it run?

// useEffect is a React Hook that lets us run side effects in function components.
// Side effects are things that happen outside the normal UI rendering flow.

// Examples of side effects:

// -> Fetching data from an API
// -> Setting up event listeners (scroll, resize, etc.)
// -> Working with setTimeout / setInterval
// -> Subscribing to WebSocket, Firebase, etc.
// -> Updating document.title

// When does it run?

// -> useEffect runs after the component renders (after the UI is painted), not during rendering.

// Why not during render?

// -> Because useEffect is meant for side-effects (API calls, event listeners, timers,
//    subscriptions) which should not block rendering.

// Cases When It Runs:

// Code	                              When It Runs?

// useEffect(() => {})	              (No dependency array) After every render
// useEffect(() => {}, [])	          (Empty array) Only once after first render
// useEffect(() => {}, [value])	      After first render and when dependency changes

// ⚛️ Difference between useEffect(() => {}, []) and useEffect(() => {})?

// useEffect(() => {}, []) -> Runs once

// -> This has an empty dependency array [].
// -> It runs only once after the first render (on mount).

// useEffect(() => {}) → Runs after every render

// -> No dependency array means: React will run this effect after every render.
// -> This can easily cause performance issues or even infinite loops if we update
//    state inside it.

// ⚛️ What is the cleanup function in useEffect?

// -> Cleanup function = a function returned from inside useEffect.
// -> It is used to clean or undo whatever the effect did.

// Example:

// useEffect(() => {
//   const id = setInterval(() => {
//     console.log("tick");
//   }, 1000);

//   // Cleanup function
//   return () => {
//     clearInterval(id); // stop the interval
//   };
// }, []);

// Use cleanup for:

// -> Clearing intervals / timeouts
// -> Removing event listeners
// -> Unsubscribing from APIs / WebSocket / Firebase
// -> Canceling ongoing requests (with AbortController, etc.)

// ⚛️ Why does React warn about missing dependencies in useEffect?

// You see warnings like:

// React Hook useEffect has a missing dependency: 'value'. Either include it or remove
// the dependency array.

// -> React warns about missing dependencies because useEffect depends on the values you
//    use inside it.
// -> If you read a variable/state/prop inside the effect but don’t include it in the
//    dependency array, React thinks:
// -> "You are using something that can change, but I don't know when to re-run this effect!"

// What problem does it prevent?

// -> Stale / outdated values
// -> Effects running with old state/props
// -> Hard-to-debug bugs & inconsistent UI
// -> Missed re-renders when values change

// ⚛️ Infinite re-render issue in useEffect — why does it happen?

// Infinite re-render = component keeps rendering again and again.

// This usually happens when:

// -> The useEffect updates state
// -> That state is part of the effect’s dependencies or effect has no dependency array.

// Effect runs → updates state → state change triggers re-render → effect runs again → & so on…

// How to avoid infinite re-renders?

// -> Add a proper dependency array and conditional logic:
// -> Only call setState when needed (not on every render)
// -> Use the functional update form only when it makes logical sense
// -> Sometimes use [] if the effect should run only once

// 🔴 useMemo & useCallback (Optimization Hooks)

// useMemo and useCallback are React Hooks used for performance optimization through
// memoization. They prevent unnecessary re-renders and re-computations by caching
// values and functions.

// ⚛️ Difference between useMemo and useCallback?

// 🔹useMemo:-

// useMemo memorizes (caches) the result of a function so React doesn’t re-calculate it
// on every render.

// When it is used? Use useMemo when:

// -> You have heavy calculations ⏱
// -> You want to avoid recalculating values unnecessarily
// -> You want to prevent child re-renders when passing expensive values

// Keywords:

// Caches = Caching means React saves (stores) the previous result so it can reuse it
//          instead of calculating it again.

// heavy calculations = code that takes noticeable time to run, these are operations that
//                      use a lot of CPU or process a lot of data.

// Example:

// const expensiveValue = useMemo(() => {
//   return slowCalculation(count);
// }, [count]);

// Think of it like:
// -> "If the dependencies didn't change, return the old result."

// 🔹useCallback:-

// useCallback memorizes (caches) a function so React doesn’t recreate that function
// on every render.

// When it is used? Use useCallback when:

// -> You pass a function to a child component
// -> And that child is wrapped with React.memo()
// -> You want to prevent the child from re-rendering unnecessarily

// Example:

// const handleClick = useCallback(() => {
//   setCount(c => c + 1);
// }, []);

// Think of it like:
// -> “Return the same function unless dependencies change.”

// 🔹useMemo vs useCallback — Comparison Table

// Feature	                            useMemo	                         useCallback

// What it caches?	                 Value / Result	                       Function

// Used for?	                  Expensive calculations	 Stable functions (avoid re-creation)

// Returns?	                       The calculated value	          The same function reference

// Prevents?	                Unnecessary recalculations	    Unnecessary child re-renders when
//                                                                      passing functions

// Works well with?	            Heavy logic, large arrays, 	       React.memo() child components
//                                  filtering, sorting

// Dependency array?	        Recalculates value only if           Recreates function only if
//                                 dependencies change                   dependencies change

// Example output	      number, object, array, computed result	A memoized function like ()=>{..}

// When NOT to use?	          For small/cheap calculations	         When child isn’t memoized or
//                                                                    function isn’t passed down

// Common mistake	        Using it everywhere → unnecessary 	    Thinking it improves performance
//                                      overhead                                on its own

// Easy way to remember	        Memo = Memory of a value	         Callback = Memory of a function

// ⚛️ When should you NOT use useMemo and useCallback?

// Important point: These hooks themselves have a cost (extra memory + extra comparison).
// So using them everywhere can hurt performance instead of helping.

// -> The calculation is cheap/simple
//    Example: a + b, string concatenation, small arrays – no need for useMemo.

// -> The component doesn’t re-render very often
//    Optimization is pointless if the component already rarely re-renders.

// -> The function is not passed to child components
//    If the function is only used inside the component, useCallback usually doesn’t
//    give a real benefit.

// -> You are using them “just in case”
//    Premature optimization makes the code more complex.

// use useMemo and useCallback only when there is a proven or very likely performance issue,
// not by default. Overusing them can actually reduce performance and code readability.

// ⚛️ What is memoization in React?

// Memoization is an optimization technique where the result of a function is
// stored (cached), and when the same inputs occur again, the stored result is
// returned instead of recomputing the function.

// In simple words:

// React remembers the previous value or function so it doesn’t recalculate or
// recreate it again.

// 🔹In React, memoization helps with:

// -> Avoiding expensive calculations on every render             → useMemo
// -> Avoiding creating new function references on every render   → useCallback
// -> Avoiding unnecessary re-renders of components               → React.memo

// 🔹Memoization in React happens through:

// -> useMemo      →    memoizes (stores) a value
// -> useCallback  →    memoizes (stores) a function
// -> React.memo   →    memoizes (stores) a component’s rendered output

// ⚛️ How does React.memo() work?

// React.memo is a higher-order component that wraps a functional component and stops it
// from re-rendering if its props have not changed (based on a shallow comparison).

// Think of it like this: React.memo tells React:

// “If the props are the same as last time, don’t re-render this component.
// Just reuse the previous output.”

// Example:

// -> Without React.memo — always re-renders

// function Child({ count }) {
//   console.log("Child rendered");
//   return <div>{count}</div>;
// }

// -> With React.memo — re-renders only when count changes

// const Child = React.memo(function Child({ count }) {
//   console.log("Child rendered");
//   return <div>{count}</div>;
// });

// ⚛️ Real interview scenario: Why is my component re-rendering even after using memo()?

// -> This is a very common interview question.
// -> Even if we wrap a component with React.memo,
//    it can still re-render for several reasons:

// 🔹1. Props are new references every time (objects/arrays/functions)

// Example:

// <Child data={{ a: 1 }} />
// <Child items={[1, 2, 3]} />
// <Child onClick={() => setCount(c + 1)} />

// -> Here, on every render, new object/array/function references are created.
// -> React.memo does a shallow comparison, so:
//    - { a: 1 } !== { a: 1 }
//    - [] !== []
//    - () => {} !== () => {}
// -> So React thinks: “Props changed → re-render”.

// ✔ Fix: Memoize values and functions:

// const data = useMemo(() => ({ a: 1 }), []);
// const items = useMemo(() => [1, 2, 3], []);
// const handleClick = useCallback(() => setCount(c => c + 1), []);

// <Child data={data} items={items} onClick={handleClick} />

// 🔹2. Parent component keeps changing props

// If the parent state or props change, and that causes real change in child props,
// React.memo won’t stop re-render.

// Example: passing count, user, etc. that update frequently.

// ✔ Fix:

// -> Ensure only necessary props are passed.
// -> Split large components into smaller memoized components.

// 🔹3. Component uses Context or Redux/ Zustand / etc.

// -> If the memoized component calls useContext(SomeContext):
// -> Whenever the context value changes, the component will re-render,
//    even if wrapped in React.memo.

// ✔ Fix:

// -> Reduce how much is stored in context.
// -> Split context into smaller contexts.
// -> Or move heavy components outside of frequently changing context.

// 🔹4. Changing key prop

// -> If the component is rendered in a list and the key changes,
//    React will unmount + remount it.
// -> In that case, React.memo cannot help.

// 🔴 React.memo

// ⚛️ What does React.memo do?

// React.memo is a performance optimization tool for functional components.

// -> React.memo() wraps a component and prevents unnecessary re-renders.
// -> It only re-renders when props actually change
//    (by comparing previous props vs next props).
// -> Think of it as: “Don’t re-render me unless my props have changed.”

// In short:

// -> Memoized component ➝ skips re-render
// -> Works like PureComponent for functional components
// -> Uses shallow comparison of props

// ⚛️ When does memo fail to optimize? (Very important)

// -> React.memo fails when props look the same BUT their reference changes.

// ❌ Cases where optimization fails

// 🔹1. Passing objects

// <Component data={{ name: `Mustafa` }} />

// -> Every render creates a new object, so memo thinks props changed.

// ✔ Fix:

// const data = useMemo(() => ({ name: `Mustafa` }), []);
// return <Component data={data} />;

// Why this works?
// -> useMemo stores the object once.
// -> On re-renders, React reuses the same object reference.
// -> Now React.memo can compare old vs new props correctly.
// -> As long as the dependency array doesn’t change → no re-render.

// 🔹2. Passing arrays

// <Component list={[1, 2, 3]} />

// -> New array → memo sees it as changed.

// ✔ Fix:

// const list = useMemo(() => [1, 2, 3], []);
// <Component list={list} />

// 🔹3. Passing functions (most common)

// <Component onClick={() => handleClick()} />

// -> Functions also create new references → memo re-renders.

// ✔ Fix:

// const onClick = useCallback(() => handleClick(), []);
// <Component onClick={onClick} />;

// 🔹 Summary Table

// Problem (new reference)	               Why memo fails	                       Fix

// Objects {}	                        New object every render	         useMemo(() => obj, [])

// Arrays []	                        New array every render	         useMemo(() => arr, [])

// Functions () => {}	                New function each render	       useCallback(fn, [])

// 🔹4. Parent re-renders too frequently

// -> Even if props don’t change, expensive parent renders can still indirectly cause
//    child renders unless memoized well.

// 🔹5. Heavy comparison cost

// -> If props are big objects, comparing them is expensive → memo can slow down performance
//    instead of improving it.

// ⚛️ Shallow comparison vs Deep comparison?

// 🔹Shallow Comparison (React.memo uses this)

// -> React.memo only does shallow comparison of props.

// What is shallow comparison?

// -> It checks only the reference, not the internal values.
// -> Compares top-level properties only, not nested ones.
// -> It’s fast but not always accurate for complex objects.

// Example:

// prevProps.obj === nextProps.obj

// This checks reference, not the content.

// Result:

// -> If the reference is the same, React.memo skips re-render.
// -> If the reference changes, React.memo re-renders (even if values inside are same).

// Shallow comparison is good for:

// -> Primitive values → number, string, boolean
// -> Stable reference objects using → useCallback, useMemo, memoized objects

// 🔹Deep Comparison

// -> Deep compare checks every nested value inside objects.
// -> But React.memo does NOT perform deep comparison because it’s expensive.

// What is deep comparison?

// -> It checks every nested value inside an object/array.
// -> It compares the actual contents, not just reference.
// -> It walks through the entire object recursively.

// Example:

// prev = { a: 1, b: { c: 10 } }
// next = { a: 1, b: { c: 10 } }

// Why React.memo avoids deep comparison?

// -> Deep comparison is slow.
// -> It causes performance issues in large apps.
// -> It costs more time than simply re-rendering the component.

// 🔹Shallow vs Deep Comparison (Quick Comparison Table)

// Feature	                       Shallow Comparison	               Deep Comparison

// Depth	                       Only first level	                   All nested levels

// Compare	                           Reference	                    Actual values

// Speed	                              Fast 	                             Slow

// Used by	                    React.memo, PureComponent	        Custom compare functions

// Works well for	            Primitives, memoized refs	      Complex deeply nested objects

// React default	                       Yes	                               No

// 🔴 Custom Hooks

// ⚛️ What is a custom hook? Why do we create one?

// -> A custom hook is just a normal JavaScript function whose name starts with use and
//    it reuses some React logic.
// -> When two components need the same logic, we don’t want to copy-paste it.
// -> So we create a function → extract that logic → and reuse it anywhere.
// -> Think of it like a reusable piece of code that contains state, effects, or any React
//    logic you want to share across multiple components.

// Example Use Cases:

// Fetching API data        →   useFetch
// Handling form input      →   useForm
// Managing localStorage    →   useLocalStorage
// Window size listener     →   useWindowSize

// Why do we create a custom hook?

// -> To reuse logic (like fetching data)
// -> To reduce code duplication
// -> To keep components clean and small
// -> To improve readability
// -> To separate UI from logic

// ⚛️ What are the Rules of Hooks?

// 🔹Rule 1. Only call hooks at the top level

// Don’t call hooks inside:
// -> loops
// -> conditions
// -> nested functions
// Always call them at the top of the component.

// 🔹Rule 2. Only call hooks inside React functions

// You can call hooks inside:
// -> Functional components
// -> Custom hooks

// You cannot call hooks inside:
// -> Normal JS functions
// -> Class components
// -> Event handlers

// ⚛️ Why must hooks begin with the word “use”?

// Hooks must start with use because React uses this naming convention to identify it
// as a hook and apply the Rules of Hooks automatically.

// 🔹When React sees a function starting with useSomething(), it knows:

// -> This function uses hooks inside
// -> It must enforce hook rules
// -> It should track state and effects inside this function

// 🔹If a hook does NOT start with use:

// -> React will NOT treat it like a hook
// -> The Rules of Hooks will NOT be applied
// -> You’ll get unpredictable behavior

// 🔴 Conditional Rendering

// Conditional rendering means:
// -> Show something in the UI only when a condition is true.
// -> Just like if-else in JavaScript but used inside JSX.
// -> React gives us different ways to do it.

// 🔹1. Ternary Operator (Most common)

// condition ? <ComponentA /> : <ComponentB />

// When to use:

// -> When you want to show one thing OR another.
// -> Best for if-else situations.

// Example:

// isLoggedIn ? <Dashboard /> : <Login />

// 🔹2. Logical AND (&&) Operator

// condition && <Component />

// When to use:

// -> When you want to show something only if the condition is true.
// -> No else case.

// Example:

// cart.length > 0 && <CartItems />

// 🔹3. Early Return (Very clean and readable)

// Instead of writing nested conditions in JSX,
// you check the condition at the top and return early.

// Example:

// if (!user) {
//   return <Login />;
// }
// return <Dashboard />;

// Why used?

// -> Avoids deeply nested JSX
// -> Makes component easy to read & maintain

// 🔹4. Separate Rendering Functions (Cleanest pattern)

// -> You move conditional logic into separate functions.

// Example:

// function renderContent() {
//   if (isLoading) return <Loading />
//   if (error) return <Error />
//   return <Data />
// }

// return (
//   <div>
//     {renderContent()}
//   </div>
// )

// Why used?

// -> Improves readability
// -> Keeps JSX small and clean
// -> Useful when logic is complex

// 🔴 Lists & Keys

// ⚛️ Why are keys required?

// -> A key is a unique identifier for each element in a list.
// -> Keys help React identify which items in a list have changed, added, or removed.
// -> React uses keys during reconciliation to compare old vs new UI.
// -> Helps React update only the changed items instead of re-rendering the entire list.
// -> Without keys, React may update wrong elements, causing bugs in UI.

// ⚛️ Why using index as key is a bad idea?

// -> Using array index as key can cause wrong UI updates when the list changes.
// -> Index changes when order changes → keys become unstable.
// -> Leads to incorrect re-renders.
// -> Items may maintain wrong state.
// -> Causes performance issues and UI bugs.

// 🔴 API Calls

// ⚛️ Where do you make API calls in React and why?

// We make API calls inside useEffect because it runs after the component renders and
// prevents unnecessary repeated API requests.

// Why?

// -> React renders UI first.
// -> After rendering, React runs side-effects like:
//    - API calls
//    - timers
//    - subscriptions

// If you call API inside component body:

// -> It will run on every render.
// -> It can cause:
//    - infinite loops
//    - multiple API calls
//    - performance issues

// -> So the correct place:

// useEffect(() => {
//   fetchData();
// }, []);

// ⚛️ Why do we use useEffect for fetching data?

// useEffect gives full control over when to execute the API call and prevents
// unnecessary re-renders.

// Key reasons:

// -> useEffect is built for side effects.
// -> Fetching data is not part of UI rendering.
// -> It allows us to control WHEN to fetch:
//    - on mount
//    - on state change
//    - on props change

// Example:

// useEffect(() => {
//   getUsers();
// }, []);

// Benefits:

// -> Avoids infinite re-renders
// -> Helps in cleanup
// -> Runs only when dependencies change

// ⚛️ Cleanup for AbortController?

// What is AbortController?

// -> Used to cancel an ongoing API request if the component unmounts.

// Why?

// -> User may navigate away
// -> Component may unmount
// -> Avoid memory leaks

// What does cleanup do?

// -> Cancels pending request
// -> Ensures no state update after unmount
// -> Prevents “memory leak” warnings

// Example:

// useEffect(() => {
//   const controller = new AbortController();

//   fetch(URL, { signal: controller.signal });

//   return () => {
//     controller.abort(); // cleanup
//   };
// }, []);

// 🔴 React Router DOM

// ⚛️ Difference between BrowserRouter, Routes, and Route?

// 🔹BrowserRouter

// -> It is the parent router component.
// -> It enables routing in a React app.
// -> It listens to URL changes and renders components.

// -> Think of it like:
//    “Router system ON.”

// 🔹Routes

// -> It contains a group of routes.
// -> React router will match only one route at a time.

// -> Think of it like:
//    “A container for all the Route rules.”

// 🔹Route

// -> Maps a specific path to a component.
// -> If path matches → React renders the component.

// Example:

// <Route path="/home" element={<Home />} />

// 🔹Summary Table

// Component	                        Meaning

// BrowserRouter	                Enables routing

// Routes	                        Holds all routes

// Route	                       Defines each route

// ⚛️ How does navigation work in React Router?

// -> When you click a link or change URL
// -> URL changes but page does NOT reload
// -> BrowserRouter listens
// -> It matches the Route
// -> Correct component is rendered

// This is called Client-Side Routing, very fast & smooth.

// ⚛️ How do you get URL params?

// -> Using useParams() hook.
// -> URL Params = Values passed in the URL to identify something dynamic.

// Examples:

// -> Product Page → /product/:id
// -> User Profile → /user/:id
// -> Show Blog → /blog/:slug

// - The value in URL is NOT fixed
// - It is coming from the backend or user click
// - These are called Dynamic Segments.

// -> URL params allow us to build dynamic pages using a single component.

// ⚛️ What is the difference between <Link> and <NavLink>?

// <NavLink> is used when you want to highlight the current page automatically.
// <Link> is just a basic navigation component without styling support.

// 🔹<Link> Component

// -> <Link> is used for normal navigation between pages.
// -> It simply changes the URL without reloading the page.
// -> It doesn’t care which link is currently active.

// Example:

// <Link to="/home">Home</Link>

// 🔹<NavLink> Component

// -> <NavLink> is basically Link + active state feature.
// -> It automatically adds an active class or style when the route matches the current URL.
// -> Used often in navigation menus, sidebars, header tabs.

// Example:

// <NavLink to="/home">Home</NavLink>

// Final summary:

// <Link> ➝ Just navigate.
// <NavLink> ➝ Navigate + show active state.

// ⚛️ What is the useNavigate hook?

// -> A hook used to navigate programmatically.
// -> No need to click on a link.

// Example:

// const navigate = useNavigate();
// navigate("/dashboard");

// Use cases:

// -> After login redirect
// -> After form submit
// -> After API success

// It is similar to:

// -> history.push() in older versions.

// ⚛️ What is nested routing?

// Nested routing means: A component inside another component has its own routes.

// Structure:

// -> Dashboard is parent
// -> profile & settings are child routes

//<Routes>
//  <Route path="/dashboard" element={<Dashboard />}>
//    <Route path="profile" element={<Profile />} />
//    <Route path="settings" element={<Settings />} />
//  </Route>
//</Routes>

// Benefits:

// -> Cleaner code
// -> Real world structure like:

// -> /dashboard/profile
// -> /dashboard/settings

// 🔹Final Takeaways

// -> BrowserRouter starts routing.
// -> Routes is a container of Route.
// -> Route maps URL → Component.
// -> Link for navigation.
// -> NavLink shows active link styling.
// -> useNavigate for redirect using JavaScript.
// -> useParams reads dynamic values from URL.
// -> Nested routing allows child pages inside parent route.

// 🔴 Redux (Redux Toolkit)

// ⚛️ What is Redux? Why do we use it?

// -> Redux is a state management library for JavaScript apps (mostly used with React).
// -> It keeps all important state in one central place called the store.
// -> React components then read from this store and update it using actions.

// Why do we use Redux?

// Single source of truth -> all global state is in one place (store), not in many components.
// Avoid prop drilling    -> no need to pass props through 5 levels just to reach a child.
// Predictable            -> state can only change in a controlled way via reducers and actions.
// Easy to debug & test   -> since logic is in pure functions (reducers), it’s easier to test.
// Time-travel debugging  -> we can see how state changed over time (Redux DevTools).

// ⚛️ What is a reducer?

// A reducer is a pure function that takes:
// -> the current state
// -> an action
// -> and returns a new state

// (state, action) => newState
// It is the only way to change the state in a Redux application.

// Key points:

// -> It does NOT mutate the old state; it returns a new copy.
// -> It has no side effects (no API calls, no random values, etc.).
// -> It is the only place where the Redux state is updated.

// Example:

// const initialState = {
//   counter: 0,
// };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// }

// ⚛️ What is an action?

// -> An action is a simple JavaScript object that describes what happened.
// -> It must have a type field (string) and can have extra data in payload.

// Example:

// { type: "cart/addItem", payload: { id: 1, name: "Book" } }

// Key points:

// -> Actions do not update the state directly.
// -> They are just messages sent to the store.
// -> Reducers listen to actions and decide how to change the state.

// -> “Actions describe what happened; reducers decide how the state changes
//     based on that action.”

// 🔹What is a Payload?

// -> Payload is the data we send along with an action.

// -> An action only tells what happened:
//    { type: "cart/addItem" }

// But usually we need to send extra information.
// For example: which item?

// -> So we add payload:

// {
//   type: "cart/addItem",
//   payload: { id: 1, name: "Book" }
// }

// -> Why do we need a payload?

// Without payload:

// - reducer has no idea what to update
// - reducer can’t modify the state correctly

// Simple analogy:

// -> Think of an action as a package:
// -> type = label on the package
// -> payload = items inside the package

// ⚛️ What is a store?

// The store is the central container that holds the entire Redux state/global state
// of your application.

// It also:

// -> Keeps the current state
// -> Lets you dispatch actions
// -> Lets components subscribe to state changes

// In short:

// “The store is the single source of truth for our app’s global state.”

// Example:

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers/rootReducer'; // Your combined reducers

// const store = configureStore({
//   reducer: rootReducer,
// });

// ⚛️ Why is Redux called a “predictable state container”?

// Redux is called predictable because:

// -> State is read-only – you cannot change state directly; you must dispatch actions.
// -> State changes are done by pure reducers:– same state + same action → always same result.
// -> Single source of truth – all global state lives in one store.

// So:

// Given:
// -> the initial state
// -> the sequence of actions

// You can exactly predict what the final state will be.
// That’s why we call it a predictable state container.

// ⚛️ Difference between Redux and React Context?

// 🔹 React Context:

// -> Built into React.
// -> Good for simple global values:
//    - theme (light/dark),
//    - current user,
//    - language, etc.

// -> Not opinionated about how to update state.
// -> Can cause re-renders of many components if not used carefully.

// 🔹 Redux:

// -> A separate library for managing state.
// -> Designed for complex/global state and business logic.

// Has a clear pattern:

// store → actions → reducers.

// -> Comes with DevTools, middleware, time-travel, etc.
// -> Better for larger apps with complex state and logic.

// In short:

// “React Context is good for passing simple data globally. Redux is better when your
// app has complex state and you need predictable updates, debugging tools, and a
// structured way to manage business logic.”

// ⚛️ Why is Redux Toolkit (RTK) recommended over classic Redux?

// -> Redux Toolkit is the official, recommended way to write Redux now.
// -> RTK reduces boilerplate, avoids common mistakes, and gives you modern tools
//    like createSlice and createAsyncThunk, so it’s easier and safer than classic Redux.

// Redux Toolkit is preferred because:

// -> Less boilerplate
//    No need to manually write tons of action types, action creators, switch cases.

// -> Uses Immer under the hood
//    You can “mutate” state in reducers, but RTK converts it to immutable updates internally.

// -> Batteries included
//    - configureStore – sets up the store with DevTools & middleware.
//    - createSlice – generates actions + reducer together.
//    - createAsyncThunk – helps with async logic (API calls).

// -> Best practices by default
//    Encourages good file structure and patterns.

// ⚛️ What is createSlice in RTK?

// createSlice is a function in Redux Toolkit that combines:

// -> state initial value
// -> reducer functions
// -> and action creators

// into one slice of the Redux store.

// ⚛️ What are useSelector and useDispatch?

// -> These are React-Redux hooks used inside functional components.

// 🔹useSelector:

// -> useSelector lets a component subscribe to the Redux store and read specific
//    pieces of state.
// -> useSelector is used to read data from the Redux store.
// -> You pass a function that selects a part of the state.
// -> Component will re-render when that selected part of the state changes.

// Example:

// const cartItems = useSelector((state) => state.cart.items);

// 🔹useDispatch:

// -> useDispatch is used to send actions to the Redux store so that reducers can
//    update the state.
// -> useDispatch gives you the dispatch function.
// -> You use it to dispatch actions to the store.

// Example:

// const dispatch = useDispatch();
// dispatch(addItem({ id: 1, name: "Book" }));

// 🔹Quick Summary

// -> Redux = global state manager.
// -> Store = holds all global state.
// -> Actions = tell what happened.
// -> Payload = extra data sent with action.
// -> Reducer = pure function that updates state.
// -> RTK = modern, simplified Redux.
// -> createSlice = combines reducers + actions + initial state in one place.
// -> useSelector = read data from Redux store in a component.
// -> useDispatch = send actions to the store to update the state.
