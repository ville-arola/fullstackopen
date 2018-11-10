import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    mean() {
        let totalFeedbackCount = this.state.good + this.state.neutral + this.state.bad
        if (totalFeedbackCount > 0) {
            return Math.round(100 * (this.state.good - this.state.bad) / totalFeedbackCount) / 100
        }
        return 0;
    }

    positive() {
        let totalFeedbackCount = this.state.good + this.state.neutral + this.state.bad
        if (totalFeedbackCount > 0) {
            return Math.round(this.state.good / totalFeedbackCount * 100);
        }
        return 0
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <button onClick={() => this.setState({good: this.state.good + 1 })}>hyvä</button>
                    <button onClick={() => this.setState({neutral: this.state.neutral + 1 })}>neutraali</button>
                    <button onClick={() => this.setState({bad: this.state.bad + 1 })}>huono</button>
                </div>
                <h1>statistiikka</h1>
                <p>hyvä {this.state.good}</p>
                <p>neutraali {this.state.neutral}</p>
                <p>huono {this.state.bad}</p>
                <p>keskiarvo {this.mean()}</p>
                <p>positiivista {this.positive()} %</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));