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
