import React, { Component } from 'react'

class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            voted: false,
            selectedAnswer: ""
        }
    }

    handleVote = () => {
        this.setState({ voted: true });
    } 

    render() {
        const data = this.props.data;
        return (
            <div className="poll">
                <div className="poll-title">
                    {data.title}
                </div>

                <div className="poll-content">
                    {
                        data.answers.map(answer => {
                            return (
                                <div key={answer.id} className="control">
                                    <label htmlFor={"radio-group-" + answer.id}
                                    className="radio">
                                        <input type="radio" name={"radio-group-" + answer.id} className="answer-input" />
                                        {answer.name} <strong>{ this.state.voted ? votes : null }</strong>
                                    </label>
                                </div>
                            )
                        })
                    }

                    <button className="button vote-button is-info" onClick={this.handleVote}>Voter</button>
                </div>

            </div>
        )
    }
}

export default Question;