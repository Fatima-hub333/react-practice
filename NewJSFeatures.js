import React, { Component } from "react"

class NewJSFeatures extends Component {
  state = {
    count: 0,
    greeting: "Hi",
    age: 25
  }

  increment =() => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({count: prevState - 1}))
  }

  render() {
    const {count: number, greeting, age} = this.state
    return (
      <div>
        <h1>{number} {greeting} {age}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default NewJSFeatures