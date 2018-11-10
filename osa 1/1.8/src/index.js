import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.clickHandler}>{props.text}</button>
    )
}

const Statistics = (props) => {

    const Statistic = (props) => {
        return (
            <p>{props.type} {props.value}</p>
        )
    }

    const mean = () => {
        let totalFeedbackCount = props.state.good + props.state.neutral + props.state.bad
        if (totalFeedbackCount > 0) {
            return Math.round(100 * (props.state.good - props.state.bad) / totalFeedbackCount) / 100
        }
        return 0;
    }

    const positive = () => {
        let totalFeedbackCount = props.state.good + props.state.neutral + props.state.bad
        if (totalFeedbackCount > 0) {
            return Math.round(props.state.good / totalFeedbackCount * 100);
        }
        return 0
    }

    return (
        <div>
            <h1>statistiikka</h1>
            <Statistic type="hyvä" value={props.state.good} />
            <Statistic type="neutraali" value={props.state.neutral} />
            <Statistic type="huono" value={props.state.bad} />
            <Statistic type="keskiarvo" value={mean()} />
            <Statistic type="positiivista" value={positive() +' %'} />
        </div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <Button clickHandler={() => this.setState({good: this.state.good + 1 })} text="hyvä" />
                    <Button clickHandler={() => this.setState({neutral: this.state.neutral + 1 })} text="neutraali" />
                    <Button clickHandler={() => this.setState({bad: this.state.bad + 1 })} text="huono" />
                </div>
                <Statistics state={this.state} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));