import React from "react"
import Emoji from "emoji-dictionary"
const Title = () => {
  return (
    <h5 className="large-title">
      <span className="damn">DAMNIT</span> JANET{" "}
      {Emoji.getUnicode("blue_heart")}
    </h5>
  )
}

export default Title
