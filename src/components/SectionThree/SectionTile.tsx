import React from "react"
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  title: string
  subtitle: string
  faIcon?: any
}

export default function SectionTile(props: Props) {
  return (
    <div className="sectiontile">
      <FontAwesomeIcon icon={props.faIcon} size="2x" color="#d0d0d0" />
      <h3 className="heading--3">{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  )
}
