import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent {
  @Input() score: number | null = null; // decorate the property with @Input()
  @Input() questions: any; // decorate the property with @Input()

  status(): string {
    if (this.score === null) {
      return 'assets/status/sad.svg';
    } else if (this.score === 10) {
      return 'assets/status/thunder.svg';
    } else if (this.score >= 7) {
      return 'assets/status/fire.svg';
    } else if (this.score >= 3) {
      return 'assets/status/happy.svg';
    } else {
      return 'assets/status/sad.svg';
    }
  }

  ngOnInit(): void {
    console.log(this.questions);
  }
}
