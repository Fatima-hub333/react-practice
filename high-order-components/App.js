import React from 'react'
import { withPointlessHOC } from './withPointlessHOC'
import {withExtraPropAdded} from './withExtraPropAdded'

const App = () => {
  return (
    <div>Hello World!</div>
  )
}

const PointlessHOC = withExtraPropAdded(App)
export default PointlessHOC

// import React from "react"
// import withFavriteNumber from "./withFavoriteNumber"
// 

// function App(props) {
//   return (
//     <div>{props.favoriteNumber}</div>
//   )
// }

// export default withFavoriteNumber(App)