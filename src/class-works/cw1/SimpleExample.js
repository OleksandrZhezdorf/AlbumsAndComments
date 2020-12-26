import React, { Component } from 'react';

const getRandom = () => Math.random() * 100;

const clickHandler = () => alert('Clicked!');


class SimpleExample extends Component {
  render() {
    const name = 'Ivan';
    const age = getRandom();
    console.log(age, 'age');
    return (
      <div>
        <div>Hello,
          <span
            style={{ color: age < 18 ? 'red' : 'green' }}
            className="user-name">{name}
          </span>
        </div>
        <button onClick={clickHandler}>Click me</button>
        <br/>
        <br/>
        {age < 18 && <span>Adult Content</span>}
      </div>
    )
  }
}

export default SimpleExample;
