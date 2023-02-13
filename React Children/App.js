import React from "react"
import Callout from "./Callout"

function App() {
  return (
    <main>
      <h1>Welcome</h1>
      <Callout>
        <h2>Don't miss out!</h2>
        <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below</p>
      </Callout>
      
      <Callout>
        <img src={props.img} width="100%" />
        <figcaption>{props.caption}</figcaption>
      </Callout>

      <Callout>
        <img src="https://picsum.photos/id/102/4320/3240" width="100%" />
        <figcaption>Just look at those sparkling raspberries!</figcaption>
      </Callout>

      <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

      <Callout>
        <h2>Give us your email. We Definitely won't sell it to anyone.</h2>
        <input type="email" placeholder='Enter Email' />
        <button>Sign me up</button>
      </Callout>

    </main>
  )
}
export default App;