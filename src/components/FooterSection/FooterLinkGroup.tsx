import React from "react"
import "./style.scss"

interface Props {
  data: {
    group: string
    list: [
      {
        href: string
        label: string
      }
    ]
  }
}

export default function FooterLinkGroup(props: Props) {
  return (
    <div className="footer-link-group">
      <div className="footer-link-group--title">{props.data.group}</div>
      <div className="footer-link-group--content">
        {props.data.list.map(item => (
          <div>{item.label}</div>
        ))}
      </div>
    </div>
  )
}
