import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { questionsActions } from "../store/questions-slice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import glass from "../components/QuestionList.module.css";
import form from "../components/AnswerForm.module.css";
import styles from "./NewQuestion.module.css";

const NewQuestion = () => {
  const questionTextRef = useRef();
  const history = useHistory();
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    setError(false);
    const enteredText = questionTextRef.current.value;

    if (enteredText.trim() === "") {
      setError(true);
      return;
    }
    dispatch(questionsActions.addQuestion(enteredText));
    history.goBack();
    alert("New Question Added Successfully");
  };
  return (
    <div className={form.container}>
      <form
        onSubmit={submitHandler}
        className={glass["glass-panel"] + " " + form.form + " " + styles.form}
      >
        <label className={styles.title} htmlFor="question">
          Add a question
        </label>
        <textarea
          className={form.text}
          ref={questionTextRef}
          id="question"
          rows="5"
        ></textarea>
        {error && <p>Question cannot be blank!!!</p>}
        <button className={form.button}>Submit Question</button>
      </form>
    </div>
  );
};

export default NewQuestion;
