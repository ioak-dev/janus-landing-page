import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import AppPreview from "./AppPreview"
import HeaderSection from "../HeaderSection"

export default function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section--container column-layout">
          <HeaderSection />
          <h1 className="heading--1 hero-section--container--title">
            {content.title}
          </h1>
          <p className="heading--2 hero-section--container--subtitle">
            {content.subtitle}
          </p>
          <div>
            <OakButton
              action={() => (window.location.href = "https://janus.ioak.org")}
              label={content.callToAction.label}
              faIcon={content.callToAction.faIcon}
              variant="primary"
            />
          </div>
        </div>
      </div>
      <AppPreview />
    </>
  )
}
