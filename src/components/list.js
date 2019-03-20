import React, { useState } from "react"
import Emoji from "emoji-dictionary"

import Modal from "./Modal"
const ACTIVITIES = [
  {
    id: 1,
    activity: `Take Jax on a walk ${Emoji.getUnicode("dog")}`,
    result: `Dammit Janet we forgot the dog treats`,
    icons: ` ${Emoji.getUnicode("confused")} ${Emoji.getUnicode(
      "poodle"
    )} ${Emoji.getUnicode("dog")} ${Emoji.getUnicode("dog2")} `,
  },
  {
    id: 2,
    activity: `Go out for a couple drinks ${Emoji.getUnicode("cocktail")} `,
    result: "Dammit Janet we got blacked out again",
    icons: `${Emoji.getUnicode("see_no_evil")} ${Emoji.getUnicode(
      "wine_glass"
    )} ${Emoji.getUnicode("flushed")} ${Emoji.getUnicode("cocktail")} `,
  },
  {
    id: 3,
    activity: `Have a picnic at the park ${Emoji.getUnicode("sunny")} `,
    result: "Dammit Janet we forgot the White Claw",
    icons: `${Emoji.getUnicode("flushed")} ${Emoji.getUnicode(
      "cocktail"
    )} ${Emoji.getUnicode("dog")} ${Emoji.getUnicode("expressionless")}`,
  },
  {
    id: 4,
    activity: `Listen to Kacey Musgraves  ${Emoji.getUnicode("musical_note")} `,
    result: "Good Idea Janet!",
    icons: `${Emoji.getUnicode("musical_note")} ${Emoji.getUnicode(
      "wine_glass"
    )} ${Emoji.getUnicode("+1")} ${Emoji.getUnicode("relaxed")}`,
  },
]

const List = props => {
  const makeList = () => {
    return ACTIVITIES.map(item => {
      return (
        <div
          key={item.id}
          className="list-item"
          onClick={() => props.setSelectedActivity(item)}
        >
          <p className="activity">{item.activity}</p>
        </div>
      )
    })
  }
  return <div className="list">{makeList()}</div>
}

export default List
