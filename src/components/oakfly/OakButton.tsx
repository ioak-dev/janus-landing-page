import React from "react"
import "./OakButton.scss"

interface Props {
  action: any
  label: any
  faIcon: any
  variant: "primary" | "secondary" | "tertiary"
}
export default function OakButton(props: Props) {
  return (
    <button className={`oak-button ${props.variant}`} onClick={props.action}>
      <i className={props.faIcon} />
      <div className="oak-button--label">{props.label}</div>
    </button>
  )
}
