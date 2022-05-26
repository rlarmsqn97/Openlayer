import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js'; // 카운터를 표시해줄 컴포넌트 호출

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    // 함수 실행시 number 값이 1 증가!
    handleIncrease = () => {
        const { number } = this.state;

        // this.setState는 state의 값을 변경할 때 사용하는 함수
        this.setState({
            number: number + 1
        })
    }

    handleDecrease = () => {
        const { number } = this.state;

        this.setState({
            number: number - 1
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Counter handleIncrease={this.handleIncrease}
                             number={this.state.number}/>
                    <Counter handleDecrease={this.handleDecrease}
                             number={this.state.number}/>
                </header>
            </div>
        )
    }
}

export default App;