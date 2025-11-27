import React from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";

class App extends React.Component {
  state = {
    questions: [],
    showQuestions: true,
    mode: "light",
  };

  componentDidMount() {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => this.setState({ questions: data }));
  }

  toggleMode = () => {
    this.setState({ mode: this.state.mode === "light" ? "dark" : "light" });
  };

  render() {
    const { questions, showQuestions, mode } = this.state;

    return (
      <div className={`App ${mode}`}>
        <nav>
          <button onClick={() => this.setState({ showQuestions: false })}>
            New Question
          </button>
          <button onClick={() => this.setState({ showQuestions: true })}>
            View Questions
          </button>
          <button onClick={this.toggleMode}>Toggle Mode</button>
        </nav>
        <main>
          {showQuestions ? (
            <QuestionList
              questions={questions}
              setQuestions={(q) => this.setState({ questions: q })}
            />
          ) : (
            <QuestionForm setQuestions={(q) => this.setState({ questions: q })} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
