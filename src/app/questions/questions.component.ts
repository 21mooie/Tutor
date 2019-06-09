import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../shared/services/question/question.service';
import { MathQuestion } from '../shared/interfaces/math-content';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    correctChoice: 0,
    instruction: ''
  };
  questionsFormGroup: FormGroup;
  isQuestionReady = false;
  correctAnswer = false;
  wrongAnswer = false;
  category = '';
  subCategory = '';

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
    ) { }

  ngOnInit() {
    this.questionsFormGroup = new FormGroup({
      answer: new FormControl('', Validators.required)
    });
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.subCategory = params['subcategory'];
      this.fetchQuestion();
  });
  }

  fetchQuestion() {
    this.isQuestionReady = false;
    this.questionService.getQuestionByCategory(this.category, this.subCategory)
      .subscribe(data => {
        this.processResponse(data);
      }, error => {
        console.log(error);
      })
  }

  processResponse(data) {
    this.currentQuestion.question.mathml += data.question + '</math>';
    this.currentQuestion.correctChoice = data['correct_choice'];
    this.currentQuestion.instruction = data.instruction;
    let i = 1;
    for (const choice of data.choices) {
      const currentChoice = 'choice' + i;
      this.currentQuestion[currentChoice].mathml += choice + '</math>';
      i++;
    }
    this.isQuestionReady = true;
  }

  onSubmit() {
    this.correctAnswer = false;
    this.wrongAnswer = false;
    const selectedAnswer = this.questionsFormGroup.controls['answer'].value;
    if (selectedAnswer === this.currentQuestion.correctChoice.toString()) {
      this.correctAnswer = true;
    } else {
      this.wrongAnswer = true;
    }
  }

  fetchNextQuestion() {
    this.correctAnswer = false;
    this.wrongAnswer = false;
    this.questionsFormGroup.controls['answer'].setValue('');
    this.fetchQuestion();
  }

}
