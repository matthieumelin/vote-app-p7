import React, { Component } from 'react';

// CSS
import "./App.css";

// Components
import Question from "./components/Question";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: [{
                    id: 1,
                    title: "Question 1",
                    answers: [
                        { name: "Oui", votes: 1 },
                        { name: "Non", votes: 0 },
                    ]
                },
                {
                    id: 2,
                    title: "Question 2",
                    answers: [
                        { id: 1, name: "Oui", votes: 0 },
                        { id: 2, name: "Non", votes: 0 },
                    ]
                },
                {
                    id: 3,
                    title: "Question 3",
                    answers: [
                        { id: 1, name: "Oui", votes: 0 },
                        { id: 2, name: "Non", votes: 0 },
                    ]
                }
            ]
        };
    }

    render() {
        const polls = this.state.polls.map(poll => {
            return <Question key = { poll.id }
            data = { poll }
            handleSubmit = { this.vote }
            />
        })

        return ( <
            div className = "container" > { polls } <
            /div>
        );
    }
}

export default App;