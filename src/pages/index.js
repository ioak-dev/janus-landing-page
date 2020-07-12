import React from "react"
import DemoSection from "../components/DemoSection"
import HeroSection from "../components/HeroSection"
import KeySection from "../components/KeySection"
import OnboardSection from "../components/OnboardSection"
import "./style.scss"
import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"

export default function Home() {
  return (
    <div className="page-home">
      <HeroSection />
      <KeySection />
      <DemoSection />
      <OnboardSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
