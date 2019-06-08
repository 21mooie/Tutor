import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../shared/services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
    ) { }

  ngOnInit() {
    this.questionService.getQuestionByCategory('algebra', 'quadratic-equations')
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
