import React from "react"
import TermsSection from "../components/TermsPage/TermsSection"
import FooterSection from "../components/FooterSection"
import HeaderSection from "../components/HeaderSection"

export default function Terms() {
  return (
    <div className="page-terms">
      <HeaderSection black />
      <TermsSection />
      <FooterSection />
    </div>
  )
}
