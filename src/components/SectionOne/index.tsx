import React from "react"
import "./style.scss"
import Header from "./Header"
import Preview from "./Preview"
import OakButton from "../oakfly/OakButton"
import { faJediOrder } from "@fortawesome/free-brands-svg-icons"

export default function SectionOne() {
  return (
    <div className="sectionone">
      <div className="sectionone--container">
        <Header />
        <h1 className="heading--1 sectionone--container--title">
          Manage your Agile projects
        </h1>
        <p className="heading--2 sectionone--container--subtitle">
          Manage your agile software workflow (be it Scrum or Kanban) with the
          clean and visually feature rich application, thereby increasing the
          speed and collaboration of your project teams
        </p>
        <div>
          <OakButton
            action={() => (window.location.href = "https://janus.ioak.org")}
            label="Get Started"
            faIcon={faJediOrder}
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}
