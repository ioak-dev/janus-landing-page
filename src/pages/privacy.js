import React from "react"
import FooterSection from "../components/FooterSection"
import HeaderSection from "../components/HeaderSection"
import PrivacySection from "../components/PrivacyPage/PrivacySection"

export default function Privacy() {
  return (
    <div className="page-privacy">
      <HeaderSection black />
      <PrivacySection />
      <FooterSection />
    </div>
  )
}
