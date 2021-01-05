import React, { Component } from 'react';

// CSS
import "./App.css";

// Components
import Question from "./components/Question";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: [
        {
          id: 1,
          title: "Abdel est beau ?",
          answers: [
            { name: "Oui", votes: 1 },
            { name: "Non", votes: 0 },
            { name: "Trop noir", votes: 0 }
          ]
        },
        {
          id: 2,
          title: "Vive POPSchool ?",
          answers: [
            { id: 1, name: "Oui", votes: 0 },
            { id: 2, name: "Non", votes: 0 },
            { id: 3, name: "Plus d'argent", votes: 2 }
          ]
        },
        {
          id: 3,
          title: "Le coca c'est très bon ?",
          answers: [
            { id: 1, name: "Oui", votes: 0 },
            { id: 2, name: "Non", votes: 0 },
            { id: 3, name: "Ya pas que le coca", votes: 2 }
          ]
        }
      ]
    };
  }

  render() {
    const polls = this.state.polls.map(poll => {
      return <Question key={poll.id} data={poll} handleSubmit={this.vote} />
    })

    return (
      <div className="container">
        {polls}
      </div>
    );
  }
}

export default App;