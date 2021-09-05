import { useDispatch } from "react-redux";
import { questionsActions } from "../store/questions-slice";
import styles from "./AnswerItem.module.css";
import container from "./AnswerForm.module.css";

const AnswerItem = (props) => {
  const dispatch = useDispatch();
  const answer = props.answer;
  const deleteAnswerHandler = () => {
    dispatch(
      questionsActions.deleteAnswer({
        answerId: answer.id,
        questionId: props.questionId,
      })
    );
  };
  return (
    <div className={container.container}>
      <li className={styles.answer}>
        <p>{answer.text}</p>
        <button className={styles.delete} onClick={deleteAnswerHandler}>
          Delete Answer
        </button>
      </li>
    </div>
  );
};

export default AnswerItem;
