import React, { useState, useEffect } from 'react';
import { useMousePosition } from './use-mouse-position';

class Counter extends React.Component {
    state = {
        count: 0,
        name: 'Irina'
    };

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <button onClick={this.increment}>Clicked {this.state.count} times</button>
        )
    };
}

function CounterFunction({ start }) {
    const [count, setCount] = useState(start);
    const [name, setName] = useState('Irina');

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    const eraseName = () => {
        if (count > 8) {
            setName('');
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }
    return (
        <div>
            <button onClick={eraseName}>Clicked {count} times</button>
            <br />
            <br />
            <input placeholder="Input name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
            Name: {name}
        </div>
    )
}

CounterFunction.defaultProps = {
    start: 0
}

function MouseTrackerExample() {

    const { x, y } = useMousePosition()
    return (
        <div>
            x: {x}
            <br />
            y: {y}
        </div>
    )
}

export default Counter
export { CounterFunction, MouseTrackerExample }