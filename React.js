// React JS - The Public Realease❗❓
// Jordan Walke, a software engineer who was working for Facebook created React. It was first deployed
// on the news feed of Facebook in 2011 and on Instagram in 2012. Facebook publicly open sourced ReactJS
// in May 2013.

// Que: What is React ? ❓

// Ans: React is a front-end and open-source JavaScript library which is useful in developing user
// interfaces specifically for applications with a single page. It is helpful in building complex
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

// - SEO friendly: React allows developers to develop engaging user interfaces that can be easily
// navigated in various search engines. It also allows server-side rendering, which boosts the
// SEO of an app.

// - Reusable components: React uses component-based architecture for developing applications.
// Components are independent and reusable bits of code. These components can be shared across various
// applications having similar functionality. The re-use of components increases the pace of development.

// - Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools,
// libraries, and architecture for developing an application based on your requirement.

// Que: What is the virtual DOM ? How does react use the virtual DOM to render the UI ? ❓

// As stated by the react team, virtual DOM is a concept where a virtual representation of the real DOM
// is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

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

// Que: What is JSX ? ❓

// Ans: JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript.
// It allows us to directly write HTML in React (within JavaScript code).

// It allows us to write HTML inside JavaScript and place them in the DOM without using functions
// like appendChild( ) or createElement( ).

// It always return single element
// use Div or React Fragment to wrap all your JSX Code
// ClassName in place of class
// Need to close all non closing Tags in JSX
// Use camelCase for attributes

// Que: What is React Component ? ❓

// Ans: A Component is one of the core building blocks of React. In other words, we can say that every
// application you will develop in React will be made up of pieces called components. Components
// make the task of building UIs much easier. You can see a UI broken down into multiple individual
// pieces called components and work on them independently and merge them all in a parent component
// which will be your final UI.

// Que: What is props ? ❓

// Ans: (Props stand for properties).
// React allows us to pass information from one component to other Component
// using something called props.
//  Props are the data passed from a parent component into a child component.
// - Props are basically kind of global variable or object.
// - They are read-only components.
// - It gives a way to pass data from one component to other components.
// - Props are immutable so we cannot modify the props from inside the component.

// Que: What is useState Hook ? ❓

// Ans: React useState is the React Hook that allows you to manage the state
// within functional components.

// The useState() is a built-in React Hook that allows you for having state variables in
// functional components. It should be used when the DOM has something that is dynamically
// manipulating/controlling.

// useState is a hook that lets you add state to a functional component. It accepts
// an argument which is the initial value of the state property and returns the
// current value of state property and a method which is capable of updating that state property.

// The two most used hooks are the useState() hook, which allows functional components to
// have a dedicated state of their own, and the useEffect() hook, which allows functional
// components to manipulate DOM elements before each render.
// (almost like one gets to do it in lifecycle functions).

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

// Ans: PropTypes are a mechanism to ensure that components use the correct data type and
// pass the right data, and that components use the right type of props, and that receiving
// components receive the right type of props.

// Que: What is Context or useContext Hook in React ? ❓

// Ans: React Context is a way to manage state globally.
// Context provides a way to pass data through the component tree without having to pass
// props down manually at every level.
// In order to use the Context in a child component, we need to access it using the useContext Hook.

// React Context API allows you to easily access data at different levels of the component tree,
// without passing prop to every level.

// Que: What is prop drilling in React ? ❓

// Prop drilling is a situation where data is passed from one component through multiple
// interdependent components until you get to the component where the data is needed.

// Prop Drilling :- State should be held by the highest parent component in the stack that
// requires access to the state. To illustrate, we have many nested components. The component
// at the top and bottom of the stack need access to the state. To do this without Context,
// we will need to pass the state as "props" through each nested component.
// This is called "prop drilling".

// Que: What is useEffect Hook ? ❓

// Ans: The motivation behind the introduction of useEffect Hook is to eliminate the
// side-effects of using class-based components.
// Basically useEffect hook let you perform side effects in function component.
// Hooks are a new addition in React 16.8.
// They let you use state and other React features without writing a class.

// What are side-effects in React ?
// Side effects are basically anything that affects something outside of the scope of
// current function (or outside the component) that is being executed.

// For example:
//  - tasks like updating the DOM manually,
//  - API requests to our backend service (Data Fetching),
//  - Calls to our authentication service,
//  - Setting up subscriptions or timers, etc can be lead to unwarranted side-effects.

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

// Que: What is Redux ? ❓

// Ans: A third party state manager.
// Redux is a state management tool for JavaScript applications. It is more commonly used
// with ReactJS but is also compatible with many other frameworks such as Angular, Vue, Preact,
// as well as vanilla JavaScript. It is important to note that even though React and Redux
// are frequently used together, they are independent of each other!

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

// There are two main uses of useRef :-
// - It is used to access the DOM nodes or React elements directly
// - keeping a mutable variable.

// The useRef is a hook that allows to directly create a reference to the DOM element
// in the functional component.

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

// Strict mode checks are run in developement mode only,
// they do not impact the production build.

// Que: What is React Fragments ? ❓

// Ans: A common pattern in React is for a component to return multiple elements.
// Fragments let you group a list of children without adding extra nodes to the DOM.

// React fragments serve as a cleaner alternative to using unnecessary divs in our code.
// These fragments do not produce any extra elements in the DOM, which means that a fragment’s
// child components will render without any wrapping DOM node.
