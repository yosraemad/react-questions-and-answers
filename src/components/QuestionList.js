import QuestionItem from "./QuestionItem";
import { useSelector } from "react-redux";
import styles from "./QuestionList.module.css";

const QuestionList = () => {
  const questions = useSelector((state) => state.questions);
  return (
    <div>
      {questions.length > 0 && (
        <ul className={styles["glass-panel"]}>
          {questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionList;
