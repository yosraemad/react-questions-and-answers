import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { questionsActions } from "../store/questions-slice";
import styles from "./AnswerForm.module.css";

const AnswerForm = (props) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const answerTextRef = useRef();
  const id = props.questionId;

  const submitFormHandler = (event) => {
    event.preventDefault();
    setError(false);
    const enteredText = answerTextRef.current.value;
    if (enteredText.trim() === "") {
      setError(true);
      return;
    }
    dispatch(
      questionsActions.addAnswer({ answer: enteredText, questionId: id })
    );
    answerTextRef.current.value = "";
    alert("Answer Posted Successfully.");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Answer</label>
        <textarea
          className={styles.text}
          ref={answerTextRef}
          id="comment"
          rows="5"
        ></textarea>
        {error && <p>Answer must not be blank!!!</p>}
        <button className={styles.button}>Add Answer</button>
      </form>
    </div>
  );
};

export default AnswerForm;
