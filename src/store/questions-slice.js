const { createSlice } = require("@reduxjs/toolkit");

const questionsSlice = createSlice({
  name: "questions",
  initialState: { questions: [] },
  reducers: {
    addQuestion(state, action) {
      const question = action.payload;

      const newQuestion = {
        id: Math.floor(Math.random() * 1000),
        question,
        answers: [],
        answersCount: 0,
      };
      state.questions.push(newQuestion);
    },
    addAnswer(state, action) {
      const answer = action.payload.answer;
      const questionId = parseInt(action.payload.questionId);
      const questionIndex = state.questions.find(
        (question) => question.id === questionId
      );
      questionIndex.answers.push({
        id: Math.floor(Math.random() * 1000),
        text: answer,
      });
      questionIndex.answersCount++;
    },
    deleteQuestion(state, action) {
      const questionId = action.payload;
      state.questions = state.questions.filter(
        (question) => question.id !== questionId
      );
    },
    deleteAnswer(state, action) {
      const { questionId, answerId } = action.payload;
      const questionIndex = state.questions.find(
        (question) => question.id === parseInt(questionId)
      );
      questionIndex.answers = questionIndex.answers.filter(
        (answer) => answer.id !== answerId
      );

      questionIndex.answersCount--;
    },
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
