import React, { useState } from "react"
import { Link } from "gatsby"

import List from "../components/list"
import Modal from "../components/modal"
import Title from "../components/title"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Emoji from "emoji-dictionary"

const IndexPage = () => {
  const [selectedActivity, setSelectedActivity] = useState({})

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
      />
      <footer>
        Made with {Emoji.getUnicode("yellow_heart")} by someone awesome
      </footer>
    </Layout>
  )
}

export default IndexPage
