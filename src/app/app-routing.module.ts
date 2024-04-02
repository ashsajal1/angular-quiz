import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  {path:'', component:TopicComponent},
  { path: 'quiz', redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'quiz/:topic', component: QuizComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
