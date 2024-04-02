import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { TopicComponent } from './pages/topic/topic.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    QuizComponent,
    QuizResultComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
