import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import {
  faHandHoldingUsd,
  faPalette,
  faBraille,
} from "@fortawesome/free-solid-svg-icons"

export default function SectionThree() {
  return (
    <div className="sectionthree">
      <div className="sectionthree--container">
        <SectionTile
          faIcon={faPalette}
          title="Modern UI"
          subtitle="Sleek and clean user interface allows you to focus on the task at hand. Allows you to choose between light and dark modes based on your personal preference"
        />
        <SectionTile
          faIcon={faHandHoldingUsd}
          title="Free"
          subtitle="This is an open community initiative and it's absolutely free for personal and commercial purposes. You can create as many number of projects and teams as you need without limit"
        />
        <SectionTile
          faIcon={faBraille}
          title="More features"
          subtitle="We are continously working towards improving the application and adding new features"
        />
      </div>
    </div>
  )
}
