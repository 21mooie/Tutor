export interface MathContent {
    latex?: string;
    mathml?: string;
  }

export interface MathQuestion {
  question: MathContent;
  choice1: MathContent;
  choice2: MathContent;
  choice3: MathContent;
  choice4: MathContent;
  choice5: MathContent;
  correctChoice: number;
}