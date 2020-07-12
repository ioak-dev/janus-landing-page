import React from "react"
import "./style.scss"
import oneauthWhite from "../../assets/janus_white.svg"

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={oneauthWhite} alt="Janus logo" />
    </div>
  )
}
