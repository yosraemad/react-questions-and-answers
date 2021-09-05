import { Link } from "react-router-dom";
import QuestionList from "../components/QuestionList";
import styles from "./Questions.module.css";

const Questions = () => {
  return (
    <div>
      <Link className={styles["new-question-btn"]} to="/new-question">
        Add a New Question
      </Link>
      <QuestionList />
    </div>
  );
};

export default Questions;
