// HOC is a function that takes a comonent as a parameter
// and return a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities
import React from "react"

class Toggler extends Component {
  state = {
    on: false
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }
  render() {
    const Component = this.props.component
    return (
      <Component on={this.state.on} toggle={this.toggle} />
    )
  }
}
export function withToggler(component) {
  return function (props) {
    return (
      <Toggler component={component} {...props} />
    )
  }
}