import { Link } from "react-router-dom";
import styles from "./QuestionItem.module.css";

const QuestionItem = (props) => {
  const question = props.question;
  return (
    <Link className={styles.card} to={`/questions/${question.id}`}>
      <p className={styles.question}>{question.question}</p>
      <p className={styles.count}>{question.answersCount}</p>
    </Link>
  );
};

export default QuestionItem;
