import React from "react"

function Example(props) {
  return (
    <div>
      <div>
        {props.render(true, 42)}
      </div>
    </div>
    
  )
}

export default Example