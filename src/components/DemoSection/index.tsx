import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/DemoSection.json"
import OakButton from "../oakfly/OakButton"

export default function DemoSection() {
  const demo = () => {
    console.log("*** redirect to demo")
  }
  return (
    <div className="demo-section">
      <div className="column-layout">
        <div className="demo-section--container">
          <div className="demo-section--container-content">
            <h2 className="heading--2">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <OakButton
            variant="secondary"
            label={content.callToAction.label}
            faIcon={content.callToAction.faIcon}
            action={demo}
          />
        </div>
      </div>
    </div>
  )
}
