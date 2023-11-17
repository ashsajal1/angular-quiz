import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent {
  @Input() score: number | null = null; // decorate the property with @Input()
  @Input() questions: any; // decorate the property with @Input()

  // questions = [
  //   {
  //     id: 1,
  //     topic: 'Angular',
  //     isRight: true,
  //     selectedAnswer:
  //       "To provide a zone for running code outside Angular's change detection",
  //     question: 'What is the purpose of the ngZone service in Angular?',
  //     options: [
  //       'To manage the change detection and rendering of Angular components',
  //       'To handle asynchronous operations and optimize performance',
  //       "To provide a zone for running code outside Angular's change detection",
  //       'To manage the state of the application and handle global events',
  //     ],
  //     answer:
  //       "To provide a zone for running code outside Angular's change detection",
  //   },
  //   {
  //     id: 2,
  //     topic: 'Angular',
  //     isRight:false,
  //     selectedAnswer:'To control the iteration of ngFor and specify the start and end values',
  //     question: 'What is the purpose of the trackBy function in an ngFor loop?',
  //     options: [
  //       'To track changes in the looped items and update the DOM efficiently',
  //       'To provide a unique identifier for each item in the loop',
  //       'To control the iteration of ngFor and specify the start and end values',
  //       'To handle errors and exceptions that occur during the loop execution',
  //     ],
  //     answer:
  //       'To track changes in the looped items and update the DOM efficiently',
  //   },
  //   {
  //     id: 3,
  //     topic: 'Angular',
  //     question: 'What is the purpose of the trackBy function in an ngFor loop?',
  //     options: [
  //       'To track changes in the looped items and update the DOM efficiently',
  //       'To provide a unique identifier for each item in the loop',
  //       'To control the iteration of ngFor and specify the start and end values',
  //       'To handle errors and exceptions that occur during the loop execution',
  //     ],
  //     answer:
  //       'To track changes in the looped items and update the DOM efficiently',
  //   },
  // ];
  ngOnInit(): void {
    console.log(this.questions);
  }
}
