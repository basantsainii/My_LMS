import React from 'react'
import Bgblur from './Bgblur'
import { createPortal } from 'react-dom'
import Prompt from './Prompt'

function Modal({ttogle}) {
  return (
    <>
      {createPortal(<Bgblur ttogle={ttogle}/>, document.getElementById("BG_Blr"))}
      {createPortal(<Prompt/>, document.getElementById("Prompt"))}
    </>
  )
}

export default Modal
