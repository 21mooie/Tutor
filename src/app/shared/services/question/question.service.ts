import { Injectable } from '@angular/core';
import { arithmeticSubCategoriesDisplay, algebraSubCategoriesDisplay, calculusSubCategoriesDisplay, subCategoryMap } from '../../objects/subCategories';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestionByCategory(mainCategoryName: string, subCategoryName: string) {
    const url = 'http://localhost:3000' + '/getQuestions/category';
    let params = new HttpParams();
    params = params.set('mainCategory', mainCategoryName);
    params = params.set('subCategory', subCategoryName);

    return this.http.get(url, {params: params});
  }

  getSubCategories(category) {
    switch(category) {
      case 'arithmetic':
        return arithmeticSubCategoriesDisplay;
      case 'algebra':
        return algebraSubCategoriesDisplay;
      case 'calculus':
        return calculusSubCategoriesDisplay;
      default:
    }
  }

  getSubCategoryRequest(category) {
    return subCategoryMap[category];
  }
}
