import React from "react"
import Example from"./Example"

function App() {
  return (
    <div>
      <Example render={
        function(bool, number) {
          return (
            <div>
              <h1>{number}</h1>
              <h2>{bool ? "true" : "false"}</h2>
            </div>
        )
      }} />
    </div>
  )
}
export default App