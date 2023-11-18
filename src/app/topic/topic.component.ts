import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  topics:any;

  constructor(private quizService :QuizService) {
    
  }
  

  ngOnInit() : void {
    this.topics = this.quizService.quizTopic
  }

}
