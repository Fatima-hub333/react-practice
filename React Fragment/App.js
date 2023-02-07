import React from 'react'
// import Child from "./Child"

// function App() {
//   return (
//     <>
//       <Child />
//     </>
//   )
// }

function App() {
  return (
    <div>
      <Card cardColor="red" height={200} width={400} />
      <Card />
      <Card cardColor="green" />
    </div>
  )
}

export default App