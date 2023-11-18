import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  quizTopic = [
    {
      topicName:"Javascript",
      image:'assets/js.png'
    },
    {
      topicName:"Python",
      image:'assets/python.png'
    },
    {
      topicName:"Angular",
      image:'assets/angular.png'
    },
    {
      topicName:"TailwindCSS",
      image:'assets/tailwind.png'
    },
    {
      topicName:"React",
      image:'assets/react.png'
    },
  ]

  quiz = [
    {
      id: 1,
      topic: "Angular",
      question: "What is the purpose of the ngZone service in Angular?",
      options: [
        "To manage the change detection and rendering of Angular components",
        "To handle asynchronous operations and optimize performance",
        "To provide a zone for running code outside Angular's change detection",
        "To manage the state of the application and handle global events"
      ],
      answer: "To provide a zone for running code outside Angular's change detection"
    },
    {
      id: 2,
      topic: "Angular",
      question: "What is the purpose of the trackBy function in an ngFor loop?",
      options: [
        "To track changes in the looped items and update the DOM efficiently",
        "To provide a unique identifier for each item in the loop",
        "To control the iteration of ngFor and specify the start and end values",
        "To handle errors and exceptions that occur during the loop execution"
      ],
      answer: "To track changes in the looped items and update the DOM efficiently"
    },
    {
      id: 3,
      topic: "Angular",
      question: "What is the purpose of the providedIn property in Angular's dependency injection?",
      options: [
        "To specify the module where the dependency is provided",
        "To control the scope of the injected dependency",
        "To indicate the service's provider class",
        "To enable tree-shaking and optimize bundle size"
      ],
      answer: "To specify the module where the dependency is provided"
    },
    {
      id: 4,
      topic: "Angular",
      question: "What is the purpose of the async pipe in Angular?",
      options: [
        "To handle asynchronous operations and subscribe to observables",
        "To create asynchronous iterators in template loops",
        "To manage the change detection and update the DOM",
        "To enable lazy loading and code splitting"
      ],
      answer: "To handle asynchronous operations and subscribe to observables"
    },
    {
      id: 5,
      topic: "Angular",
      question: "What is the purpose of the ng-content directive?",
      options: [
        "To project content into a component's template",
        "To create dynamic components at runtime",
        "To handle routing and navigation within an Angular application",
        "To provide styling and layout options for components"
      ],
      answer: "To project content into a component's template"
    },
    {
      id: 6,
      topic: "Angular",
      question: "What is the purpose of the Renderer2 service in Angular?",
      options: [
        "To manipulate the DOM directly and perform low-level operations",
        "To handle user interactions and gestures in the application",
        "To provide a centralized location for managing application state",
        "To create and manage animations and transitions"
      ],
      answer: "To manipulate the DOM directly and perform low-level operations"
    },
    {
      id: 7,
      topic: "Angular",
      question: "What is the purpose of the ViewContainerRef in Angular?",
      options: [
        "To create and manage dynamic components at runtime",
        "To handle form validation and error handling",
        "To control the visibility and display of elements in the DOM",
        "To encapsulate reusable UI components and styles"
      ],
      answer: "To create and manage dynamic components at runtime"
    },
    {
      id: 8,
      topic: "Angular",
      question: "What is the purpose of the @ViewChild decorator in Angular?",
      options: [
        "To query and access child components or elements from the parent component",
        "To define and bind input properties for a component",
        "To handle form submission and validation",
        "To encapsulate data and behavior within a component"
      ],
      answer: "To query and access child components or elements from the parent component"
    },
    {
      id: 9,
      topic: "Angular",
      question: "What is the purpose of the ng-template directive?",
      options: [
        "To create reusable component templates",
        "To define structural directives and create custom control-flow structures",
        "To provide dependency injection and manage application state",
        "To handle navigation and routing within an Angular application"
      ],
      answer: "To define structural directives and create custom control-flow structures"
    },
    {
      id: 10,
      topic: "Angular",
      question: "What is the purpose of the ngAfterViewInit lifecycle hook?",
      options: [
        "To perform initialization tasks after a component's view has been fully initialized",
        "To handle changes in the component's input properties",
        "To handle form submission and validation",
       "To create and manage animations and transitions"
      ],
      answer: "To perform initialization tasks after a component's view has been fully initialized"
    },
    {
      id: 11,
      topic: "JavaScript",
      question: "What is the output of the following code? console.log(1 + '1' - 1);",
      options: [
        "10",
        "11",
        "0",
        "NaN"
      ],
      answer: "10"
    },
    {
      id: 12,
      topic: "JavaScript",
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The global object",
        "The object that owns the currently executing code",
        "The prototype of the current object"
      ],
      answer: "The object that owns the currently executing code"
    },
    {
      id: 13,
      topic: "JavaScript",
      question: "What is the result of the following expression? typeof null;",
      options: [
        "object",
        "null",
        "undefined",
        "string"
      ],
      answer: "object"
    },
    {
      id: 14,
      topic: "JavaScript",
      question: "What is the output of the following code? console.log(2 ** 3 ** 2);",
      options: [
        "64",
        "512",
        "4096",
        "256"
      ],
      answer: "512"
    },
    {
      id: 15,
      topic: "JavaScript",
      question: "Which of the following methods is used to add elements at the beginning of an array in JavaScript?",
      options: [
        "push()",
        "unshift()",
        "concat()",
        "splice()"
      ],
      answer: "unshift()"
    },
    {
      id: 16,
      topic: "JavaScript",
      question: "What does the 'use strict' directive do in JavaScript?",
      options: [
        "Enforces stricter syntax rules",
        "Enables strict mode for the entire script or individual functions",
        "Enforces the use of ECMAScript 6 features",
        "Enforces secure coding practices"
      ],
      answer: "Enables strict mode for the entire script or individual functions"
    },
    {
      id: 17,
      topic: "JavaScript",
      question: "What is the difference between 'null' and 'undefined' in JavaScript?",
      options: [
        "'null' represents the intentional absence of any object value, while 'undefined' represents the absence of a value or uninitialized variable",
        "'null' represents the absence of a value or uninitialized variable, while 'undefined' represents the intentional absence of any object value",
        "'null' is a primitive value, while 'undefined' is an object",
        "'null' is a falsy value, while 'undefined' is a truthy value"
      ],
      answer: "'null' represents the intentional absence of any object value, while 'undefined' represents the absence of a value or uninitialized variable"
    },
    {
      id: 18,
      topic: "JavaScript",
      question: "What is the output of the following code?'' console.log(1 == '1');",
      options: [
        "true",
        "false",
        "NaN",
        "TypeError"
      ],
      answer: "true"
    },
    {
      id: 19,
      topic: "JavaScript",
      question: "Which of the following is not a valid JavaScript data type?",
      options: [
        "boolean",
        "number",
        "function",
        "char"
      ],
      answer: "char"
    },
    {
      id: 20,
      topic: "JavaScript",
      question: "What does the 'bind()' method do in JavaScript?",
      options: [
        "Binds an event handler to a DOM element",
        "Creates a new function that, when called, has its 'this' keyword set to the provided value",
        "Binds a function to a specific context when it is invoked",
        "Enables two-way data binding between a model and a view"
      ],
      answer: "Creates a new function that, when called, has its 'this' keyword set to the provided value"
    },
    {
      id: 21,
      topic: "React",
      question: "What is the purpose of the 'render()' method in React?",
      options: [
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render the component's UI to the DOM",
        "To update the component's state"
      ],
      answer: "To render the component's UI to the DOM"
    },
    {
      id: 22,
      topic: "React",
      question: "What is the difference between a functional component and a class component in React?",
      options: [
        "Functional components are used for stateful logic, while class components are used for UI rendering",
        "Functional components are simpler and easier to test, while class components offer more features like lifecycle methods",
        "Functional components can have their own state, while class components cannot",
        "Functional components are faster and more performant than class components"
      ],
      answer: "Functional components are simpler and easier to test, while class components offer more features like lifecycle methods"
    },
    {
      id: 23,
      topic: "React",
      question: "What is the purpose of the 'key' prop in React?",
      options: [
        "To provide a unique identifier for elements in an array",
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render the component's UI to the DOM"
      ],
      answer: "To provide a unique identifier for elements in an array"
    },
    {
      id: 24,
      topic: "React",
      question: "What is the significance of 'setState()' method in React?",
      options: [
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render the component's UI to the DOM",
        "To update the component's state and trigger re-rendering"
      ],
      answer: "To update the component's state and trigger re-rendering"
    },
    {
      id: 25,
      topic: "React",
      question: "What is the purpose of 'React.Fragment' in React?",
      options: [
        "To create reusable React components",
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render multiple elements without adding extra nodes to the DOM"
      ],
      answer: "To render multiple elements without adding extra nodes to the DOM"
    },
    {
      id: 26,
      topic: "React",
      question: "What is the purpose of 'props' in React?",
      options: [
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To pass data from a parent component to a child component",
        "To update the component's state"
      ],
      answer: "To pass data from a parent component to a child component"
    },
    {
      id: 27,
      topic: "React",
      question: "What is the purpose of 'componentDidMount()' lifecycle method in React?",
      options: [
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render the component's UI to the DOM",
        "To perform setup tasks and fetch data from an API"
      ],
      answer: "To perform setup tasks and fetch data from an API"
    },
    {
      id: 28,
      topic: "React",
      question: "What is the purpose of 'shouldComponentUpdate()' lifecycle method in React?",
      options: [
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To render the component's UI to the DOM",
        "To optimize performance by determining if a component should re-render"
      ],
      answer: "To optimize performance by determining if a component should re-render"
    },
    {
      id: 29,
      topic: "React",
      question: "What is the purpose of 'React.PureComponent' in React?",
      options: [
        "To create reusable React components",
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To optimize performance by performing shallow comparison for props and state"
      ],
      answer: "To optimize performance by performing shallow comparison for props and state"
    },
    {
      id: 30,
      topic: "React",
      question: "What is the purpose of 'React.memo()' in React?",
      options: [
        "To create reusable React components",
        "To define the component's initial state",
        "To handle events triggered by user interactions",
        "To optimize performance by memoizing the result of the component's rendering"
      ],
      answer:"To optimize performance by memoizing the result of the component's rendering"
    },
    {
      id: 31,
      topic: "Python",
      question: "What is the output of the following code? x = [1, 2, 3, 4, 5] print(x[10:])",
      options: ["[1, 2, 3, 4, 5]", "[]", "IndexError", "None"],
      answer: "[]"
    },
    {
      id: 32,
      topic: "Python",
      question: "What is the difference between 'deepcopy()' and 'copy()' methods in Python?",
      options: [
        "'deepcopy()' creates a shallow copy of an object, while 'copy()' creates a deep copy.",
        "'deepcopy()' creates a deep copy of an object, while 'copy()' creates a shallow copy.",
        "'deepcopy()' and 'copy()' are two different names for the same method.",
        "'deepcopy()' and 'copy()' are not valid methods in Python."
      ],
      answer: "'deepcopy()' creates a deep copy of an object, while 'copy()' creates a shallow copy."
    },
    {
      id: 33,
      topic: "Python",
      question: "What is the output of the following code? print(type(3.14 + 4))",
      options: ["<class int>", "<class float>", "<class double>", "<class decimal>"],
      answer: "<class float>"
    },
    {
      id: 34,
      topic: "Python",
      question: "What is the purpose of the __init__ method in a Python class?",
      options: [
        "To initialize the class variables.",
        "To define the class methods.",
        "To create an object of the class.",
        "To destroy the object of the class."
      ],
      answer: "To initialize the class variables."
    },
    {
      id: 35,
      topic: "Python",
      question: "What is the output of the following code? print(2 ** 3 ** 2)",
      options: ["64", "512", "4096", "SyntaxError"],
      answer: "512"
    },
    {
      id: 36,
      topic: "Python",
      question: "What is the purpose of the 'pass' statement in Python?",
      options: [
        "To generate an exception.",
        "To create an infinite loop.",
        "To define an empty code block.",
        "To break the current loop."
      ],
      answer: "To define an empty code block."
    },
    {
      id: 37,
      topic: "Python",
      question: "What is the output of the following code? print(3 * 3 ** 3)",
      options: ["9", "27", "81", "729"],
      answer: "729"
    },
    {
      id: 38,
      topic: "Python",
      question: "What is the output of the following code? print(len([10, 20, 30][::-1]))",
      options: ["0", "1", "2", "3"],
      answer: "3"
    },
    {
      id: 39,
      topic: "Python",
      question: "What is the purpose of the 'with' statement in Python?",
      options: [
        "To define a loop.",
        "To import external modules.",
        "To handle exceptions.",
        "To open and close files automatically."
      ],
      answer: "To open and close files automatically."
    },
    {
      id: 40,
      topic: "Python",
      question: "What is the output of the following code? print(0.1 + 0.2 == 0.3)",
      options: ["True", "False", "SyntaxError", "TypeError"],
      answer: "False"
    },
    {
      id: 41,
       topic: "TailwindCSS",
      question: "What is the purpose of the 'justify-items' utility in Tailwind CSS?",
      options: [
        "To horizontally align items inside a flex container",
        "To vertically align items inside a flex container",
        "To justify content in a grid container",
        "To justify self in a grid container"
      ],
      answer: "To horizontally align items inside a flex container"
    },
    {
      id: 42,
       topic: "TailwindCSS",
      question: "Which utility class in Tailwind CSS is used to add a shadow to an element?",
      options: ["shadow", "box-shadow", "shadow-box", "shadow-md"],
      answer: "shadow"
    },
    {
      id: 43,
       topic: "TailwindCSS",
      question: "What does the 'lg:' prefix in a Tailwind CSS class represent?",
      options: [
        "Large breakpoint",
        "Left position",
        "Light mode",
        "Line height"
      ],
      answer: "Large breakpoint"
    },
    {
      id: 44,
       topic: "TailwindCSS",
      question: "Which utility class in Tailwind CSS is used to add padding to all four sides of an element?",
      options: ["p-4", "px-4", "py-4", "pt-4"],
      answer: "p-4"
    },
    {
      id: 45,
       topic: "TailwindCSS",
      question: "What is the purpose of the 'space-x-4' utility in Tailwind CSS?",
      options: [
        "To add horizontal spacing between flex container items",
        "To add vertical spacing between grid container items",
        "To define the width of a flex container",
        "To define the height of a grid container"
      ],
      answer: "To add horizontal spacing between flex container items"
    },
    {
      id: 46,
       topic: "TailwindCSS",
      question: "Which utility class in Tailwind CSS is used to add a solid border to an element?",
      options: ["border", "border-solid", "border-color", "border-width"],
      answer: "border"
    },
    {
      id: 47,
       topic: "TailwindCSS",
      question: "What is the purpose of the 'text-center' utility in Tailwind CSS?",
      options: [
        "To vertically align text inside a flex container",
        "To horizontally align text inside a flex container",
        "To center text horizontally within its parent element",
        "To center text vertically within its parent element"
      ],
      answer: "To center text horizontally within its parent element"
    },
    {
      id: 48,
       topic: "TailwindCSS",
      question: "Which utility class in Tailwind CSS is used to add a background color to an element?",
      options: ["bg-color", "background-color", "bg", "bg-[color]"],
      answer: "bg-[color]"
    },
    {
      id: 49,
       topic: "TailwindCSS",
      question: "What does the 'gap-x-4' utility in Tailwind CSS represent?",
      options: [
        "Horizontal spacing between grid container items",
        "Vertical spacing between flex container items",
        "Padding on the left and right sides of an element",
        "Margin on the top and bottom sides of an element"
      ],
      answer: "Horizontal spacing between grid container items"
    },
    {
      id: 50,
       topic: "TailwindCSS",
      question: "Which utility class in Tailwind CSS is used to add a responsive font size?",
      options: ["text-sm", "text-responsive", "text-md", "text-size"],
      answer: "text-sm"
    }

  ];
}
