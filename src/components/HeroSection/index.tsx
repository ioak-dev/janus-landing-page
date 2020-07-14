import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import AppPreview from "./AppPreview"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"

export default function HeroSection() {
  return (
    <div className="hero-section-group">
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
            <CallToAction data={content.callToAction} />
          </div>
        </div>
      </div>
      <AppPreview />
    </div>
  )
}
