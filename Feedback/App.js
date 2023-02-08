import React from "react"
import InfoCallout from "./InfoCallout"
import ImageCallout from "./ImageCallout"
import EmailCallout from "./EmailCallout"

function App() {
  return (
    <main>
      <h1>Welcome</h1>
      <InfoCallout
        header="Don't miss out!"
        body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below "
    </main>
  )
}
// import CTA from "./CTA"

// function App() {
//   return (
//     <div>
//       <CTA position="right">
//         <h1>This is an important CTA</h1>
//         <button>Click me now or you'll miss out!</button>
//       </CTA>

//       <CTA>
//         <form>
//           <input type="email" placeholder="Enter email address here" />
//           <br />
//           <button>Submit</button>
//         </form>
//       </CTA>

//       <CTA>
//         <form>
//           <input type="email" placeholder="Enter contact number here" />
//           <br />
//           <button>Submit</button>
//         </form>
//       </CTA>
//     </div>
//   )
// }