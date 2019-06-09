import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { DevelopmentComponent } from './development/development.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:sub',
    component: SubcategoriesComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'articles',
    component: DevelopmentComponent
  },
  {
    path: 'profile',
    component: DevelopmentComponent
  },
  {
    path: 'friends',
    component: DevelopmentComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
