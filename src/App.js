import { Route, Switch, Redirect } from "react-router-dom";
import NewQuestion from "./pages/NewQuestion";
import QuestionDetail from "./pages/QuestionDetail";
import Questions from "./pages/Questions";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Switch className>
        <Route path="/" exact>
          <Redirect to="/questions" />
        </Route>
        <Route path="/questions" exact>
          <Questions />
        </Route>
        <Route path="/questions/:questionId">
          <QuestionDetail />
        </Route>
        <Route path="/new-question">
          <NewQuestion />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
