import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnswerItem from "../components/AnswerItem";
import AnswerForm from "../components/AnswerForm";
import { questionsActions } from "../store/questions-slice";
import styles from "../components/QuestionList.module.css";
import deleteCss from "../components/AnswerItem.module.css";
import mainStyles from "./QuestionDetail.module.css";

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const question = useSelector((state) =>
    state.questions.find(
      (question) => question.id === parseInt(params.questionId)
    )
  );

  const deleteQuestionHandler = () => {
    history.goBack();
    dispatch(questionsActions.deleteQuestion(question.id));
  };

  if (!question) {
    return <div>404 not found</div>;
  }

  return (
    <div className={styles["glass-panel"] + " " + mainStyles.details}>
      <div className={mainStyles.header}>
        <button
          className={mainStyles["back-btn"]}
          onClick={() => {
            history.goBack();
          }}
        >
          <span class={mainStyles["top-left"]}></span>
          <span class={mainStyles["top-right"]}></span>
          <span class={mainStyles["bottom-left"]}></span>
          <span class={mainStyles["bottom-right"]}></span>
          <span class={mainStyles["stalk"]}></span>
          <span class={mainStyles["text"]}>BACK</span>
        </button>
        <h1 className={mainStyles.question}>{question.question}</h1>
      </div>
      <AnswerForm questionId={question.id} />
      <ul>
        {question.answers.map((answer) => (
          <AnswerItem
            key={answer.id}
            answer={answer}
            questionId={params.questionId}
          />
        ))}
      </ul>
      <button
        className={deleteCss.delete + " " + mainStyles.delete}
        onClick={deleteQuestionHandler}
      >
        Delete Question
      </button>
    </div>
  );
};

export default QuestionDetail;
