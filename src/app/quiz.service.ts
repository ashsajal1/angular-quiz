import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

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
    }
  ];
}
