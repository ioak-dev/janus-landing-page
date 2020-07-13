import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
    faIcon: any
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="sectiontile">
      <h4 className="heading--4">{props.data.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
    </div>
  )
}
