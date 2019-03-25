import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import List from "../components/list"
import Modal from "../components/Modal"
import Title from "../components/title"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Emoji from "emoji-dictionary"

const SECRET_CODE = "dammitjanet"
const pressed = []

const IndexPage = () => {
  const [selectedActivity, setSelectedActivity] = useState({})
  const [keyCode, setKeyCode] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", easteregg)
    return () => {
      window.removeEventListener("keyup", easteregg)
    }
  }, [])

  const easteregg = e => {
    pressed.push(e.key)
    pressed.splice(-SECRET_CODE.length - 1, pressed.length - SECRET_CODE.length)
    if (pressed.join("").includes(SECRET_CODE)) {
      console.log("DING DING!")
      setKeyCode(true)
    }
  }

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`dammit`, `janet`, `fun`, `web`, `project`]}
      />
      <h1 className="title">What should we do on this beautiful Sunday?</h1>
      {/* <p>{Emoji.getUnicode("heart_eyes")}</p> */}
      <List
        selectedActivity={selectedActivity}
        setSelectedActivity={setSelectedActivity}
      />

      <Title />

      <Modal
        class={Object.keys(selectedActivity).length > 0 ? "five" : ""}
        activity={selectedActivity}
        setSelectedActivity={setSelectedActivity}
        keyCode={keyCode}
      />
      <footer>
        Made with {Emoji.getUnicode("yellow_heart")} by someone awesome
      </footer>
    </Layout>
  )
}

export default IndexPage
