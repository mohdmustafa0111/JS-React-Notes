// React JS - The Public Release❗❓
// Jordan Walke, a software engineer who was working for Facebook created React. It was first deployed
// on the news feed of Facebook in 2011 and on Instagram in 2012. Facebook publicly open sourced ReactJS
// in May 2013.

// Que: What is React ? ❓

// Ans: React is a front-end and open-source JavaScript library which is used for building user
// interfaces specifically for single page applications. It is helpful in building complex
// and reusable user interface(UI) components of mobile and web applications as it follows the
// component-based approach.

// Que: What are the advantages of using React ? ❓

// - Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view.
// As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the
// data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much
// faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the
// efficiency of the app improves.

// - Gentle learning curve: React has a gentle learning curve when compared to frameworks like Angular.
// Anyone with little knowledge of javascript can start building web applications using React.

// - SEO friendly: With tools like Next.js, React supports server-side rendering, which improves
// the initial page load time and SEO performance by pre-rendering pages on the server before
// sending them to the client.

// - Reusable components: React uses component-based architecture for developing applications.
// Components are independent and reusable bits of code. These components can be shared across various
// applications having similar functionality. The re-use of components increases the pace of
// development.

// - Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the
// tools, libraries, and architecture for developing an application based on your requirement.

// Overall, React simplifies the process of building complex user interfaces by breaking them down
// into small, reusable components and efficiently managing updates with the virtual DOM.

// Que: What is the virtual DOM ? How does react use the virtual DOM to render the UI ? ❓

// As stated by the react team, virtual DOM is a concept where a virtual representation of the real DOM
// is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

// here's a simplified explanation of how the virtual DOM works in React JS:
// React Rendering Process: ❓

// 1. Initial Render: When you first load a React app, it creates a virtual copy of the actual
// webpage's structure called the virtual DOM.

// 2. State Changes: When something changes, like you click a button or data updates, React doesn't
// immediately update the real webpage. Instead, it updates the virtual DOM.

// 3. Diffing: React compares the new virtual DOM with the previous one to see what's changed.
// It's like spot the difference!

// (After identifying the differences, React updates only the parts of the real DOM that need to
// change, rather than re-rendering the entire DOM. This is called selective rendering.)

// 4. Minimize Changes: React figures out the smallest set of changes needed to update the real
// webpage based on the differences between the old and new virtual DOM.

// 5. Update the Real DOM: Finally, React makes those small changes to the actual webpage's DOM.
// This process is quicker because React only touches the parts of the webpage that need updating,
// not the whole thing.

// By using the virtual DOM, React makes updating webpages faster and smoother,
// giving users a better experience.

// Why was virtual DOM introduced ?

// DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow
// when compared to other operations in JavaScript. The efficiency of the application gets affected
// when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM
// even when a small part of the DOM changes.

// For example, consider a list that is being rendered inside the DOM. If one of the items in the
// list changes, the entire list gets rendered again instead of just rendering the item that was
// changed/updated. This is called inefficient updating.

// To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

// Que: What are keys in React ? ❓

// Ans: A key is a special string attribute that needs to be included when using lists of elements.

// Importance of keys -

// Keys help react identify which elements were added, changed or removed.
// Keys should be given to array elements for providing a unique identity for each element.
// Without keys, React does not understand the order or uniqueness of each element.
// With keys, React has an idea of which particular element was deleted, edited, and added.
// Keys are generally used for displaying a list of data coming from an API.

// Note - Keys used within arrays should be unique among siblings. They need not be globally unique.

// Que: What is JSX and why is it used ? ❓

// Ans: JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript that resembles
// HTML. It allows developers to write HTML-like syntax directly within JavaScript code and place
// them in the DOM without using functions like appendChild( ) or createElement( ).

// - Improved Readability and Familiarity
// HTML-Like Syntax: JSX syntax looks similar to HTML, making it easier for developers who
// are familiar with HTML to write React components without a steep learning curve.
// Self-Descriptive: It allows developers to visualize the component structure and the resulting
// UI directly in the code, making it more intuitive to understand.

// Que: What is React Component ? ❓

// Ans: A React Component is a reusable, self-contained building block that represents a part of
// the user interface in a React application. Components allow developers to split the UI into
// independent, isolated pieces that can be managed and maintained separately. You can see a
// UI broken down into multiple individual pieces called components and work on them independently
// and merge them all in a parent component which will be your final UI.

// Que: What are Pure Components ? ❓

// Ans: Optimize the rendering performance of components by reducing unnecessary re-renders.

// Que: What is props ? ❓

// Ans: (Props stand for properties).
// React allows us to pass information from one component to other Component
// using something called props.
//  Props are the data passed from a parent component into a child component.
// - Props are basically kind of global variable or object.
// - They are read-only components.
// - It gives a way to pass data from one component to other components.
// - Props are immutable so we cannot modify the props from inside the component.

// What is state in React ? ❓

// Ans: State in React is a JavaScript object that holds data that can change over time.
// It's a fundamental concept in React components, used to represent the component's
// current state and trigger re-renders when it changes.

// Que: What is useState Hook ? ❓

// Ans: React useState is the React Hook that allows you to manage the state
// within functional components.

// The useState() is a built-in React Hook that allows you for having state variables in
// functional components. It should be used when the DOM has something that is dynamically
// manipulating/controlling.

// Here's how it works :-

// 1. Importing useState: First, you import the useState hook from the React library.

// 2. State Initialization: You call the useState function with an initial state value.
// This function returns an array with two elements: the current state value and a function
// to update that state value.

// 3. State Management: You can use the state value in your component, and whenever you want to
// update the state, you call the function returned by useState with the new value. React will
// then re-render the component with the updated state.

// What are the rules that must be followed while using React Hooks ?

// Ans: There are 2 rules which must be followed while you code with Hooks:-
// - React Hooks must be called only at the top level. It is not allowed to call them inside the nested
//   functions, loops, or conditions.
// - It is allowed to call the Hooks only from the React Function Components.

// Refer Thapa video to understand useState. (4 hours React dedicated tutorial)

// Que: Difference between functional component & class component ? ❓

// Ans: Functional Component 👇

// Syntax (Deceleration) :-

// The most obvious one difference is the syntax. A functional component is just a plain JavaScript
// function which accepts props as an argument and returns a React element.

// A class component requires you to extend from React.Component and create a render function
// which returns a React element.

// Handling Props :-

// In functional components, the handling of props is pretty straightforward. Any prop provided
// as an argument to a functional component can be directly used inside HTML elements:

// this keyword is used in the case of class components.

// Handling State :-

// Functional components use React hooks to handle state. It uses the useState hook to set the
// state of a variable inside the component:

// We cannot use React Hooks inside class components,
// therefore state handling is done very differently in a class component:
// For updating the state, we need to first bind the addStudent function to this. Only then,
// we will be able to use the setState function which is used to update the state.

// Why should I use functional components at all ?

// - Functional component are much easier to read and test because they are plain JavaScript
// functions without state or lifecycle-hooks
// - You end up with less code
// - They help you to use best practices. It will get easier to separate container and presentational
//  components because you need to think more about your component’s state if you don’t have access
//  to setState() in your component

// Que: What Are PropTypes In React ? ❓

// Ans: PropTypes in React are a type-checking mechanism used to ensure that the props passed
// to a component are of the correct type. They help catch bugs by validating the props during
// development, ensuring that components receive the correct data types and structures.
// If the props don't match the expected type, React will issue warnings in the console,
// making debugging easier.

// Que: What is Context or useContext Hook in React ? ❓

// Ans: React Context is a way to manage state globally.
// Context provides a way to pass data through the component tree without having to pass
// props down manually at every level.
// In order to use the Context in a child component, we need to access it using the useContext Hook.

// React Context API allows you to easily access data at different levels of the component tree,
// without passing prop to every level.

// Que: What is prop drilling in React ? ❓

// Prop drilling in React refers to the process of passing data (or functions) from a parent
// component to deeply nested child components through several intermediate layers, even if
// those intermediate components don't need the data themselves. It occurs when the data is
// needed in a deeply nested component, but you must pass it down through multiple levels of
// components that don't directly need or use the data.

// App -> Parent -> Child -> Grandchild

// Consequences of prop drilling:

// - Increased complexity: The code becomes more complex as props are passed through multiple levels.
// Performance issues: In large applications, passing props through many components can impact
// performance.
// - Reduced maintainability: It becomes harder to understand and modify the code as the relationships
// between components become more convoluted.

// Alternatives to prop drilling:

// - Context API: The Context API provides a way to share data between components without explicitly
// passing props. It's particularly useful for global state that needs to be accessed by multiple
// components.
// - Redux or other state management libraries: These libraries offer more structured and centralized
// ways to manage state in React applications, reducing the need for prop drilling.

// Que: What is useEffect Hook ? ❓

// Ans: The useEffect hook in React.js is a built-in hook that allows you to perform
// side effects in function components. Side effects are actions that occur outside of the
// regular flow of the application, such as

// 1. fetching data from a server or API's
// 2. Directly manipulating the DOM (rarely needed in modern React)
// 3. Setting up subscriptions or timers

// 👉 What does useEffect do ? ❓

// Ans: By using this Hook, you tell React that your component needs to do something after render.
// React will remember the function you passed and call it later after performing the DOM updates.

// 👉 Why is useEffect called inside a component ? ❓

// Ans: Placing useEffect inside the component lets us access the count state variable
// (or any props) right from the effect. We don’t need a special API to read it —
// it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing
// React-specific APIs where JavaScript already provides a solution.

// 👉 Does useEffect run after every render ? ❓

// Ans: Yes! By default, it runs both after the first render and after every update.

// 👉 2nd Explanation in lucid language:-
// Our components are functions and a side effect would be manipulating something outside of the
// components control. So things like
// - getting or setting local storage,
// - or making API calls to fetch some data etc.
// Those things are outside of the components control, to mutate local storage
// in your component would be considered a side effect of the component.

// IMPORTANT 👇
// - by passing empty dependency means App component will run ONCE when it loads, and never again.
// - The useEffect() will execute the callback only if there is a change in dependencies
//   in between renderings.
// - Where the first argument callback represents the function having the logic of side-effect and
//   it will be immediately executed after changes were being pushed to DOM. The second argument
//   dependencies represent an optional array of dependencies.

// Que: What is useReducer Hook in React ? ❓

// Ans: The useReducer Hook is the better alternative to the useState hook and is generally
// more preferred over the useState hook when you have complex state-building logic like
// big e-commerce web app or when the next state value depends upon its previous value or
// when the components are needed to be optimized.

// The useReducer hook takes three arguments including reducer, initial state, and the function
// to load the initial state lazily.

// Syntax:
// const [state, dispatch] = useReducer(reducer, initialArgs, init);

// Here reducer is the user-defined function that pairs the current state with the dispatch method
// to handle the state, initialArgs refers to the initial arguments and init is the function to
// initialize the state lazily.

// While action types allow you tell your reducer what action it should take,
// the payload is the data that your reducer will use to update the state.

// Que: What is Redux ? ❓

// Ans: A third party state manager.

// Redux is a state management library for JavaScript applications, and it is often used with React
// to manage the state of the application in a predictable way. Redux helps you manage the state
// of your application by providing a centralized store and a structured way to update and
// access the state.

// It is important to note that even though React and Redux are frequently used together,
// but they are independent of each other!

// Key Concepts of Redux -> Store, state, actions, reducers, dispatch.

// 1. Store

// -> The single source of truth for your application's state. The store holds the entire state
// tree of the application.
// -> You can create a store using the createStore function.

// 2. State

// -> The state is the data structure that holds all the information about your application.
// The state is immutable, meaning it should not be changed directly.

// 3. Actions

// -> Actions are plain JavaScript objects that describe an intention to change the state.
// Each action has a type property that indicates the type of action being performed.
// -> Actions may also contain a payload with additional information.

// 4. Reducers

// -> Reducers are pure functions that take the current state and an action as arguments and
// return a new state.
// -> Reducers specify how the application's state changes in response to actions.

// 5. Dispatch

// Dispatch is a function that sends an action to the Redux store. When an action is dispatched,
// the Redux store calls the reducer to determine the new state.

// Using Redux with React :-

// To use Redux in a React application, you typically use the react-redux library,
// which provides bindings to integrate Redux with React components.

// 1. Provider:- The Provider component makes the Redux store available to the
// rest of your application.

// 2. useSelector:- The useSelector hook allows you to extract data from the Redux store state.

// 3. useDispatch:- The useDispatch hook allows you to dispatch actions to the Redux store.

// Que: What is Redux Toolkit ? ❓

// Ans: Redux Toolkit is a set of tools and best practices for using Redux, a popular state
// management library for JavaScript applications. It is designed to simplify the setup and
// usage of Redux, reduce boilerplate code, and promote best practices. Redux Toolkit provides
// utilities for store configuration, creating reducers and actions, handling asynchronous
// actions, and more.

// Key Features of Redux Toolkit:

// - configureStore
// - createSlice
// - createAsyncThunk
// - built-in middleware
// - and createEntityAdapter

// 1. configureStore:

// - Simplifies store setup and configuration.
// - Automatically sets up Redux DevTools and includes default middleware like Redux Thunk.
// - Provides a single function for creating the Redux store with good default settings.

// 2. createSlice:

// - Simplifies the creation of reducers and action creators.
// - Automatically generates action creators and action types based on the reducers defined
// in the slice.

// 3. createAsyncThunk:

// - Simplifies handling of asynchronous actions.
// - Automatically dispatches lifecycle actions (pending, fulfilled, rejected)
// based on the promise status.

// 4. Built-in Middleware:

// - Includes Redux Thunk for handling asynchronous logic out of the box.
// - Allows adding additional middleware if needed.

// 5. createEntityAdapter:

// Provides a set of functions to manage normalized state structures, such as
// handling collections of items.

// Advantages of Redux Toolkit:

// - Reduces Boilerplate: Simplifies the setup and usage of Redux by reducing repetitive code.
// - Promotes Best Practices: Encourages writing better and more maintainable Redux code.
// - Enhanced Developer Experience: Provides a better development experience with integrated tools
// and utilities.
// - Default Middleware: Includes commonly used middleware like Redux Thunk out of the box.
// - Simplified Async Logic: Makes handling asynchronous actions straightforward with
// createAsyncThunk.

// Que: What is useNavigate Hook ? ❓
// Ans: useNavigate is a new hook introduced in React Router v6 and it is extremely useful
// and easy to use. useNavigate is part of React Router and has replaced useHistory,
// although it is similar to useHistory, but with more useful features.

// Uses:
// - Go to the previous or next pages
// - Redirect user to a specific Url

// Que: What is useLocation Hook ? ❓

// Ans: Briefly, this is like a state that always returns your current URL. If the URL is
// changed, the useLocation will be updated as well. useLocation doesn't have any function
// like useHistory, and it is just to grab information about your current URL.

// What is useRef Hook ? ❓

// useRef is like a box for holding a value that doesn’t cause re-renders when it changes.
// It is commonly used to directly manipulate DOM elements or to keep a mutable value across renders.
// The value inside the useRef box can be accessed and changed via the .current property.

// This simple concept can be very powerful in React for managing DOM interactions and preserving
// state without triggering re-renders.

// There are a few good use cases for refs:
// - Managing focus, text selection, or media playback.
// - Triggering imperative animations.
// - Integrating with third-party DOM libraries.

// Que: What is useParams hook in React router ? ❓

// Ans: The useParams() hook is a React Router hook that allows you to access the parameters
// of the current URL. This can be useful if you want to dynamically render content based on the URL
// parameters. For example, if you have a blog application, you may want to render different articles
// based on the article ID in the URL.

// Que: What is Strict Mode in React ? ❓

// Ans: StrictMode is a tool for highlighting potential problems in an application.
// StrictMode does not render any visible UI. It activates additional checks and
// warnings for its descendants.

// Strict mode checks are run in development mode only,
// they do not impact the production build.

// Que: What is React Fragments ? ❓

// Ans: In JSX, you can only return a single element, so when you need to render multiple sibling
//  elements, developers often use a wrapper element like a <div> or another HTML tag. However, this
//  adds unnecessary markup to the DOM, which can lead to unwanted side effects, such as affecting
//  CSS layouts or adding unnecessary complexity to the HTML structure.

// React Fragments solve this problem by allowing you to group a list of children without adding
// extra nodes to the DOM.

// Explicit Syntax: <Fragment> code </Fragment>
// Shorthand Syntax: <> code </>

// Que: What are the different ways to style a React component ? ❓

// Ans: Inline Styling :- We can directly style an element using inline style attributes.
// Make sure the value of style is a JavaScript object.

// Using JavaScript object :- We can create a separate JavaScript object and set the desired
// style properties. This object can be used as the value of the inline style attribute.

// CSS Stylesheet :- We can create a separate CSS file and write all the styles for the component
// inside that file. This file needs to be imported inside the component file.

// Que: Name a few techniques to optimize React app performance ? ❓

// Ans: Lazy Loading :-
// It is a technique used to reduce the load time of a React app.
// Lazy loading helps reduce the risk of web app performances to a minimum.

// Using React.PureComponent :-
// It is a base component class that checks the state and props of a component to know whether the
// component should be updated.
// Instead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders
// of a component unnecessarily.

// Using useMemo( ) :-
// It is a React hook that is used for caching CPU-Expensive functions.
// Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a
// component, which can lead to slow rendering.
// useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function
// gets called only when it is needed.

// Maintaining State Colocation :-
// This is a process of moving the state as close to where you need it as possible.
// Sometimes in React app, we have a lot of unnecessary states inside the parent component which makes
// the code less readable and harder to maintain. Not to forget, having many states inside a single
// component leads to unnecessary re-renders for the component.
// It is better to shift states which are less valuable to the parent component,
// to a separate component.

// Que: What are higher-order components in React ? ❓

// Ans: A higher-order component (HOC) is an advanced technique in React for reusing component logic.
// HOCs are not part of the React API, per se. They are a pattern that emerges from React’s
// compositional nature.

// Concretely, a higher-order component is a function
// that takes a component and returns a new component.

// When do we need a Higher Order Component ?

// While developing React applications, we might develop components that are quite similar to each other
// with minute differences. In most cases, developing similar components might not be an issue but,
// while developing larger applications we need to keep our code DRY, therefore, we want an abstraction
// that allows us to define this logic in a single place and share it across components. HOC allows us
// to create that abstraction.

// A Higher-Order Component (HOC) in React is a pattern that involves a function which takes a
// component as input and returns a new component with additional functionality. It is commonly
// used for reusing component logic.

// Que: What is React Router ? ❓

// Ans: React Router refers to the standard library used for routing in React. It allows us for
// building a single-page web application in React with navigation without even refreshing the page
// when the user navigates. It also allows to change the browser URL and will keep the user interface
// in sync with the URL. React Router will make use of the component structure for calling the components,
// using which appropriate information can be shown. Since React is a component-based framework,
// it’s not necessary to include and use this package. Any other compatible routing library would
// also work with React.

// The major components of React Router are given below:

// - BrowserRouter: It is a router implementation that will make use of the HTML5 history API (pushState,
//  popstate, and event replaceState) for keeping your UI to be in sync with the URL. It is the parent
// component useful in storing all other components.
// - Routes: It is a newer component that has been introduced in the React v6 and an upgrade of the
// component.
// - Route: It is considered to be a conditionally shown component and some UI will be rendered by this
// whenever there is a match between its path and the current URL.
// - Link: It is useful in creating links to various routes and implementing navigation all over the
// application. It works similarly to the anchor tag in HTML.

// Que: Explain conditional rendering in React ? ❓

// Ans: Conditional rendering refers to the dynamic output of user interface markups based on a
// condition state. It works in the same way as JavaScript conditions. Using conditional rendering,
// it is possible to toggle specific application functions, API data rendering, hide or show elements,
// decide permission levels, authentication handling, and so on.

// There are different approaches for implementing conditional rendering in React. Some of them are:

// - Using if-else conditional logic which is suitable for smaller as well as for medium-sized
// applications.
// - Using ternary operators, which takes away some amount of complication from if-else statements
// - Using element variables, which will enable us to write cleaner code.

// Que: What is NPM (Node Package Manager) ? ❓

// Ans: NPM, or Node Package Manager, is the default package manager for the JavaScript runtime
// environment, Node.js. It's essentially a vast repository of pre-written code packages that
// developers can easily access and use in their projects, saving them tons of time and effort.

// NPM is like a giant warehouse with tons of pre-written code modules, like "a button that
// logs in," "a map that shows directions," or "a calculator that adds numbers." You can easily
// search for these modules (called packages) and download them into your project, just like grabbing
// a LEGO piece from the bin.
