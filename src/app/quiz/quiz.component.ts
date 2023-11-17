import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  constructor(private quizService: QuizService) {}

  selectedOptionIndex: any = new Map();
  questions: any;
  currentQuestionIndex: number = 0;
  score: number | null = null;
  selectedAnswers: any = [];

  ngOnInit() {
    // Access the quiz array from the QuizService
    this.questions = this.quizService.quiz.filter(
      (q: any) => q.topic.toLowerCase() === 'angular'
    );
    // console.log(this.questions);
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  handleSelectAnswer(option: string, i: number) {
    this.selectedOptionIndex.set(this.currentQuestionIndex, i);
    // console.log(this.selectedOptionIndex);
    this.selectedAnswers.push({
      id: this.questions[this.currentQuestionIndex].id,
      selectedAnswer: option,
    });
    // console.log(option);
  }

  handleSubmit() {
    this.selectedAnswers.forEach((userAnsweredQuestion: any) => {
      const question = this.questions.find(
        (q: any) => q.id === userAnsweredQuestion.id
      );

      if (question.answer === userAnsweredQuestion.selectedAnswer) {
        if (this.score) {
          this.score += 1;
        } else {
          this.score = 1;
        }
        question.isRight = true;
        question.selectedAnswer = userAnsweredQuestion.selectedAnswer
      } else {
        question.isRight = false;
        question.selectedAnswer = userAnsweredQuestion.selectedAnswer
      }
    });

    // console.log(this.questions)
  }
}
