import React, { useEffect, useRef } from "react"

const Modal = props => {
  let modalRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (!modalRef.current.contains(e.target)) {
      props.setSelectedActivity({})
    } else {
      return
    }
  }

  return (
    <div id="modal-container" className={`${props.class}`}>
      <div className={`modal-background ${props.class}`}>
        <div className="modal" ref={modalRef}>
          <span
            className="close"
            onClick={() => props.setSelectedActivity({})}
          />
          <div className="modal-inner-wrapper">
            <p className="result">{props.activity.result}</p>
            <p className="icons">{props.activity.icons}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
