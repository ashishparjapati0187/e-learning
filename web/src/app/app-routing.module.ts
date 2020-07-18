import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AInnovatorComponent } from './components/ainnovator/ainnovator.component';
import { AInnovatorTestComponent } from './components/ainnovator-test/ainnovator-test.component';
import { AInnovatorSetComponent } from './components/ainnovator-set/ainnovator-set.component';
import { AQuestionSetComponent } from './components/aquestion-set/aquestion-set.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AllQuestionComponent } from './components/all-question/all-question.component';
import { UserQuizComponent } from './components/user-quiz/user-quiz.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { ResultsComponent } from './components/results/results.component';
import { AllCertificateComponent } from './components/all-certificate/all-certificate.component';
import { CertificateComponent } from './components/certificate/certificate.component';

const routes: Routes = [
        {path:"homeLink",component:HomeComponent}, // home link

        // admin links
        {path:"adminLink",component:AdminHomeComponent,
        // all admin children components
        children: [
          {path:"AInnovator",component:AInnovatorComponent},// innovator component
          {path:"AItest/:innovatorId",component:AInnovatorTestComponent}, // admin test using innovator id
          {path:"AIset/:setId",component:AInnovatorSetComponent}, // admin test using set id
          {path:"AIQuestSet/:setId/:id",component:AQuestionSetComponent}, // complete question set
          {path:"AddQuestion/:id/:setId",component:AddQuestionComponent},// add quesiton
          {path:"AllQuestion",component:AllQuestionComponent} // display list of all questions
        ]
      },

      // student links
{path:"studentLink",component:StudentHomeComponent,
  children: [
    // all children components of student
  {path:"studentQuiz/:tId",component:UserQuizComponent}, // user -quiz
  {path:"userHome",component:UserHomeComponent}, // user home page
  {path:"certificate/:tId/:score",component:CertificateComponent}, // certificate generation page
  {path:"results",component:ResultsComponent}, // result or chart page
  
  {path:"allCertificates",component:AllCertificateComponent} // all certificates
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for route function to import routes vcariable
  exports: [RouterModule] // export route module
})
export class AppRoutingModule { }
