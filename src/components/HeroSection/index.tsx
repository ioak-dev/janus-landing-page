import React from "react"
import "./style.scss"
import HeaderSection from "../HeaderSection"
import HeroContent from "./HeroContent"
import content from "../../assets/content/HeroSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section--container column-layout">
        <HeaderSection />
        <div className="hero-section--container--content">
          <OakAnimateElement direction="up">
            <HeroContent data={content} />
          </OakAnimateElement>
        </div>
      </div>
    </div>
  )
}
