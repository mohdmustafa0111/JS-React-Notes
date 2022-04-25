// React JS - The Public Realease❗
// Facebook publicly open sourced ReactJS in May 2013.

// React is a Javascript library for building user interfaces.
// React is all about Component.
// Write once, use everywhere.

// Que: What is JSX ? ❓

// Ans: JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript.
// It allows us to directly write HTML in React (within JavaScript code).

// It always return single element
// use Div or React Fragment to wrap all your JSX Code
// ClassName in place of class
// Need to close all non closing Tags in JSX
// Use camelCase for attributes

// Que: What is props ? ❓

// Ans: (Props stand for properties).
// React allows us to pass information from one component to other Component
// using something called props.
// - Props are basically kind of global variable or object.
// - They are read-only components.
// - It gives a way to pass data from one component to other components.
// - Props are immutable so we cannot modify the props from inside the component.

// Que: What is useState Hook ? ❓

// Ans: React useState is the React Hook that allows you to manage the state
// within functional components.

// useState is a hook that lets you add state to a functional component. It accepts
// an argument which is the initial value of the state property and returns the
// current value of state property and a method which is capable of updating that state property.

// The two most used hooks are the useState() hook, which allows functional components to
// have a dedicated state of their own, and the useEffect() hook, which allows functional
// components to manipulate DOM elements before each render.
// (almost like one gets to do it in lifecycle functions).

// Refer Thapa video to understand useState. (4 hours React dedicated tutorial)

// Que: Difference between functional component & class component ? ❓

// Ans: Functional Component 👇

// - A functional component is just a plain JavaScript function that accepts props as an argument
// and returns a React element.
// - There is no render method used in functional components.
// - Also known as Stateless components as they simply accept data and display them in some form,
//  that they are mainly responsible for rendering UI.
// - Hooks can be easily used in functional components.
// - Constructors are not used.

//  class component 👇

// - A class component requires you to extend from React. Component and create a render function
// which returns a React element.
// - It must have the render() method returning HTML
// - Also known as Stateful components because they implement logic and state.
// - It requires different syntax inside a class component to implement hooks.
// - Constructor are used as it needs to store state.

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

// 👉 Prop Drilling :- State should be held by the highest parent component in the stack that
// requires access to the state.To illustrate, we have many nested components. The component
// at the top and bottom of the stack need access to the state. To do this without Context,
// we will need to pass the state as "props" through each nested component.
// This is called "prop drilling".

// Que: What is useEffect Hook ? ❓

// Ans: The motivation behind the introduction of useEffect Hook is to eliminate the
// side-effects of using class-based components.
// Basically effect hook let you perform side effects in function component.
// Hooks are a new addition in React 16.8.
// They let you use state and other React features without writing a class.

// What are side-effects ?
// Side effects are basically anything that affects something outside of the scope of
// current function (or outside the component) that is being executed.

// For example,
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
// components control. So things like getting or setting local storage, or making API calls to
// fetch some data etc.Those things are outside of the components control, to mutate local storage
// in your component would be considered a side effect of the component.

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
// - Accessing the DOM nodes or React elements
// - keeping a mutable variable.

// The useRef is a hook that allows to directly create a reference to the DOM element
// in the functional component.

// There are a few good use cases for refs:
// - Managing focus, text selection, or media playback.
// - Triggering imperative animations.
// - Integrating with third-party DOM libraries.
