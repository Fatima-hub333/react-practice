- High order components stems from the conept of higher-order functions.
- A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

const upgradedComponent = withSuperPowers(Component)
export default upgradedComponent

const componentWithToggle = withToggle(Component)
export default componentWithToggle

export default withToggle(Component)