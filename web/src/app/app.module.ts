import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HomeComponent } from './components/home/home.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { AInnovatorComponent } from './components/ainnovator/ainnovator.component';
import { AInnovatorSetComponent } from './components/ainnovator-set/ainnovator-set.component';
import { AInnovatorTestComponent } from './components/ainnovator-test/ainnovator-test.component';
import { AQuestionSetComponent } from './components/aquestion-set/aquestion-set.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AllQuestionComponent } from './components/all-question/all-question.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserQuizComponent } from './components/user-quiz/user-quiz.component';
import { AllCertificateComponent } from './components/all-certificate/all-certificate.component';
import { QuizRegisterComponent } from './components/quiz-register/quiz-register.component';
import { ResultsComponent } from './components/results/results.component';
import { CertificateComponent } from './components/certificate/certificate.component';


@NgModule({
  // declarations
  declarations: [
    AppComponent,
    LandingComponent,
    AdminHomeComponent,
    HomeComponent,
    StudentHomeComponent,
    AInnovatorComponent,
    AInnovatorSetComponent,
    AInnovatorTestComponent,
    AQuestionSetComponent,
    AddQuestionComponent,
    AllQuestionComponent,
    UserHomeComponent,
    UserQuizComponent,
    CertificateComponent,
    AllCertificateComponent,
    QuizRegisterComponent,UserHomeComponent,StudentHomeComponent,ResultsComponent,
  ],
  // imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,NgbModule,NgbModule.forRoot()
  ],
// service providers
  providers: [NgbActiveModal],
  /* main component*/ bootstrap: [/*LandingComponentAdminHomeComponentUserHomeComponentStudentHomeComponent  LandingComponent*/LandingComponent]
})



export class AppModule { }

