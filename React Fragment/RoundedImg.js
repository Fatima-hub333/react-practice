import React from "react"
import PropTyes from "prop-types"


function RoundedImg(props) {
  return (
    <img
      src={props.src}
      style={{ borderRadius: props.borderRadius }}
      className="round-img" 
    />
  )
}

RoundedImg.PropTyes = {
  src: PropTyes.string.isRequired,
  borderRadius: PropTyes.oneOfType([PropTyes.string, PropTyes.number])
}

RoundedImg.defaultProps = {
  borderRadius: "50%"
}

export default RoundedImg