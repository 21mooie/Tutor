import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { QuestionService } from '../shared/services/question/question.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
  category: string;
  subCategories = [];

  constructor(
    private route: ActivatedRoute,
    private question: QuestionService,
    private router: Router
    ) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('sub');
    this.showSubCategories(this.category);
  }

  showSubCategories(category) {
    this.subCategories = this.question.getSubCategories(category);
  }

  routeToQuestion(userCategory, subCategory) {
    let subCategoryRequest = this.question.getSubCategoryRequest(subCategory);
    this.router.navigate(['/questions'], {queryParams: {category: userCategory, subcategory: subCategoryRequest}});
  }
}
