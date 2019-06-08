import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
