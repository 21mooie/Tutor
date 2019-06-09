import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { arithmeticSubCategoriesDisplay, algebraSubCategoriesDisplay, calculusSubCategoriesDisplay, subCategoryMap } from '../../objects/subCategories';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private _url = 'https://math.ly/api/v1';

  constructor(private http: HttpClient) { }

  getQuestionByCategory(mainCategoryName: string, subCategoryName: string) {
    this._url = this._url + '/' + mainCategoryName + '/' + subCategoryName + '.json'

    return this.http.get(this._url);
    
  }

  getSubCategories(category) {
    switch(category) {
      case 'arithmetic':
        return arithmeticSubCategoriesDisplay;
      case 'alegbra':
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
