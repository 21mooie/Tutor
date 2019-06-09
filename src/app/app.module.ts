import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

import { MathModule } from './shared/math.module';
import { QuestionsComponent } from './questions/questions.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    QuestionsComponent,
    SubcategoriesComponent,
    DevelopmentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AmplifyAngularModule,
    AppRoutingModule,
    MathModule.forRoot()
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
