import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../shared/services/question/question.service';
import { MathQuestion } from '../shared/interfaces/math-content';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  currentQuestion: MathQuestion = {
    question: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    choice1: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    choice2: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    choice3: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    choice4: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    choice5: {mathml: `<math xmlns="http://www.w3.org/1998/Math/MathML">`},
    correctChoice: 0
  };
  isQuestionReady = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
    ) { }

  ngOnInit() {
    this.questionService.getQuestionByCategory('algebra', 'linear-equations')
      .subscribe(data => {
        this.processResponse(data);
      }, error => {
        console.log(error);
      })
  }

  processResponse(data) {
    this.currentQuestion.question.mathml += data.question + '</math>';
    this.currentQuestion.correctChoice = data['correct_choice'];
    let i = 1;
    for (const choice of data.choices) {
      const currentChoice = 'choice' + i;
      this.currentQuestion[currentChoice].mathml += choice + '</math>';
      i++;
    }
    this.isQuestionReady = true;
  }

}
