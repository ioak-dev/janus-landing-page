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
            <h3 className="heading--3">{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <OakButton
            theme="primary"
            variant="drama"
            faIcon={content.callToAction.faIcon}
            action={demo}
          >
            {content.callToAction.label}
          </OakButton>
        </div>
      </div>
    </div>
  )
}
